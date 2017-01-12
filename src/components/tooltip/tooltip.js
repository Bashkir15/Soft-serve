class tooltip {
	constructor(options) {
		this.element = null;
		this.parent = null;

		this.defaults = {
			element: '.soft-tooltip'
		};

		this.classes = {
			active: 'soft-tooltip-active',
			bottom: 'soft-tooltip-bottom',
			left: 'soft-tooltip-left',
			right: 'soft-tooltip-right',
			top: 'soft-tooltip-right'
		};
	}

	_hide() {
		this.element.classList.remove(this.classes.active);
	}

	_init() {
		this.element = document.querySelector(this.defaults.element);

		if (this.element) {
			let tooltipParent = this.element.getAttribute('for');

			if (tooltipParent) {
				this.parent = document.getElementById(tooltipParent);

				this._attachEvents();
			}
		}
	}
}