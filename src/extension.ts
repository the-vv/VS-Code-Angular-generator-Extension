import { commands, ExtensionContext, window } from 'vscode';
import { getPathToGenerate } from './utils/getPathToGenerate';
import { GenerationTypes } from './models/generationTypes';
import { runInTerminal } from './utils/runInTerminal';

export function activate(context: ExtensionContext) {
	console.log('Congratulations, your extension "angular-generator" is now active!');
	const disposable = commands.registerCommand('angular-generator.generateComponent', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Component, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const command = `ng generate component ${pathToGenerate}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});
	const disposableService = commands.registerCommand('angular-generator.generateService', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Service, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const command = `ng generate service ${pathToGenerate}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableService);
}

// This method is called when your extension is deactivated
export function deactivate() {
	console.log('Extension "angular-generator" is now deactivated!');
}