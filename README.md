Minimal Custom Elements
=======================
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Factory for creating minimal [custom elements](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/).


## Installation

``` bash
$ npm install minimal-custom-element --save
```


## Usage

``` javascript
var createCustomElement = require( 'minimal-custom-element' );
```

To create a new custom element,

``` javascript
var element = createCustomElement( 'my-element-name' );
```

where `my-element-name` is the custom element name. A name must start with `a-z`, contain a hyphen `-`, and be alphanumeric. For additional naming rules, see [validate-element-name](https://github.com/sindresorhus/validate-element-name) and its associated source code. 

The `element` instance has the following methods...

#### element.attr( [name, [value]] )

This method is a setter/getter. If no arguments are provided, returns an `object` containing all attribute-value pairs. If only a `name` is provided, returns the corresponding attribute `value`. If the attribute does not exist, returns `undefined`. If a `name` and `value` are provided, sets the attribute `value`.

``` javascript
// Set an attribute value:
element.attr( 'class', 'beep' );
element.attr( 'id', 'boop' );

// Get the `class` attribute's value:
element.attr( 'class' );
// Returns 'beep'

// Get all attribute value pairs:
element.attr();
// Returns {'class':'beep','id':'boop'}
```

Note: to set an attribute `value`, the `value` must be either a `string`, `boolean`, or `number`.


#### element.void( [bool] )

This method is a setter/getter. If a `boolean` is not provided, returns a `boolean` indicating if an element is a [void element](http://www.w3.org/TR/html-markup/syntax.html). If a `boolean` is provided, sets whether an `element` should be considered a void element. To set the void status,

``` javascript
element.void( true );
```

#### element.append( node )

Appends a node ([Element](https://github.com/element-io/element) or [Text](https://github.com/element-io/text) instance) to an `element`. If the `element` is a [void element](http://www.w3.org/TR/html-markup/syntax.html), this method will throw an `Error`.

``` javascript
var el = createCustomElement( 'xfig-chart' );

element.append( el );
```

When an `element` is serialized, nested elements are serialized in the order in which they were appended.


#### element.toString()

Serializes an `element` as a `string`.

``` javascript
element.toString();
// Returns '<tag>...</tag>'
```


## Examples

``` javascript
// Create a new custom parent container...

var container = createCustomElement( 'my-container' );
container.attr( 'class', 'container' );

// Build other components...

var fig = createCustomElement( 'my-figure' );
fig.attr( 'class', 'figure' );

var chart = createCustomElement( 'my-chart' );
chart.attr( 'class', 'chart' );

// Create the document structure...

container.append( fig );
fig.append( chart );

// Serialize to string...

console.log( container.toString() );
// Returns: '<my-container class="container"><my-figure class="figure"><my-chart class="chart"></my-chart></my-figure></my-container>'
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/minimal-custom-element.svg
[npm-url]: https://npmjs.org/package/minimal-custom-element

[travis-image]: http://img.shields.io/travis/element-io/minimal-custom-element/master.svg
[travis-url]: https://travis-ci.org/element-io/minimal-custom-element

[coveralls-image]: https://img.shields.io/coveralls/element-io/minimal-custom-element/master.svg
[coveralls-url]: https://coveralls.io/r/element-io/minimal-custom-element?branch=master

[dependencies-image]: http://img.shields.io/david/element-io/minimal-custom-element.svg
[dependencies-url]: https://david-dm.org/element-io/minimal-custom-element

[dev-dependencies-image]: http://img.shields.io/david/dev/element-io/minimal-custom-element.svg
[dev-dependencies-url]: https://david-dm.org/dev/element-io/minimal-custom-element

[github-issues-image]: http://img.shields.io/github/issues/element-io/minimal-custom-element.svg
[github-issues-url]: https://github.com/element-io/minimal-custom-element/issues