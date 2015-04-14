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
			this.cbr = new CheckboxRadio( this.checkbox[0] );
		}
	});

	test( 'initializing', function(){
		expect(3);
		throws( function(){
			new CheckboxRadio();
		}, Error,
		"Element needed to initialize");
		equal( this.cbr.element, this.checkbox[0], "element should match" );
		ok( !this.cbr.isRadio );
	});

	test( 'applyCheckIcons', function(){
		expect(1);
		this.cbr.applyCheckIcons();
		ok( this.cbr.parent.find( ".icon-check" ).length );
	});

	test( 'toggleCheck', function(){
		expect(2);
		ok( !this.cbr.parent.is( ".checked" ) );
		this.cbr.toggleCheck();
		ok( this.cbr.parent.is( ".checked" ) );
	});

	test( 'change', function(){
		expect( 3 );
		this.cbr.$element.on( "change", function(){
			ok( true );
		});
		ok( this.cbr.element.checked );
		this.cbr.change();
		ok( !this.cbr.element.checked );
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
