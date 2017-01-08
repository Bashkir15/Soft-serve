class menu {
	constructor(options) {
		this.element = null;
		this.container = null;
		this.outline = null;
		this.menuTrigger = null;

		this.defaults = {
			element: '.soft-menu',
			transitionDuration: 0.3,
			transitionFraction: 0.8,
			closeTimeout: 150
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
			animating: 'soft-menu-animating',
			visible: 'soft-menu-visible'
		};

		this.toggle = this._toggle.bind(this);
		this.show = this._show.bind(this);
		this.hide = this._hide.bind(this);

		this._applySettings(options);
		this._init();
	}

	_applySettings(options) {
		if (typeof options === 'function') {
			for (var i in options) {
				if (options.hasOwnProperty(i)) {
					this.defaults[i] = options[i];
				}
			}
		}
	}

	_init() {
		this.element = document.querySelector(this.defaults.element);

		var container = document.createElement('div');
		container.classList.add(this.classes.container);
		this.element.parentNode.insertBefore(container, this.element);
		this.element.parentNode.removeChild(this.element);
		container.appendChild(this.element);
		this.container = container;

		var outline = document.createElement('div');
		outline.classList.add(this.classes.outline);
		this.outline = outline;
		this.container.insertBefore(outline, this.element);

		var menuId = this.element.getAttribute('for');
		var menuTrigger = null;

		if (menuId) {
			menuTrigger = document.getElementById(menuId);

			if (menuTrigger) {
				this.menuTrigger = menuTrigger;
				this._attachTriggerEvents();
			}
		}

	}

	_attachTriggerEvents() {
		var triggerClickHandler = this._triggerClickHandler.bind(this);

		this.menuTrigger.addEventListener('click', triggerClickHandler);
	}

	_triggerClickHandler() {
		if (this.element && this.menuTrigger) {
			var rect = this.menuTrigger.getBoundingClientRect();
			var parentRect = this.menuTrigger.parentElement.getBoundingClientRect();
		}

		this.toggle();
	}

	_show(e) {
		if (this.element && this.container) {
			var height = this.element.getBoundingClientRect().height;
			var width = this.element.getBoundingClientRect().width;

			this.container.style.width = width + 'px';
			this.container.style.height = height + 'px';
			this.outline.style.width = width + 'px';
			this.outline.style.height = height + 'px';

			var transitionDuration = this.defaults.transitionDuration * this.defaults.transitionFraction;

			// Calculate transition delays for each menu item so they fade in order
			var items = this.element.querySelectorAll('.' + this.classes.item);
			for (let i = 0; i < items.length; i++) {
				var itemDelay = (items[i].offsetTop / height * transitionDuration) + 's';
				items[i].style.transitionDelay = itemDelay;
			}


			//var transitionDuration = this.defaults.transitionDuration;

			//var items = this.element.querySelectorAll('.' + this.classes.item);

			// start clip

			window.requestAnimationFrame(() => {
				this.element.classList.add(this.classes.animating);
				this.element.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
				this.container.classList.add(this.classes.visible);  
			});

			// add clean up for animation end

			// add a function to close menu on document click
		}
	}

	_hide() {
		if (this.element && this.container) {
			var items = this.element.querySelectorAll('.' + this.classes.item);

			// remove transition delays and such

			// measure the inner element

			var rect = this.element.getBoundingClientRect();
			var height = rect.height;
			var width = rect.width;

			this.element.classList.add(this.classes.animating);
			// work with clip here
			this.container.classList.remove(this.classes.visible);
		}
	}

	_toggle(e) {
		if (this.container.classList.contains(this.classes.visible)) {
			this.hide();
		} else {
			this.show(e)
		}
	}

	/* _init() {

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

	_handleItemClick(e) {
		// consider checking for disabled here
		this.closing = true;
		window.setTimeout((e) => {
			this.hide();
			this.closing = false;
		}, 200); //set a changeable timeout later
	}

	_handleClip(height, width) {
		if (this.element.classLlist.contains(this.classes.unaligned)) {
			// no need to clip
			this.element.style.clip = '';
		} else if (this.element.classList.contains(this.classes.bottomRight)) {
			this.element.style.clip = `rect(0 ${width}px 0 ${width}px`;
		} else if (this.element.classList.contains(this.classes.topLeft)) {
			this.element.style.clip = `rect(${height}px 0 ${height}px 0)`;
		} else if 
	} */
}

export default menu