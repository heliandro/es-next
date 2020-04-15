const theGlobalThis = globalThis;

if (globalThis.window) {
	// Browser
	globalThis.window?.console?.log?.('From Browser: Hello Global This!!');
} else {
	// Nodejs
	console.log(`
		From Nodejs: Hello Global This! | See the process values:
		
		name: ${ theGlobalThis.process.title }
		pid: ${ theGlobalThis.process.pid }
		username: ${ theGlobalThis.process.env?.USERNAME }
		operational system: ${ theGlobalThis.process.platform }
		architecture: ${ theGlobalThis.process.arch }
	`)
}
