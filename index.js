'use strict';
var childProcess = require('child_process');

var ctor;

module.exports = function () {
	if (typeof childProcess.ChildProcess === 'function') {
		return childProcess.ChildProcess;
	}

	if (ctor !== undefined) {
		return ctor;
	}

	var cp = childProcess.spawn(process.execPath);
	cp.kill('SIGKILL');
	ctor = cp.constructor;

	return ctor;
};
