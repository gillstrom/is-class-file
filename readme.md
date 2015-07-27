# is-class-file [![Build Status](https://travis-ci.org/gillstrom/is-class-file.svg?branch=master)](https://travis-ci.org/gillstrom/is-class-file)

> Check if a Buffer/Uint8Array is a `.class` file.

*FUN FACTS: The magic number is `CAFEBABE`.*


## Install

```
$ npm install --save is-class-file
```


## Usage

```js
var read = require('fs').readFileSync;
var isClassFile = require('is-class-file');

isClassFile(read('foo.class'));
//=> true
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
