import { window } from 'vscode';
import { promptText } from './askName';
import camelCase from 'lodash.camelcase';
import { getDefaultAngularPath } from './getAngularConfigs';
import { GenerationTypes } from '../models/generationTypes';

export async function getPathToGenerate(type: GenerationTypes, uriPath: string) {
    const name = await promptText(`Please provide a name for the ${type}. Use / to create a nested structure`, '');
    if (!name) {
        window.showErrorMessage(`Please provide a name for the ${type} and try again`);
        return;
    }
    const camelcaseStr = name.split('/').map((name) => camelCase(name.trim())).join('/');
    const path = await getDefaultAngularPath();
    if (!path) {
        return;
    }
    const userChosenPath: string = uriPath;
    let pathToUse = '';
    if (type === GenerationTypes.Component) {
        pathToUse = path.componentPath;
    } else if (type === GenerationTypes.Service) {
        pathToUse = path.servicePath;
    } else {
        window.showErrorMessage(`Error: Invalid type value`);
        return;
    }
    const correctedPath = userChosenPath.split(`${pathToUse}/`)[1];
    if (!correctedPath) {
        window.showErrorMessage(`Please select a folder inside the configured ${type} path`);
        return;
    }
    const pathToGenerate = `${correctedPath}/${camelcaseStr}`;
    return pathToGenerate;
}