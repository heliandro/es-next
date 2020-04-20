/*
* Global This - In the past we needed to use objects like the "window" to access the  "global this", now we have a
* new standard, the "global this". With "global this" we can access some global properties such as "window" in
* Browser and "process" in Node.js
*
* To access the global this, you must use the globalThis object.
* */

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
