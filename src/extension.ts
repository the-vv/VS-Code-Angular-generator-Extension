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

	const disposableDirective = commands.registerCommand('angular-generator.generateDirective', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Directive, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Directive);
		const command = `ng generate directive ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	const disposablePipe = commands.registerCommand('angular-generator.generatePipe', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Pipe, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Pipe);
		const command = `ng generate pipe ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	const disposableGuard = commands.registerCommand('angular-generator.generateGuard', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Guard, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Guard);
		const command = `ng generate guard ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	const disposableInterceptor = commands.registerCommand('angular-generator.generateInterceptor', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Interceptor, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Interceptor);
		const command = `ng generate interceptor ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	const disposableModule = commands.registerCommand('angular-generator.generateModule', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Module, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Module);
		const command = `ng generate module ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	const disposableResolver = commands.registerCommand('angular-generator.generateResolver', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Resolver, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Resolver);
		const command = `ng generate resolver ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	const disposableClass = commands.registerCommand('angular-generator.generateClass', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Class, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Class);
		const command = `ng generate class ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	const disposableEnum = commands.registerCommand('angular-generator.generateEnum', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Enum, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Enum);
		const command = `ng generate enum ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	const disposableInterface = commands.registerCommand('angular-generator.generateInterface', async (uri) => {
		const pathToGenerate = await getPathToGenerate(GenerationTypes.Interface, uri.fsPath);
		if (!pathToGenerate) {
			return;
		}
		const additionalFlags = await getAdditionalFlags(GenerationTypes.Interface);
		const command = `ng generate interface ${pathToGenerate.pathToGenerate} --project=${pathToGenerate.projectName} ${additionalFlags}`;
		runInTerminal(command).then(() => {
			window.showInformationMessage('Ran command: ' + command);
		});
	});

	context.subscriptions.push(
		disposable,
		disposableService,
		disposableDirective,
		disposablePipe,
		disposableGuard,
		disposableInterceptor,
		disposableModule,
		disposableResolver,
		disposableClass,
		disposableEnum,
		disposableInterface
	);
}

// This method is called when your extension is deactivated
export function deactivate() {
}