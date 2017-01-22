//import menu from '../../../src/components/menu/menu'
import softServe from '../../../dist/scripts/soft-serve.min'

export function menuComponent() {

	var dropdown1 = new softServe.menu({
		element: '.menu-1'
	});

	var dropdown2 = new softServe.menu({
		element: '.menu-2'
	});

	var dropdown3 = new softServe.menu({
		element: '.menu-3'
	});

	var dropdown4 = new softServe.menu({
		element: '.menu-4'
	});

	var dropdown5 = new softServe.menu({
		element: '.menu-5'
	});

	var dropdown6 = new softServe.menu({
		element: '.menu-6'
	});

	var dropdown7 = new softServe.menu({
		element: '.menu-7'
	});

	var scroller = new softServe.smoothScroll();
}