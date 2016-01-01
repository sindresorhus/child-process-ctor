import childProcess from 'child_process';
import test from 'ava';
import m from './';

test(t => {
	const ctor = m();
	const ctorNative = childProcess.ChildProcess;

	t.is(ctor.name, 'ChildProcess');
	t.is(typeof ctor.prototype.spawn, 'function');

	if (typeof ctorNative === 'function') {
		t.is(ctor, ctorNative);
		t.is(ctor.prototype.spawn, ctorNative.prototype.spawn);
	}
});
