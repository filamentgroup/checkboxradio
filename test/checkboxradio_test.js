/*global CheckboxRadio:true*/
(function($) {
	/*
		======== A Handy Little QUnit Reference ========
		http://api.qunitjs.com/

		Test methods:
			module(name, {[setup][ ,teardown]})
			test(name, callback)
			expect(numberOfAssertions)
			stop(increment)
			start(decrement)
		Test assertions:
			ok(value, [message])
			equal(actual, expected, [message])
			notEqual(actual, expected, [message])
			deepEqual(actual, expected, [message])
			notDeepEqual(actual, expected, [message])
			strictEqual(actual, expected, [message])
			notStrictEqual(actual, expected, [message])
			throws(block, [expected], [message])
	*/

	module( 'CheckboxRadio constructor', {
		setup: function() {
			this.checkbox = $( "#single-checkbox" );
		}
	});

	test( 'initializing', function(){
		expect(3);
		throws( function(){
			new CheckboxRadio();
		}, Error,
		"Element needed to initialize");
		var cbr = new CheckboxRadio( this.checkbox[0] );
		equal( cbr.element, this.checkbox[0], "element should match" );
		ok( !cbr.isRadio );
	});

	module('jQuery#checkboxradio', {
		// This will run before each test in this module.
		setup: function() {
			this.checkboxes = $("#qunit-fixture input[type=checkbox]" );
			this.radiobuttons = $( "#qunit-fixture input[type=radio]");
		}
	});

	test('is chainable', function() {
		expect(2);
		// Not a bad test to run on collection methods.
		strictEqual(this.checkboxes.checkboxradio(), this.checkboxes, 'should be chainable');
		strictEqual(this.radiobuttons.checkboxradio(), this.radiobuttons, 'should be chainable');
	});
}(jQuery));
