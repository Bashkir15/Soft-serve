# Softserve

A simple, dependency-free, Javascript UI component and utility library written in vanilla, es6 Javascript

## Usage and Installation

First, install the package using npm:

```javascript
npm install -S soft-serve
```

Then you have a couple of options on how to include the package. Soft-serve supports ES6 imports, CommonJS Modules, and the AMD module system. If all else fails, you can include the script in your document like in the old-days

1. Using ES6 Imports

	The package can be inclued using the standard ES6 import statement

	```javascript
	import s from '/path/to/modules/soft-serve/dist/scripts/soft-serve.min'
	```

	Then you just need to include the base css file from the downloads

	```
	<link rel='stylesheet' href='/path/to/modules/soft-serve/dist/styles/main.min.css'>
	```

2. Using CommonJs

	Using CommonJS is essentially the same as using the ES6 import pattern

    ```javascript
	var s = require('/path/to/modules/soft-serve/dist/scripts/soft-serve.min')
	```

	And then include the styles

	```
	<link rel='stylesheet' href='/path/to/modules/soft-serve/dist/styles/main.min.css'>
	```

3. Using AMD

	Using AMD is a bit more complicated, but is still simple

	```javascript
	define(['soft-serve'], function(softserve) {
		const s = softserve;
	});
	```

	And again, incude the styles

	```
	<link rel='stylesheet' href='/path/to/modules/soft-serve/dist/styles/main.min.css'>
	```

## Customization
	
Softserve gives you the ability to highly modularize your development project by not relying on any dependencies even among the seperate components, so you can import individuals modules that you not without worrying about whether they work or not.

1. Using just the notifications component

	```javascript
	import s.notifications from '/path/to/modules/soft-serve/dist/scripts/soft-serve.min'
	```

2. If you are using Sass as a preprocessor for your CSS you can even import select sass files. The Sass files do have interwoven dependencies, but these just consist of a reset file and some other base styles. You should be able to easily replace these and leaving them out shouldn't break any of the components. In your Sass file you can simple do

	```
	@import "/path/to/modules/soft-serve/src/styles/components/notifications"
	```

	And that will only include the styles for the notifications component

## Contribute

The library is currently open-source with me only being able to work on it when I find the time. If you have any cool ideas for additions/modifications, feel free to fork the repo and make a pull-request! 



