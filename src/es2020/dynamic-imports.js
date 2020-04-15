(async () => {
	const LogModule = await import('./others/log.module');
	LogModule.info('Succesful imported async Log Module!');
})();
