# Checkboxradio

[![Filament Group](http://filamentgroup.com/images/fg-logo-positive-sm-crop.png) ](http://www.filamentgroup.com/)

jQuery or Shoestring Plugin for progressively enhanced radio buttons and checkboxes

## Dependencies

1. jQuery or Shoestring

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/filamentgroup/checkboxradio/master/dist/checkboxradio.min.js
[max]: https://raw.github.com/filamentgroup/checkboxradio/master/dist/checkboxradio.js

In your web page:

```html
<script src="shoestring.js"></script>
<script src="dist/checkboxradio.min.js"></script>
<script>
$(function($) {
	$( document ).bind( "enhance", function(){
		$( "body" ).addClass( "enhanced" );
	});

	$( document ).trigger( "enhance" );
});
</script>
```

## Demo
Check the demo [here](http://filamentgroup.github.io/checkboxradio/)

## Release History
v0.1.0 - First release
