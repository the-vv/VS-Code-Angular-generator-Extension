import { Task, TaskScope, ShellExecution, TaskRevealKind, tasks } from "vscode";

export function runInTerminal(command: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        const task = new Task(
            { type: 'shell' },
            TaskScope.Workspace,
            'Angular Generator (CLI)',
            'ng',
            new ShellExecution(command)
        );
        task.presentationOptions = {
            echo: true,
            reveal: TaskRevealKind.Silent,
            close: true,
            clear: true,
            showReuseMessage: false,
            focus: true,
        };

        tasks.executeTask(task).then(() => {
            resolve(true);
        });

    });
}