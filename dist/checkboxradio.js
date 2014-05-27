/*! Checkboxradio - v0.1.0 - 2014-05-27
* https://github.com/filamentgroup/checkboxradio
* Copyright (c) 2014 Filament Group; Licensed MIT */
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



/* global CheckboxRadio:true */
(function( CheckboxRadio, $ ) {

	var pluginName = "checkboxradio",
		initialized = pluginName + "_init",
		initSelector = "input[type=checkbox], input[type=radio]";

	$.fn[ pluginName ] = function(){
		return this.each(function(idx, element){
			var cbr = new CheckboxRadio( element );

			if( cbr.$element.data( initialized ) ) {
				return;
			}

			cbr.$element.data( initialized, true );

			// Append check icons to `.label-text` elements
			if ( !cbr.isRadio ) {
				cbr.applyCheckIcons();
			}

			cbr.$element.bind( "change init", function(){
				cbr.toggleCheck();
			});

			cbr.parent.bind( "click", function(){
				cbr.change();
			});

			// radio button picker - only the checked option is shown; when clicked, it displays the rest of the list
			if( cbr.hasPicker && cbr.hasPicker() ){
				cbr.initPicker();
			}

			// set default state
			cbr.$element.trigger( "init" );
		});
	};

	// auto-init on enhance (which is called on domready)
	$( document ).bind( "enhance", function( e ){
		$( initSelector, e.target )[ pluginName ]();
	});

}( CheckboxRadio, jQuery, this ));


