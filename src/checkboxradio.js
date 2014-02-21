/*
 * checkbox plugin
 *
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under MIT
 */

(function( $, w ) {
	"use strict";

	var cl = {
		toggle: "checked"
	};

	var CheckboxRadio = function( element ){
		if( !element ){
			throw new Error( "Element required to initialize object" );
		}
		this.element = element;
		this.$element = $( element );
		this.isRadio = this.$element.is( "input[type=radio]" );
		this.parent = this.$element.parent();
		this.radioSiblings = this.parent.closest( ".page, body" ).find( "input[name='" + this.element.name + "']" );
	};

	CheckboxRadio.prototype.applyCheckIcons = function(){
		this.parent.find( "input:checked + *, .label-text" ).append( '<span class="icon-check"></span>' );
	};

	CheckboxRadio.prototype.toggleCheck = function(){
		this.parent[ this.element.checked ? "addClass" : "removeClass" ]( cl.toggle );
	};

	CheckboxRadio.prototype.change = function(){
		if( this.isRadio && !this.element.checked ){
			this.element.checked = true;
			this.radioSiblings.trigger( "change" );
		}
		else if( !this.isRadio ){
			this.element.checked = !this.element.checked;
			this.$element.trigger( "change" );
		}
	};


	w.CheckboxRadio = CheckboxRadio;

}( jQuery, this ));


