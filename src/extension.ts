import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	vscode.window.onDidCloseTerminal(t => {
		if (t.exitStatus) {
			vscode.window.showInformationMessage(`Test: Code: ${t.exitStatus.code}`);
		}
	});
}

export function deactivate() { }
