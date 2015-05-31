# child-process-ctor [![Build Status](https://travis-ci.org/sindresorhus/child-process-ctor.svg?branch=master)](https://travis-ci.org/sindresorhus/child-process-ctor)

> io.js 2.2.0 `childProcess.ChildProcess` ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method

The `ChildProcess` constructor was [exposed](https://github.com/nodejs/io.js/blob/master/CHANGELOG.md#commits) in io.js 2.2.0. This makes it accessible in all Node versions.


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
