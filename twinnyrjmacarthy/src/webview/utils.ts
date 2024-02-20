import { EMPTY_MESAGE } from '../constants'
import { CodeLanguage, supportedLanguages } from '../languages'
import { LanguageType, ServerMessage } from '../types'

export const getLanguageMatch = (
  language: LanguageType | undefined,
  className: string | undefined
) => {
  const match = /language-(\w+)/.exec(className || '')

  if (match && match.length) {
    const matchedLanguage = supportedLanguages[match[1] as CodeLanguage]

    return matchedLanguage && matchedLanguage.derivedFrom
      ? matchedLanguage.derivedFrom
      : match[1]
  }

  if (language && language.languageId) {
    const languageId = language.languageId.toString()
    const languageEntry = supportedLanguages[languageId as CodeLanguage]

    return languageEntry && languageEntry.derivedFrom ? languageEntry.derivedFrom : languageId
  }

  return 'javascript'
}

export const getCompletionContent = (message: ServerMessage) => {
  if (message.value.error && message.value.errorMessage) {
    return message.value.errorMessage
  }

  return message.value.completion || EMPTY_MESAGE
}