/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _modal = __webpack_require__(1);

	var _modal2 = _interopRequireDefault(_modal);

	var _menu = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _menu.menuComponent)();

	//let modalTrigger1 = document.getElementById('modal-trigger');
	//let modalContent1 = document.getElementById('modal-component');

	//let modal1 = new modal({
	//	content: modalContent1
	//});

	//modalTrigger1.addEventListener('click', modal1.open, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var modal = function () {
		function modal(options) {
			_classCallCheck(this, modal);

			this.overlay = null;
			this.modal = null;
			this.closeButton = null;

			/* Customizable options */

			this.defaults = {
				classes: [],
				overlay: true,
				content: '',
				closeKeys: [27],
				closeButton: true,
				onBeforeOpen: null,
				onBeforeClose: null,
				onOpen: null,
				onClose: null
			};

			/* Public Methods */

			this.open = this._open.bind(this);
			this.close = this._close.bind(this);

			this._applySettings(options);
			this.transitionEvent = this._transitionSniff();
		}

		/* Public Methods */

		_createClass(modal, [{
			key: '_open',
			value: function _open() {
				var _this = this;

				var self = this;

				if (typeof this.defaults.onBeforeOpen === "function") {
					this.defaults.onBeforeOpen.call(this);
				}

				document.body.classList.add('modal-open');
				this._buildOut.call(this);
				this.modal.classList.add('modal-open');
				this.overlay.classList.add('modal-open');
				this._attachEvents();

				if (this.transitionEvent) {
					this.modal.addEventListener(this.transitionEvent, function () {
						if (typeof _this.defaults.onOpen === 'function') {
							_this.defaults.onOpen();
						}

						//this.modal.removeEventListener(transitionEvent, handleTransition, false);
					}, false);
				}

				this._checkOverflow.call(this);
			}
		}, {
			key: '_close',
			value: function _close() {
				var _this2 = this;

				var self = this;

				if (typeof this.defaults.onBeforeClose === 'function') {
					this.defaults.onBeforeClose.call(this);
				}

				this.modal.classList.remove('modal-open');

				if (this.defaults.classes.length) {
					this.defaults.classes.forEach(function (item) {
						_this2.modal.classList.remove(item);s;
					});
				}

				document.body.classList.remove('modal-open');

				//this._destroyEvents();

				if (this.transitionEvent) {
					this.overlay.addEventListener(this.transitionEvent, function () {
						document.body.removeChild(_this2.overlay);
						//this.overlay.parentNode.removeChild(this.overlay);
						//this.modal.removeEventListener(this.transitionEvent, handleClose, false);
					}, false);
				}

				if (typeof this.defaults.onClose === 'function') {
					this.defaults.onClose.call(this);
				}
			}

			/* Events */

		}, {
			key: '_closeKeyHandler',
			value: function _closeKeyHandler(e) {
				if (this.defaults.closeKeys.indexOf(e.which) > -1) {
					e.preventDefault();
					this.close();
				}
			}
		}, {
			key: '_clickOutsideHandler',
			value: function _clickOutsideHandler(e) {
				if (!this._findAncestor(e.target, 'modal') && event.clientX < this.modal.clientWidth) {
					this.close();
				}
			}
		}, {
			key: '_attachEvents',
			value: function _attachEvents() {
				var closeKeyHandler = this._closeKeyHandler.bind(this);
				var clickOutsideHandler = this._clickOutsideHandler.bind(this);

				if (typeof this.closeButton !== 'null') {
					this.closeButton.addEventListener('click', this.close, false);
				}

				this.modal.addEventListener('mousedown', clickOutsideHandler, false);
				document.addEventListener('keydown', closeKeyHandler, false);
			}
		}, {
			key: '_destroyEvents',
			value: function _destroyEvents() {
				var closeKeyHandler = this._closeKeyHandler.bind(this);
				var clickOutsideHandler = this._clickOutsideHandler.bind(this);

				if (typeof this.closeButton !== 'null') {
					this.closeButton.removeEventListener('click', this.close());
				}

				this.modal.removeEventListener('mousedown', clickOutsideHandler);
				document.removeEventListener('keydown', closeKeyHandler);
			}

			/* Build */

		}, {
			key: '_buildOut',
			value: function _buildOut() {
				var _this3 = this;

				var content;
				var contentHolder = document.createElement('div');
				contentHolder.classList.add('modal-content');

				if (typeof this.defaults.content === 'string') {
					content = this.defaults.content;
				} else {
					content = this.defaults.content.innerHTML;
				}

				contentHolder.innerHTML = content;

				this._checkOverlay();
				this._checkClose();

				this.modal = document.createElement('div');
				this.modal.classList.add('modal');

				if (this.defaults.classes.length) {
					this.defaults.classes.forEach(function (item) {
						if (typeof item === 'string') {
							_this3.modDal.classList.add(item);
						}
					});
				}

				this.modal.appendChild(contentHolder);
				this.modal.appendChild(this.closeButton);
				this.overlay.appendChild(this.modal);
				document.body.insertBefore(this.overlay, document.body.firstChild);
			}
		}, {
			key: '_checkContent',
			value: function _checkContent() {
				var content;

				if (typeof this.defaults.content === 'string') {
					content = this.defaults.content;
				} else {
					content = this.defaults.content.innerHTML;
				}

				return content;
			}
		}, {
			key: '_checkOverlay',
			value: function _checkOverlay() {
				if (this.defaults.overlay === true) {
					this.overlay = document.createElement('div');
					this.overlay.classList.add('modal-overlay');
				} else {
					return;
				}
			}
		}, {
			key: '_checkClose',
			value: function _checkClose() {
				if (this.defaults.closeButton === true) {
					this.closeButton = document.createElement('button');
					this.closeButton.innerHTML = '<span>X</span>';
					this.closeButton.classList.add('modal-close-button');
				} else {
					return;
				}
			}

			/* Utils */

		}, {
			key: '_applySettings',
			value: function _applySettings(options) {
				if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
					for (var i in options) {
						if (options.hasOwnProperty(i)) {
							this.defaults[i] = options[i];
						}
					}
				}
			}
		}, {
			key: '_transitionSniff',
			value: function _transitionSniff() {
				var t;
				var el = document.createElement('div');
				var transitions = {
					'transition': 'transitionend',
					'OTransition': 'oTransitionEnd',
					'MozTransition': 'transitionend',
					'WebkitTransition': 'webkitTransitionEnd'
				};

				for (t in transitions) {
					if (el.style[t] !== undefined) {
						return transitions[t];
					}
				}
			}
		}, {
			key: '_checkOverflow',
			value: function _checkOverflow() {
				if (this.modal.classList.contains('modal-open')) {
					if (this._isOverflow()) {
						this.modal.classList.add('modal-overflow');
					} else {
						this.modal.classList.remove('modal-overflow');
					}
				}
			}
		}, {
			key: '_isOverflow',
			value: function _isOverflow() {
				var viewportHeight = window.innerHeight;
				var modalHeight = this.modal.clientHeight;
				var isOverflow = modalHeight < viewportHeight ? false : true;
				return isOverflow;
			}
		}, {
			key: '_findAncestor',
			value: function _findAncestor(el, cls) {
				while ((el = el.parentElement) && !el.classList.contains(cls)) {}
				return el;
			}
		}]);

		return modal;
	}();

	exports.default = modal;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.menuComponent = menuComponent;

	var _menu = __webpack_require__(3);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function menuComponent() {
		var dropdown1 = new _menu2.default({
			element: '.menu-1'
		});

		var dropdown2 = new _menu2.default({
			element: '.menu-2'
		});

		var dropdown3 = new _menu2.default({
			element: '.menu-3'
		});

		var dropdown4 = new _menu2.default({
			element: '.menu-4'
		});
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var menu = function () {
		function menu(options) {
			_classCallCheck(this, menu);

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

		_createClass(menu, [{
			key: '_applySettings',
			value: function _applySettings(options) {
				if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
					for (var i in options) {
						if (options.hasOwnProperty(i)) {
							this.defaults[i] = options[i];
						}
					}
				}
			}
		}, {
			key: '_init',
			value: function _init() {
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

				for (var i = 0; i < items.length; i++) {
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
		}, {
			key: '_attachTriggerEvents',
			value: function _attachTriggerEvents() {
				var triggerClickHandler = this._triggerClickHandler.bind(this);
				var triggerKeyHandler = this._triggerKeyHandler.bind(this);

				this.menuTrigger.addEventListener('click', triggerClickHandler);
				this.menuTrigger.addEventListener('keydown', triggerKeyHandler);
			}
		}, {
			key: '_triggerClickHandler',
			value: function _triggerClickHandler() {
				if (this.element && this.menuTrigger) {
					var rect = this.menuTrigger.getBoundingClientRect();
					var parentRect = this.menuTrigger.parentNode.getBoundingClientRect();

					if (this.element.classList.contains(this.classes.unaligned)) {} else if (this.element.classList.contains(this.classes.bottomRight)) {
						this.container.style.right = parentRect.right - rect.right + 'px';
						this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + 'px';
					} else if (this.element.classList.contains(this.classes.topRight)) {
						this.container.style.right = parentRect.right - rect.right + 'px';
						this.container.style.bottom = parentRect.bottom - rect.top + 'px';
					} else if (this.element.classList.contains(this.classes.topLeft)) {
						this.container.style.left = this.menuTrigger.offsetLeft + 'px';
						this.container.style.bottom = parentRect.bottom - rect.top + 'px';
					} else {
						// default position
						this.container.style.left = this.menuTrigger.offsetLeft + 'px';
						this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + 'px';
					}
				}

				this.toggle();
			}
		}, {
			key: '_triggerKeyHandler',
			value: function _triggerKeyHandler(e) {
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
		}, {
			key: '_itemClickHandler',
			value: function _itemClickHandler(e) {
				var _this = this;

				window.setTimeout(function (e) {
					_this.hide();
				}, this.defaults.closeTimeout);
			}
		}, {
			key: '_itemKeyHandler',
			value: function _itemKeyHandler(e) {
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
		}, {
			key: '_show',
			value: function _show(e) {
				var _this2 = this;

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
					for (var i = 0; i < items.length; i++) {
						var itemDelay = null;

						if (this.element.classList.contains(this.classes.topLeft) || this.element.classList.contains(this.classes.topRight)) {
							itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
						} else {
							itemDelay = items[i].offsetTop / height * transitionDuration + 's';
						}

						items[i].style.transitionDelay = itemDelay;
					}

					this._applyClip(height, width);

					window.requestAnimationFrame(function () {
						_this2.element.classList.add(_this2.classes.animating);
						_this2.element.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
						_this2.container.classList.add(_this2.classes.visible);
					});

					this._animationEndListener();

					var callback = function (evt) {
						console.log('arrrrrrrrrrrrrr');
						if (evt !== e && evt.target.parentNode !== this.element) {
							//document.removeEventListener('click', callback);
							this.hide();
						}
					}.bind(this);

					document.addEventListener('click', callback);
				}
			}
		}, {
			key: '_hide',
			value: function _hide() {
				if (this.element && this.container) {
					var items = this.element.querySelectorAll('.' + this.classes.item);

					for (var i = 0; i < items.length; i++) {
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
		}, {
			key: '_toggle',
			value: function _toggle(e) {
				if (this.container.classList.contains(this.classes.visible)) {
					this.hide();
				} else {
					this.show(e);
				}
			}
		}, {
			key: '_animationEndListener',
			value: function _animationEndListener() {
				var removeAnimationEndListener = this._removeAnimationEndListener.bind(this);
				this.element.addEventListener('transitionend', removeAnimationEndListener);
				this.element.addEventListener('webkitTransitionEnd', removeAnimationEndListener);
			}
		}, {
			key: '_removeAnimationEndListener',
			value: function _removeAnimationEndListener() {
				this.element.classList.remove(this.classes.animating);
			}
		}, {
			key: '_applyClip',
			value: function _applyClip(height, width) {
				if (this.element.classList.contains(this.classes.unaligned)) {} else if (this.element.classList.contains(this.classes.bottomRight)) {
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

		}]);

		return menu;
	}();

	exports.default = menu;

/***/ }
/******/ ]);