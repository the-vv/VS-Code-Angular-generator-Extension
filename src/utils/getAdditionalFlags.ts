import { window, QuickPickItem } from "vscode";
import { getFlags } from "../constants/flags";
import { GenerationTypes } from "../models/generationTypes";

export function getAdditionalFlags(type: GenerationTypes): Promise<string> {
    const flagsList = getFlags(type);
    if (!flagsList.length) {
        return Promise.resolve("");
    }
    return new Promise<string>((resolve) => {
        window.showQuickPick(
            flagsList.map((flag) => ({ label: flag[0], description: flag[1] } as QuickPickItem)),
            {
                placeHolder: 'Search flags',
                canPickMany: true,
                title: `Select additional flags for ${type}`,
            }
        ).then((selected) => {
            if (selected) {
                const additionalFlags = selected.map((flag) => flag.label).join(' ');
                resolve(additionalFlags);
            }
            resolve("");
        });
    });
}