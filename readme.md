# Deprecated

Deprecated since Node.js 4 is no longer maintained.

---

# child-process-ctor [![Build Status](https://travis-ci.org/sindresorhus/child-process-ctor.svg?branch=master)](https://travis-ci.org/sindresorhus/child-process-ctor)

> Node.js 4 [`childProcess.ChildProcess`](https://github.com/nodejs/node/commit/a77c330c32) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save child-process-ctor
```


## Usage

```js
var childProcessCtor = require('child-process-ctor');

console.log(typeof childProcessCtor().prototype.spawn);
//=> 'function'
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
