class menu {
	constructor(options) {
		this.element = null;
		this.container = null;
		this.outline = null;
		this.menuTrigger = null;
		this.items = null;

		this.defaults = {
			element: '.soft-menu',
			transitionDuration: 0.3,
			transitionFraction: 0.8,
			closeTimeout: 150,
			onBeforeOpen: null,
			onBeforeClose: null,
			onOpen: null,
			onClose: null
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


	/**
	 *
	 	Public Methods
	 *
	**/



	_show(e) {
		if (this.element && this.container) {
			let height = this.element.getBoundingClientRect().height;
			let width = this.element.getBoundingClientRect().width;

			this.container.style.width = width + 'px';
			this.container.style.height = height + 'px';
			this.outline.style.width = width + 'px';
			this.outline.style.height = height + 'px';

			// Calculate transition delays for each menu item so they fade in order

			this._calculateTransition(height, width);
			this._applyClip(height, width);

			if (typeof this.defaults.onBeforeOpen === 'function') {
				this.defaults.onBeforeOpen.call(this);
			}

			window.requestAnimationFrame(() => {
				this.element.classList.add(this.classes.animating);
				this.element.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
				this.container.classList.add(this.classes.visible);

				if (typeof this.defaults.onOpen === 'function') {
					this.defaults.onOpen.call(this);
				}  
			});

			this._animationEndListener();

			let documentClickHandler = (evt) => {
				if (evt !== e && evt.target.parentNode !== this.element && this.container.classList.contains(this.classes.visible)) {
					this.hide();

					setTimeout(() => {
						document.removeEventListener('click', documentClickHandler);
					}, 50);
				} 
			};

			document.addEventListener('click', documentClickHandler);
		}
	}

	_hide() {
		if (this.element && this.container) {

			if (typeof this.defaults.onBeforeClose === 'function') {
				this.defaults.onBeforeClose.call(this);
			}

			for (let i = 0; i < this.items.length; i++) {
				this.items[i].style.removeProperty('transition-delay');
			}

			// measure the inner element

			let rect = this.element.getBoundingClientRect();
			let height = rect.height;
			let width = rect.width;

			this.element.classList.add(this.classes.animating);
			this._applyClip(height, width);
			this.container.classList.remove(this.classes.visible);

			if (typeof this.defaults.onClose === 'function') {
				this.defaults.onClose.call(this);
			}
		}
	}

	_toggle(e) {
		if (this.container.classList.contains(this.classes.visible)) {
			this.hide();
		} else {
			this.show(e)
		}
	}



	/**
	 *
	 	Build Methods
	 *
	**/



	_init() {

		// Declare the component variables for the menu -- Menu container,
		// Menu outline, Menu trigger button, Menu trigger Id, menu items

		var container = document.createElement('div');
		var outline = document.createElement('div');
		var menuTrigger = null;
		var menuId = null;
		var items = null;

		// Retrieve elements from DOM based on user-provided class

		this.element = document.querySelector(this.defaults.element);

		// Restructure the DOM to append the container and outline

		this.element.parentNode.insertBefore(container, this.element);
		this.element.parentNode.removeChild(this.element);
		container.classList.add(this.classes.container);
		container.appendChild(this.element);

		outline.classList.add(this.classes.outline);

		this.container = container;
		this.outline = outline;
		this.container.insertBefore(outline, this.element);

		// Retrieve the menuId and then find the Trigger matching that Id

		menuId = this.element.getAttribute('for');

		if (menuId) {
			menuTrigger = document.getElementById(menuId);

			if (menuTrigger) {
				this.menuTrigger = menuTrigger;
				this._attachTriggerEvents();
			}
		}

		// Retrieve Items from the DOM and store them in the constructor
		// so the DOM doesn't have to be queried multiple times and then
		// attach item events and position the outline.

		items = this.element.querySelectorAll('.' + this.classes.item);
		this.items = items;

		this._attachItemEvents();
		this._positionOutline();

	}

	_positionOutline() {
		if (this.element.classList.contains(this.classes.bottomLeft)) {
			this.outline.classList.add(this.classes.bottomLeft);
		}

		if (this.element.classList.contains(this.classes.topLeft)) {
			this.outline.classList.add(this.classes.topLeft);
		}

		if (this.element.classList.contains(this.classes.bottomRight)) {
			this.outline.classList.add(this.classes.bottomRight);
		}

		if (this.element.classList.contains(this.classes.topRight)) {
			this.outline.classList.add(this.classes.topRight);
		}
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

	_calculateTransition(height, width) {
		// Calculate and apply a transition for the items so they the fade in order

		let transitionDuration = this.defaults.transitionDuration * this.defaults.transitionFraction;

		for (let i = 0; i < this.items.length; i++) {
			let itemDelay = null;

			if (this.element.classList.contains(this.classes.topLeft) || this.element.classList.contains(this.classes.topRight)) {
				itemDelay = ((height - this.items[i].offsetTop - this.items[i].offsetHeight) / height * transitionDuration) + 's';
			} else {
				itemDelay = (this.items[i].offsetTop / height * transitionDuration) + 's';
			}

			this.items[i].style.transitionDelay = itemDelay;
		}
	}



	/**
	 *
	 	Trigger Events
	 *
	**/



	_triggerClickHandler() {
		if (this.element && this.menuTrigger) {
			let rect = this.menuTrigger.getBoundingClientRect();
			let parentRect = this.menuTrigger.parentNode.getBoundingClientRect();

			if (this.element.classList.contains(this.classes.unaligned)) {

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
				// default position
				this.container.style.left = this.menuTrigger.offsetLeft + 'px';
				this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + 'px';
			}
		}

		this.toggle();
	}

	_triggerKeyHandler(e) {
		if (this.element && this.container && this.menuTrigger) {
			//var items = this.element.querySelectorAll('.' + this.classes.item);

			if (this.items && this.items.length > 0 && this.container.classList.contains(this.classes.visible)) {
				if (e.keyCode === this.keycodes.up) {
					e.preventDefault();
					this.items[this.items.length - 1].focus();
				} else if (e.keyCode === this.keycodes.down) {
					e.preventDefault();
					this.items[0].focus();
				}
			}
		}
	}



	/**
	 *
	 	Item Events
	 *
	**/



	_itemClickHandler(e) {
		window.setTimeout((e) => {
			this.hide();
		}, this.defaults.closeTimeout);
	}

	_itemKeyHandler(e) {
		if (this.element && this.container) {

			if (this.items && this.items.length > 0 && this.container.classList.contains(this.classes.visible)) {
				let currentIndex = Array.prototype.slice.call(this.items).indexOf(e.target);

				if (e.keyCode === this.keycodes.up) {
					e.preventDefault();

					if (currentIndex > 0) {
						this.items[currentIndex - 1].focus();
					} else {
						this.items[this.items.length - 1].focus();
					}

				} else if (e.keyCode === this.keycodes.down) {
					e.preventDefault();

					if (this.items.length > currentIndex + 1) {
						this.items[currentIndex + 1].focus();
					} else {
						this.items[0].focus();
					}

				} else if (e.keyCode === this.keycodes.space || e.keyCode === this.keycodes.enter) {
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



	/**
	 *
	 	Event Delegation
	 *
	**/


	_attachTriggerEvents() {
		let triggerClickHandler = this._triggerClickHandler.bind(this);
		let triggerKeyHandler = this._triggerKeyHandler.bind(this);

		this.menuTrigger.addEventListener('click', triggerClickHandler);
		this.menuTrigger.addEventListener('keydown', triggerKeyHandler);
	}

	 _attachItemEvents() {
		let itemClickHandler = this._itemClickHandler.bind(this);
		let itemKeyHandler = this._itemKeyHandler.bind(this);

		for (let i = 0; i < this.items.length; i++) {
			this.items[i].addEventListener('click', itemClickHandler);
			this.items[i].tabIndex = '-1';
			this.items[i].addEventListener('keydown', itemKeyHandler);
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


	/**
	 *
	 	Utils
	 *
	**/


	_applySettings(options) {
		if (typeof options === 'object') {
			for (var i in options) {
				if (options.hasOwnProperty(i)) {
					this.defaults[i] = options[i];
				}
			}
		}
	}
}

export default menu