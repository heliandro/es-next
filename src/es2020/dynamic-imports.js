/*
* Dynamic import - Is a new import with function-like syntax that returns a promise for the required module.
* */

(async () => {
	const LogModule = await import('./others/log.module');
	LogModule.info('Succesful imported async Log Module!');
})();
