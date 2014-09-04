/**
*
*	MINIMAL CUSTOM ELEMENT
*
*
*	DESCRIPTION:
*		- Factory which creates minimal custom elements.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var // Custom element name validator:
		validate = require( 'validate-element-name' ),

		// Parent element class:
		Uber = require( 'minimal-element-class' );


	// CUSTOM HTML ELEMENT //

	/**
	* FUNCTION: Element( name )
	*	Custom HTML element constructor.
	*
	* @constructor
	* @param {String} name - element name
	* @returns {Element} Element instance
	*/
	function Element( name ) {
		Uber.call( this );
		this._name = name;
		this._void = false;
		return this;
	} // end FUNCTION Element()

	/**
	* Create a prototype which inherits from the parent prototype.
	*/
	Element.prototype = Object.create( Uber.prototype );

	/**
	* Set the constructor.
	*/
	Element.prototype.constructor = Element;

	/**
	* METHOD: void( [bool] )
	*	Element void status setter and getter. If no boolean is provided, returns the void status. If a boolean is provided, sets whether the element should be considered a void element.
	*
	* @param {Boolean} [bool] - boolean indicating if the element is a void element
	* @returns {Element|Boolean} Element instance or void status
	*/
	Element.prototype.void = function( bool ) {
		if ( !arguments.length ) {
			return this._void;
		}
		if ( typeof bool !== 'boolean' ) {
			throw new TypeError( 'setVoid()::invalid input argument. Must provide a boolean.' );
		}
		this._void = bool;
		return this;
	}; // end METHOD void()

	
	// EXPORTS //

	module.exports = function createCustomElement( name ) {
		if ( typeof name !== 'string' ) {
			throw new TypeError( 'createCustomElement()::invalid input argument. Name must be a string.' );
		}
		var results = validate( name );
		if ( !results.isValid ) {
			throw new Error( 'createCustomElement()::invalid element name. ' + results.message );
		}
		return new Element( name );
	};

})();