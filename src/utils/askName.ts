import { window } from "vscode";

export function promptText(defaultValue?: string): Promise<string | undefined> {
    return new Promise(async (resolve) => {
        const response = await window.showInputBox({
            placeHolder: "Type your response here",
            prompt: "Please enter a value",
            value: defaultValue,
        });
        resolve(response);
    });
}