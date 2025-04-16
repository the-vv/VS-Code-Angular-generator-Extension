// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext, window } from 'vscode';
import { getPathToGenerate } from './utils/getPathToGenerate';
import { GenerationTypes } from './models/generationTypes';

export function activate(context: ExtensionContext) {
	const disposable = commands.registerCommand('angular-generator.generateComponent', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Component, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const terminal = window.createTerminal(); // No name, no show
		terminal.sendText('ng generate component ' + pathToGenerate);
		window.showInformationMessage('Generated component at: ' + pathToGenerate);
	});
	const disposableService = commands.registerCommand('angular-generator.generateService', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Service, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const terminal = window.createTerminal(); // No name, no show
		terminal.sendText('ng generate service ' + pathToGenerate);
		window.showInformationMessage('Generated service at: ' + pathToGenerate);
	});


	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableService);
}

// This method is called when your extension is deactivated
export function deactivate() { }
