import { commands, ExtensionContext, window } from 'vscode';
import { getPathToGenerate } from './utils/getPathToGenerate';
import { GenerationTypes } from './models/generationTypes';
import { runInTerminal } from './utils/runInTerminal';
import { getAdditionalFlags } from './utils/getAdditionalFlags';

export function activate(context: ExtensionContext) {
	const disposable = commands.registerCommand('angular-generator.generateComponent', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Component, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Component);
		const command = `ng generate component ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});
	const disposableService = commands.registerCommand('angular-generator.generateService', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Service, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Service);
		const command = `ng generate service ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableService);
}

// This method is called when your extension is deactivated
export function deactivate() {
}