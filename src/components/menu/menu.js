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

		this.keycodes = {
			enter: 13,
			escape: 27,
			space: 32,
			up: 38,
			down: 40
		};

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
		if (typeof options === 'object') {
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

		var items = this.element.querySelectorAll('.' + this.classes.item);
		var itemKeyHandler = this._itemKeyHandler.bind(this);
		var itemClickHandler = this._itemClickHandler.bind(this);

		for (let i = 0; i < items.length; i++) {
			items[i].addEventListener('click', itemClickHandler);
			items[i].tabIndex = '-1';
			items[i].addEventListener('keydown', itemKeyHandler);
		}

		if (this.element.classList.contains(this.classes.bottomLeft)) {
			this.outline.classList.add(this.classes.bottomLeft);
		}

		if (this.element.classList.contains(this.classes.topLeft)) {
			this.outline.classList.add(this.classes.bottomLeft);
		}

		if (this.element.classList.contains(this.classes.bottomRight)) {
			this.outline.classList.add(this.classes.bottomRight);
		}

		if (this.element.classList.contains(this.classes.topRight)) {
			this.outline.classList.add(this.classes.topRight);
		}

	}

	_attachTriggerEvents() {
		var triggerClickHandler = this._triggerClickHandler.bind(this);
		var triggerKeyHandler = this._triggerKeyHandler.bind(this);

		this.menuTrigger.addEventListener('click', triggerClickHandler);
		this.menuTrigger.addEventListener('keydown', triggerKeyHandler);
	}

	_triggerClickHandler() {
		if (this.element && this.menuTrigger) {
			var rect = this.menuTrigger.getBoundingClientRect();
			var parentRect = this.menuTrigger.parentNode.getBoundingClientRect();

			if (this.element.classList.contains(this.classes.unaligned)) {

			} else if (this.element.classList.contains(this.classes.bottomRight)) {
				this.container.style.right = (parentRect.right - rect.right) + 'px';
				this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + 'px';
			} else if (this.element.classList.contains(this.classes.topRight)) {
				this.container.style.right = (parentRect.right - rect.right) + 'px';
				this.container.style.bottom = (rect.top - parentRect.bottom) + 'px';
				console.log(parentRect.bottom);
				console.log(rect.top);
			} else if (this.element.classList.contains(this.classes.topLeft)) {
				this.container.style.left = this.menuTrigger.offsetLeft + 'px';
				this.container.style.bottom = (parentRect.bottom - rect.top) + 'px';
			} else {
				// default position
				this.container.style.left = this.menuTrigger.offsetLeft + 'px';
				this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + 'px';
			}
		}

		this.toggle();
	}

	_triggerKeyHandler(e) {
		if (this.element && this.container && this.menuTrigger) {
			var items = this.element.querySelectorAll('.' + this.classes.item);

			if (items && items.length > 0 && this.container.classList.contains(this.classes.visible)) {
				if (e.keyCode === this.keycodes.up) {
					e.preventDefault();
					items[items.length - 1].focus();
				} else if (e.keyCode === this.keycodes.down) {
					e.preventDefault();
					items[0].focus();
				}
			}
		}
	}

	_itemClickHandler(e) {
		window.setTimeout((e) => {
			this.hide();
		}, this.defaults.closeTimeout);
	}

	_itemKeyHandler(e) {
		if (this.element && this.container) {
			var items = this.element.querySelectorAll('.' + this.classes.item);

			if (items && items.length > 0 && this.container.classList.contains(this.classes.visible)) {
				var currentIndex = Array.prototype.slice.call(items).indexOf(e.target);

				if (e.keyCode === this.keycodes.up) {
					e.preventDefault();

					if (currentIndex > 0) {
						items[currentIndex - 1].focus();
					} else {
						items[items.length - 1].focus();
					}
				} else if (e.keyCode === this.keycodes.down) {
					e.preventDefault();

					if (items.length > currentIndex + 1) {
						items[currentIndex + 1].focus();
					} else {
						items[0].focus();
					}
				} else if  (e.keyCode === this.keycodes.space || e.keyCode === this.keycodes.enter) {
					e.preventDefault();
					
					//
					//
					//eventually create a mouse event for ripple here
					//
					//

				} else if (e.keyCode === this.keycodes.escape) {
					e.preventDefault();
					this.hide();
				}
			}
		}
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
				var itemDelay = null;

				if (this.element.classList.contains(this.classes.topLeft) || this.element.classList.contains(this.classes.topRight)) {
					itemDelay = ((height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration) + 's';
				} else {
					itemDelay = (items[i].offsetTop / height * transitionDuration) + 's';
				}

				items[i].style.transitionDelay = itemDelay;
			}



			this._applyClip(height, width);

			window.requestAnimationFrame(() => {
				this.element.classList.add(this.classes.animating);
				this.element.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
				this.container.classList.add(this.classes.visible);  
			});

			this._animationEndListener();

			var callback = function(evt) {
				console.log('arrrrrrrrrrrrrr');
				if (evt !== e && evt.target.parentNode !== this.element) {
					//document.removeEventListener('click', callback);
					this.hide();
				} 
			}.bind(this);

			document.addEventListener('click', callback);
		}
	}

	_hide() {
		if (this.element && this.container) {
			var items = this.element.querySelectorAll('.' + this.classes.item);

			for (let i = 0; i < items.length; i++) {
				items[i].style.removeProperty('transition-delay');
			}

			// measure the inner element

			var rect = this.element.getBoundingClientRect();
			var height = rect.height;
			var width = rect.width;

			this.element.classList.add(this.classes.animating);
			this._applyClip(height, width);
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

	_animationEndListener() {
		let removeAnimationEndListener = this._removeAnimationEndListener.bind(this);
		this.element.addEventListener('transitionend', removeAnimationEndListener);
		this.element.addEventListener('webkitTransitionEnd', removeAnimationEndListener);
	}

	_removeAnimationEndListener() {
		this.element.classList.remove(this.classes.animating);
	}

	_applyClip(height, width) {
		if (this.element.classList.contains(this.classes.unaligned)) {

		} else if (this.element.classList.contains(this.classes.bottomRight)) {
			this.element.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
		} else if (this.element.classList.contains(this.classes.topLeft)) {
			this.element.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
		} else if (this.element.classList.contains(this.classes.topRight)) {
			this.element.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
		} else {
			this.element.style.clip = '';
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