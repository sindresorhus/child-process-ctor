'use strict';
var test = require('ava');
var childProcessCtor = require('./');

test(function (t) {
	var ctor = childProcessCtor();
	t.assert(ctor.name === 'ChildProcess');
	t.assert(typeof ctor.prototype.spawn === 'function');
	t.end();
});
