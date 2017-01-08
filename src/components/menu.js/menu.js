class menu {
	constructor(options) {
		this.element = null;
		this.container = null;
		this.outline = null;
		this.menuTrigger = null;

		this.defaults = {
			element: '.soft-menu'
		};
		this.keycodes = {};
		this.classes = {
			container: 'soft-menu-container',
			outline: 'soft-menu-outline',
			item: 'soft-menu-item',
			unaligned: 'soft-menu-unaligned',
			bottomRight: 'soft-menu-bottom-right',
			bottomLeft: 'soft-menu-bottom-left',
			topRight: 'soft-menu-top-right',
			topLeft: 'soft-menu-top-left',
			visible: 'soft-menu-visible'
		};
	}

	_init() {

		// create the container for the menu
		this.element = document.querySelector(this.defaults.element);
		var container = document.createElement('div');
		container.classList.add(this.classes.container);
		this.element.parentElement.insertBefore(container, this.element);
		this.element.parentElement.removeChild(this.element);
		container.appendChild(this.element);

		// Create the shadow and background for the container
		var outline = document.createElement('div');
		outline.classList.add(this.classes.outline);
		this.outline = outline;
		container.insertBefore(outline, this.element);

		// Find the attribute for the menu and attach events

		var menuId = this.element.getAttribute('for');
		var menuTrigger = null;

		if (menuId) {
			menuTrigger = document.getElementById(menuId);

			if (menuTrigger) {
				this.menuTrigger = menuTrigger;
				menuTrigger.addEventListener('click', this._handleTriggerClick.bind(this));
				menuTrigger.addEventListener('keydown', this._handleTriggerKeyboard.bind(this));
			}
		}

		// get the menu items

		var items = this.element.querySelectorAll('.' + this.classes.item);

		for (let i = 0; i < items.length; i++) {
			// bind item click listener
			// add a tab index for each item
			// bind an item keydown listener
		}

		// check for allignment classes and then apply them to outline



	}

	_handleTriggerClick(e) {
		if (this.element && this.menuTrigger) {
			var rect = this.menuTrigger.getBoundingClientRect();
			var parentRect = this.menuTrigger.parentElement.getBoundingClientRect();

			// check to see if menu is alligned or not

			if (this.element.classList.contains(this.classes.unaligned)) {
				// left black for developer to manually style the element to
				// to fit their needs
			} else if (this.element.classList.contains(this.classes.bottomRight)) {
				this.container.style.right = (parentRect.right - rect.right) + 'px';
				this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + 'px';
			} else if (this.element.classList.contains(this.classes.topRight)) {
				this.container.style.right = (parentRect.right - rect.right) + 'px';
				this.container.style.bottom = (parentRect.bottom - rect.top) + 'px';
			} else if (this.element.classList.contains(this.classes.topLeft)) {
				this.container.style.left = this.menuTrigger.offsetLeft + 'px';
				this.container.style.bottom = (parentRect.bottom - rect.top) + 'px';
			} else {
				this.container.style.left = this.menuTrigger.offsetLeft + 'px';
				this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + 'px';
			}
		}

		// handlemenu toggle
	} 

	_handleTriggerKeyboard(e) {
		if (this.element && this.container && this.menuTrigger) {
			var items = this.element.querySelectorAll(',' + this.classes.item);

			if (items && items.length > 0 && this.container.classList.contains(this.classes.visible)) {
				// check up arrow, apply focus,
				// check down error, apply focus
			}
		}
	}

	_handleItemKeyboard(e) {
		if (this.element && this.container && this.menuTrigger) {
			// consider allowing disabled non-disabled here
			var items = this.element.querySelectorAll('.' + this.classes.item);

			if (items && items.length > 0 && this.container.classList.contains(this.classes.visible)) {
				var currentIndex = Array.prototype.slice.call(items).indexOf(e.target);

				// handle keycode events here
				// up arrow 
				// down arrow
				// space || enter
				// esc
			}
		}
	}
}