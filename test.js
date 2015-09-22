import test from 'ava';
import fn from './';

test(t => {
	const ctor = fn();
	t.is(ctor.name, 'ChildProcess');
	t.is(typeof ctor.prototype.spawn, 'function');
	t.end();
});
