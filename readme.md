# npmout [![Build Status](https://travis-ci.org/willyb321/npmout.svg?branch=master)](https://travis-ci.org/willyb321/npmout)

> Checks for outdated deps in NPM


## Install

```
$ npm install --save npmout
```


## Usage

```js
const npmout = require('npmout');

npmout('unicorns');
//=> 'unicorns & rainbows'
```


## API

### npmout(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global npmout
```

```
$ npmout --help

  Usage
    npmout [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ npmout
    unicorns & rainbows
    $ npmout ponies
    ponies & rainbows
```


## License

MIT © [William Blythe](http://tehsuperwilly.tech)
