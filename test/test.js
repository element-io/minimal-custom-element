// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Element class:
	Element = require( 'minimal-element-class' ),

	// Module to be tested:
	createCustomElement = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'minimal-custom-element', function tests() {
	'use strict';

	// SETUP //

	var element;

	beforeEach( function() {
		element = createCustomElement( 'xfig-figure' );
	});

	// TESTS //

	it( 'should export a function', function test() {
		expect( createCustomElement ).to.be.a( 'function' );
	});

	it( 'should require an element name', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			createCustomElement();
		}
	});

	it( 'should not allow a non-string element name', function test() {
		var values = [
				5,
				true,
				null,
				undefined,
				NaN,
				function(){},
				[],
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				createCustomElement( value );
			};
		}
	});

	it( 'should not allow an invalid element name', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			createCustomElement( 'figure' );
		}
	});

	it( 'should create a new custom element', function test() {
		assert.ok( element instanceof Element );
	});

	it( 'should provide a method to get/set an element\'s void status', function test() {
		expect( element.void ).to.be.a( 'function' );
	});

	it( 'should not allow a non-boolean void status', function test() {
		var values = [
				5,
				'5',
				null,
				undefined,
				NaN,
				function(){},
				[],
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				element.void( value );
			};
		}
	});

	it( 'should set an element\'s void status', function test() {
		element.void( true );
		assert.strictEqual( element.void(), true );
	});

});