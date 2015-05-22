# child-process-ctor [![Build Status](https://travis-ci.org/sindresorhus/child-process-ctor.svg?branch=master)](https://travis-ci.org/sindresorhus/child-process-ctor)

> Node.js `childProcess.ChildProcess` ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method

The `ChildProcess` constructor weren't previously easily exposed. This is most likely going to [change soon](https://github.com/nodejs/io.js/pull/1760).


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
