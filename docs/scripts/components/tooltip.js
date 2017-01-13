import s from '../../../dist/soft-serve'

export function tooltipComponent() {

	var scroller =new s.smoothScroll();
	var tooltip = new s.tooltip();

	var tooltip2 = new s.tooltip({
		element: '.soft-tooltip-2'
	});

	var tooltip3 = new s.tooltip({
		element: '.soft-tooltip-3'
	});

	var tooltip4 = new s.tooltip({
		element: '.soft-tooltip-4'
	});

	var tooltip5 = new s.tooltip({
		element: '.soft-tooltip-5'
	});
}