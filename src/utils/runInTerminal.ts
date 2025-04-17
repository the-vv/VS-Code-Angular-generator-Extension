import { window, env } from "vscode";

export function runInTerminal(command: string, name: string = "Angular Generator (CLI)"): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        const terminal = window.createTerminal(name); // Use name if provided
        terminal.show(); // Show the terminal
        const shell = env.shell; // Get the user's default shell

        // Adjust the command based on the shell
        const exitCommand = shell.includes("cmd.exe") ? "& exit" : "&& exit";
        terminal.sendText(`${command} ${exitCommand}`); // Send command and exit
        resolve(true);
    });
}