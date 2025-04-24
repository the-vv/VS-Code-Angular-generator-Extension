import path from "path";
import * as fs from 'fs';
import { workspace, window, WorkspaceFolder } from "vscode";
import { GenerationTypes } from '../models/generationTypes';

export async function getDefaultAngularPath() {
    let selectedWorkspaceFolder: WorkspaceFolder | undefined = undefined;
    if (workspace.workspaceFolders && workspace.workspaceFolders.length > 1) {
        // Prompt the user to select a workspace folder
        selectedWorkspaceFolder = await window.showWorkspaceFolderPick({
            placeHolder: 'Select a workspace folder',
        });
    }
    // If no workspace folder is selected, use the first one
    const workspaceFolder = selectedWorkspaceFolder || workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
        window.showErrorMessage('Workspace folder not found.');
        return;
    }
    if (workspaceFolder) {
        // Path to the angular.json file
        const angularJsonPath = path.join(workspaceFolder.uri.fsPath, 'angular.json');

        // Check if angular.json exists
        if (fs.existsSync(angularJsonPath)) {
            try {
                const fileContent = fs.readFileSync(angularJsonPath, 'utf-8');
                const angularConfig = JSON.parse(fileContent);

                const projects = angularConfig.projects;
                let projectNameToUse: string | undefined = '';
                if (Object.keys(projects).length === 0) {
                    window.showInformationMessage('No projects found in angular.json.');
                    return;
                }
                if (Object.keys(projects).length === 1) {
                    projectNameToUse = Object.keys(projects)[0];
                } else {
                    // Prompt the user to select a project
                    const projectNames = Object.keys(projects);
                    projectNameToUse = await window.showQuickPick(projectNames, {
                        placeHolder: 'Select a project to use',
                    });
                }
                if (!projectNameToUse) {
                    window.showErrorMessage('No project selected.');
                    return;
                }
                if (projects[projectNameToUse]?.schematics) {
                    const schematics = projects[projectNameToUse].schematics;
                    const componentConfig = schematics['@schematics/angular:component'];
                    const serviceConfig = schematics['@schematics/angular:service'];
                    const directiveConfig = schematics['@schematics/angular:directive'];
                    const pipeConfig = schematics['@schematics/angular:pipe'];
                    const guardConfig = schematics['@schematics/angular:guard'];
                    const classConfig = schematics['@schematics/angular:class'];
                    const interfaceConfig = schematics['@schematics/angular:interface'];
                    const enumConfig = schematics['@schematics/angular:enum'];
                    const moduleConfig = schematics['@schematics/angular:module'];
                    const interceptorConfig = schematics['@schematics/angular:interceptor'];
                    const resolverConfig = schematics['@schematics/angular:resolver'];

                    const componentPath: string = componentConfig?.path || 'src/app'; // default path
                    const servicePath: string = serviceConfig?.path || 'src/app'; // default path
                    const directivePath: string = directiveConfig?.path || 'src/app'; // default path
                    const pipePath: string = pipeConfig?.path || 'src/app'; // default path
                    const guardPath: string = guardConfig?.path || 'src/app'; // default path
                    const classPath: string = classConfig?.path || 'src/app'; // default path
                    const interfacePath: string = interfaceConfig?.path || 'src/app'; // default path
                    const enumPath: string = enumConfig?.path || 'src/app'; // default path
                    const modulePath: string = moduleConfig?.path || 'src/app'; // default path
                    const interceptorPath: string = interceptorConfig?.path || 'src/app'; // default path
                    const resolverPath: string = resolverConfig?.path || 'src/app'; // default path

                    return {
                        projectNameToUse,
                        paths: {
                            [GenerationTypes.Component]: componentPath,
                            [GenerationTypes.Service]: servicePath,
                            [GenerationTypes.Directive]: directivePath,
                            [GenerationTypes.Pipe]: pipePath,
                            [GenerationTypes.Guard]: guardPath,
                            [GenerationTypes.Class]: classPath,
                            [GenerationTypes.Interface]: interfacePath,
                            [GenerationTypes.Enum]: enumPath,
                            [GenerationTypes.Module]: modulePath,
                            [GenerationTypes.Interceptor]: interceptorPath,
                            [GenerationTypes.Resolver]: resolverPath
                        }
                    };
                }

            } catch (error) {
                window.showErrorMessage('Failed to read or parse angular.json file.');
            }
        } else {
            window.showErrorMessage('angular.json not found in workspace.');
        }
    } else {
        window.showErrorMessage('No workspace folder open.');
    }
}
