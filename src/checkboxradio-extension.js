/* global CheckboxRadio:true */
(function( CheckboxRadio ) {
	"use strict";

	var cl = {
		pickerClosedClass: "picker-closed",
		active: "active"
	};

	CheckboxRadio.prototype.hasPicker = function(){
		return this.parent.parents( ".picker-menu" ).length > 0;
	};

	CheckboxRadio.prototype.initPicker = function(){
		var $picker = this.parent.closest( ".picker" ),
			togglePickerMenu = function(){
				$picker[ $picker.is( "." + cl.pickerClosedClass ) ? "removeClass" : "addClass" ]( cl.pickerClosedClass );
			};

		this.$element.bind( "init change", function(){
			this.parent.parent()[ this.element.checked ? "addClass" : "removeClass" ]( cl.active );
		});

		this.parent.bind( "tap", togglePickerMenu );

		// set default menu state
		$picker.addClass( cl.pickerClosedClass );
	};


}( CheckboxRadio, jQuery, this ));
