import { ClientRequest, IncomingMessage, RequestOptions, request } from 'http'
import { request as httpsRequest } from 'https'
import { ColorThemeKind, Uri, commands, window, workspace } from 'vscode'

import path from 'path'
import { StreamOptions, StreamResponse, Theme, LanguageType } from './types'
import { supportedLanguages } from './languages'

interface StreamResponseOptions {
  body: StreamOptions
  options: RequestOptions
  onData: (
    streamResponse: StreamResponse | undefined,
    destroy: () => void
  ) => void
  onEnd?: (destroy: () => void) => void
  onStart?: (req: ClientRequest) => void
  onError?: (error: Error) => void
}

export const isLlamaCppStream = (stringBuffer: string) => {
  return stringBuffer.startsWith('data:')
}

const safeParseJson = (stringBuffer: string): StreamResponse | undefined => {
  try {
    if (isLlamaCppStream(stringBuffer)) {
      return JSON.parse(stringBuffer.split('data:')[1])
    }
    return JSON.parse(stringBuffer)
  } catch (e) {
    return undefined
  }
}

export async function streamResponse(opts: StreamResponseOptions) {
  const { body, options, onData, onEnd, onError, onStart } = opts
  const config = workspace.getConfiguration('twinny')
  const useTls = config.get('useTls')

  const _request = useTls ? httpsRequest : request

  let stringBuffer = ''

  const req = _request(options, (res: IncomingMessage) => {
    const statusCode = res.statusCode

    if (typeof statusCode !== 'number') {
      onError?.(new Error('Response statusCode is undefined'))
      return
    }

    if (statusCode < 200 || statusCode >= 300) {
      onError?.(
        new Error(`Server responded with status code: ${res.statusCode}`)
      )
      res.destroy()
      return
    }

    res.on('data', (chunk: string) => {
      stringBuffer += chunk.toString()
      try {
        if (/\n$/.exec(stringBuffer)) {
          const streamResponse = safeParseJson(stringBuffer)
          onData(streamResponse, () => res.destroy())
          stringBuffer = ''
        }
      } catch (e) {
        onError?.(e instanceof Error ? e : new Error('Error processing data'))
        res.destroy()
      }
    })

    res.once('end', () => {
      onEnd?.(() => res.destroy())
    })
  })

  req.on('error', (error: Error) => {
    onError?.(error)
  })

  try {
    if (body) {
      req.write(JSON.stringify(body))
    }
    onStart?.(req)
    req.end()
  } catch (e) {
    onError?.(e instanceof Error ? e : new Error('Error sending request'))
    req.destroy()
  }
}

const tmpDir = path.join(__dirname, './tmp')

export function openDiffView(original: string, proposed: string) {
  const uri1 = Uri.file(`${tmpDir}/twinny-original.txt`)
  const uri2 = Uri.file(`${tmpDir}/twinny-proposed.txt`)

  workspace.fs.writeFile(uri1, Buffer.from(original, 'utf8'))
  workspace.fs.writeFile(uri2, Buffer.from(proposed, 'utf8'))

  commands.executeCommand('vscode.diff', uri1, uri2)
}

export async function deleteTempFiles() {
  const dir = Uri.file(tmpDir)

  try {
    const files = await workspace.fs.readDirectory(dir)

    for (const [file] of files) {
      const fileUri = Uri.file(path.join(dir.path, file))
      await workspace.fs.delete(fileUri)
    }
  } catch (err) {
    return
  }
}

export const delayExecution = <T extends () => void>(
  fn: T,
  delay = 200
): NodeJS.Timeout => {
  return setTimeout(() => {
    fn()
  }, delay)
}

export const getTextSelection = () => {
  const editor = window.activeTextEditor
  const selection = editor?.selection
  const text = editor?.document.getText(selection)
  return text || ''
}

export const getLanguage = (): LanguageType => {
  const editor = window.activeTextEditor
  const languageId = editor?.document.languageId
  const language =
    supportedLanguages[languageId as keyof typeof supportedLanguages]
  return {
    language,
    languageId
  }
}

export const getTheme = () => {
  const currentTheme = window.activeColorTheme
  if (currentTheme.kind === ColorThemeKind.Light) {
    return Theme.Light
  } else if (currentTheme.kind === ColorThemeKind.Dark) {
    return Theme.Dark
  } else {
    return Theme.Contrast
  }
}

export const noop = () => undefined