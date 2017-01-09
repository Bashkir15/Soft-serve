//import menu from '../../../src/components/menu/menu'
import softServe from '../../../dist/soft-serve'

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
}