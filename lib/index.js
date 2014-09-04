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
		this._selfClosing = false;
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
	* METHOD: selfClosing( [bool] )
	*	Element self-closing status setter and getter. If no boolean is provided, returns whether the element is marked as self-closing. If a boolean is provided, sets whether the element should be considered a self-closing element.
	*
	* @param {Boolean} [bool] - boolean indicating if the element is a self-closing element
	* @returns {Element|Boolean} Element instance or self-closing status
	*/
	Element.prototype.selfClosing = function( bool ) {
		if ( !arguments.length ) {
			return this._selfClosing;
		}
		if ( typeof bool !== 'boolean' ) {
			throw new TypeError( 'selfClosing()::invalid input argument. Must provide a boolean.' );
		}
		this._selfClosing = bool;
		return this;
	}; // end METHOD selfClosing()

	
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