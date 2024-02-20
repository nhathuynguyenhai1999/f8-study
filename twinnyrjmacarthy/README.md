winny

Are you fed up of all of those so called "free" Copilot alternatives with paywalls and signups? Fear not my developer friend! Twinny is the most no-nonsense locally hosted (or api hosted) AI code completion plugin for Visual Studio Code designed to work seamlessly with Ollama or llama.cpp. Like Github Copilot but 100% free and 100% private.


Install the twinny vscode extension


How twinny helps developers
Fast and accurate code completion:


Chat with AI about your code


Other features
Free
Private
Auto code completion
Configurable single or multiline completions
Fast and accurate
Multiple language support
Configurable prompt templates
Easy to install
Configurable endpoint and port and path for completion API
Chat feature like Copilot Chat
Accept solution directly to editor
Copy generated code solution blocks
Chat history preserved per conversation
🚀 Getting Started
Easy Installation
You can install the verified extension at this link or find the extension in the extensions section of Visual Studio Code marketplace.

Twinny is configured to use Ollama by deafult. Therefore, when installing the twinny extension in Visual Studio Code, it will automatically prompt and guide you through the installation of Ollama using two default small models codellama:7b-instruct for chat and codellama:7b-code for "fill in the middle" completions.

If you already have Ollama installed or you want to use llama.cpp instead, you can cancel the automatic setup of Ollama and proceed to update the values inside twinny extension settings to point to your existing models and server.

You can find the settings inside the extension sidebar by clicking the gear icon inside the twinny sidebar or by searching for twinny in the extensions search bar.

The main values which need to be updated to switch between Ollama and llama.cpp are:

apiUrl - The url to your Ollama or llama.cpp server (default: localhost)
apiPath - The API path which defaults to /api/generate for Ollama and /completion for llama.cpp (See llama.cpp docs or Ollama docs).
apiPort - The port of your Ollama (default 11434) or llama.cpp server (default 8080)
If you are using llama.cpp - The twinny settings for FIM model name and Chat model name will be ignored, as this should already be configured when running the llama.cpp server.

When the extension is ready you will see a 🤖 icon at the bottom of your code editor.

You will also see which models are being used (only applicable to Ollama hosted servers).

That's it! Enjoy enhanced code completions and chat with twinny! 🎉

Tested and supported Ollama models
twinny and Ollama have been tested and are working on Linux with a 3090 with the following models:

codellama instruct for chat and code for FIM. (https://ollama.ai/library/codellama)
phind-codellama for chat (https://ollama.ai/library/phind-codellama)
deepseek-coder:6.7b-base-q5_K_M and deepseek-coder:base for FIM
For FIM

The model must support the llama special tokens for prefix and suffix if using codellama models.
Only use deepseek base models for FIM completions for example deepseek-coder:base and deepseek-coder:6.7b-base-q5_K_M
For stable-code stable-code:code has been tested and works for FIM.
For chat

All llama models should work, although any model will probably work too, results may vary if the special tokens are different from Llama.
Prompt templates will need to be updated if using different models due to special tokens see known issues section.
Tested and supported llama.cpp models
twinny and llama.ccp has been tested and are working with the following models:

https://huggingface.co/TheBloke/CodeLlama-7B-GGUF
https://huggingface.co/TheBloke/CodeLlama-13B-GGUF
Keyboard shortcuts
Shortcut	Description
ALT+\	Trigger inline code completion
CTRL+SHIFT+t	Open twinny sidebar
CTRL+SHIFT+/	Stop code generation
Known issues
If the server settings are incorrectly set chat and fim completion will not work, if this is the case please open an issue with your error message.
Some models may not support the special tokens of llama which means they would not work correctly for FIM completions.
Sometimes a restart of vscode is required for new settings to take effect
FIM and Chat completions for llama.cpp aren't working if using one api/model endpoint (i.e spit out garbage chat/fim completions), so use two different endpoints (one for chat and another for fim) or use Ollama instead of llama.cpp
Using file context often causes incorrect completions for FIM completions because small models get confused when provided with more than one file context.
If using stable-code or deekseek for instruct prompt-templates need to be updated.
If you have a suggestion for improvement please open an issue and I will do my best to make it happen!

Contributing
We are actively looking for contributors who want to help improve the project, if you are interested in helping out please reach out on twitter.

Contributions are welcome please open an issue describing your changes and open a pull request when ready.

This project is under MIT licence, please read the LICENSE file for more information.
