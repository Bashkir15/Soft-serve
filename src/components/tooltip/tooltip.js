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

	_handleMouseEvent(e) {
		let rect = e.target.getBoundingClientRect();
		let left = rect.left + (ret.width / 2);
		let top = rect.top + (rect.height / 2);
		let marginLeft = -1 * (this.element.offsetWidth / 2);
		let marginTop = -1 * (this.element.offsetHeight / 2);

		if (this.element.classList.contains(this.classes.left) || this.element.classList.contains(this.classes.right)) {
			left = (rect.width / 2);

			if (top + marginTop < 0) {
				this.element.style.top = '0';
				this.element.style.marginTop = '0';
			} else {
				this.element.style.top = top + 'px';
				this.element.style.marginTop = marginTop + 'px';
			}
		} else {
			if (left + marginLeft < 0) {
				this.element.style.left = '0';
				this.element.style.marginLeft = '0';
			} else {
				this.element.style.left = left + 'px';
				this.element.style.marginLeft = marginLeft + 'px';
			}
		}

		if (this.element.classList.contains(this.classes.top)) {
			this.element.style.top = rect.top - this.element.offsetHeight - 10 + 'px';
		} else if (this.element.classList.contains(this.classes.right)) {
			this.element.style.left = rect.left + rect.width + 10 + 'px';
		} else if (this.element.classList.contains(this.classes.left)) {
			this.element.style.left = rect.left - this.element.offsetWidth - 10 + 'px';
		} else {
			this.element.style.top = rect.top + rect.height + 10 + 'px';
		}

		this.element.classList.add(this.classes.active);
	}
}