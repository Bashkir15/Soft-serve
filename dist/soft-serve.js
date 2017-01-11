(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("softserve", [], factory);
	else if(typeof exports === 'object')
		exports["softserve"] = factory();
	else
		root["softserve"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _modal = __webpack_require__(1);

	var _modal2 = _interopRequireDefault(_modal);

	var _menu = __webpack_require__(2);

	var _menu2 = _interopRequireDefault(_menu);

	var _notifications = __webpack_require__(3);

	var _notifications2 = _interopRequireDefault(_notifications);

	var _smoothScroll = __webpack_require__(4);

	var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var softServer = {
		modal: _modal2.default,
		menu: _menu2.default,
		notifications: _notifications2.default,
		smoothScroll: _smoothScroll2.default
	};

	exports.default = softServer;

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

		_createClass(menu, [{
			key: '_show',
			value: function _show(e) {
				var _this = this;

				if (this.element && this.container) {
					(function () {
						var height = _this.element.getBoundingClientRect().height;
						var width = _this.element.getBoundingClientRect().width;

						_this.container.style.width = width + 'px';
						_this.container.style.height = height + 'px';
						_this.outline.style.width = width + 'px';
						_this.outline.style.height = height + 'px';

						// Calculate transition delays for each menu item so they fade in order

						_this._calculateTransition(height, width);
						_this._applyClip(height, width);

						if (typeof _this.defaults.onBeforeOpen === 'function') {
							_this.defaults.onBeforeOpen.call(_this);
						}

						window.requestAnimationFrame(function () {
							_this.element.classList.add(_this.classes.animating);
							_this.element.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
							_this.container.classList.add(_this.classes.visible);

							if (typeof _this.defaults.onOpen === 'function') {
								_this.defaults.onOpen.call(_this);
							}
						});

						_this._animationEndListener();

						var documentClickHandler = function documentClickHandler(evt) {
							if (evt !== e && evt.target.parentNode !== _this.element && _this.container.classList.contains(_this.classes.visible)) {
								_this.hide();

								setTimeout(function () {
									document.removeEventListener('click', documentClickHandler);
								}, 50);
							}
						};

						document.addEventListener('click', documentClickHandler);
					})();
				}
			}
		}, {
			key: '_hide',
			value: function _hide() {
				if (this.element && this.container) {

					if (typeof this.defaults.onBeforeClose === 'function') {
						this.defaults.onBeforeClose.call(this);
					}

					for (var i = 0; i < this.items.length; i++) {
						this.items[i].style.removeProperty('transition-delay');
					}

					// measure the inner element

					var rect = this.element.getBoundingClientRect();
					var height = rect.height;
					var width = rect.width;

					this.element.classList.add(this.classes.animating);
					this._applyClip(height, width);
					this.container.classList.remove(this.classes.visible);

					if (typeof this.defaults.onClose === 'function') {
						this.defaults.onClose.call(this);
					}
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

			/**
	   *
	   	Build Methods
	   *
	  **/

		}, {
			key: '_init',
			value: function _init() {

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
		}, {
			key: '_positionOutline',
			value: function _positionOutline() {
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
		}, {
			key: '_calculateTransition',
			value: function _calculateTransition(height, width) {
				// Calculate and apply a transition for the items so they the fade in order

				var transitionDuration = this.defaults.transitionDuration * this.defaults.transitionFraction;

				for (var i = 0; i < this.items.length; i++) {
					var itemDelay = null;

					if (this.element.classList.contains(this.classes.topLeft) || this.element.classList.contains(this.classes.topRight)) {
						itemDelay = (height - this.items[i].offsetTop - this.items[i].offsetHeight) / height * transitionDuration + 's';
					} else {
						itemDelay = this.items[i].offsetTop / height * transitionDuration + 's';
					}

					this.items[i].style.transitionDelay = itemDelay;
				}
			}

			/**
	   *
	   	Trigger Events
	   *
	  **/

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

		}, {
			key: '_itemClickHandler',
			value: function _itemClickHandler(e) {
				var _this2 = this;

				window.setTimeout(function (e) {
					_this2.hide();
				}, this.defaults.closeTimeout);
			}
		}, {
			key: '_itemKeyHandler',
			value: function _itemKeyHandler(e) {
				if (this.element && this.container) {

					if (this.items && this.items.length > 0 && this.container.classList.contains(this.classes.visible)) {
						var currentIndex = Array.prototype.slice.call(this.items).indexOf(e.target);

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

		}, {
			key: '_attachTriggerEvents',
			value: function _attachTriggerEvents() {
				var triggerClickHandler = this._triggerClickHandler.bind(this);
				var triggerKeyHandler = this._triggerKeyHandler.bind(this);

				this.menuTrigger.addEventListener('click', triggerClickHandler);
				this.menuTrigger.addEventListener('keydown', triggerKeyHandler);
			}
		}, {
			key: '_attachItemEvents',
			value: function _attachItemEvents() {
				var itemClickHandler = this._itemClickHandler.bind(this);
				var itemKeyHandler = this._itemKeyHandler.bind(this);

				for (var i = 0; i < this.items.length; i++) {
					this.items[i].addEventListener('click', itemClickHandler);
					this.items[i].tabIndex = '-1';
					this.items[i].addEventListener('keydown', itemKeyHandler);
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

			/**
	   *
	   	Utils
	   *
	  **/

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
		}]);

		return menu;
	}();

	exports.default = menu;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var notifications = function () {
		function notifications(options) {
			_classCallCheck(this, notifications);

			this.container = null;
			this.count = 0;
			this.notifyId = null;

			this.defaults = {
				content: '',
				timeout: 200,
				type: 'alert',
				onBeforeOpen: null,
				onOpen: null,
				onBeforeClose: null,
				onClose: null,
				actionTriggers: [],
				requiredAction: null,
				clickOutsideToClose: true,
				keyActions: true,
				timeoutClose: true,
				posX: 'right',
				posY: 'bottom',
				aligned: true
			};

			this.classes = {
				container: 'notification-container',
				notification: 'notification',
				title: 'notification-title',
				text: 'notification-text',
				confirmAction: 'notification-action-confirm',
				confirmCancel: 'notification-action-cancel',
				active: 'notification-shown',
				success: 'notification-sucess',
				alert: 'notification-alert',
				warning: 'notification-warning',
				danger: 'notification-danger',
				none: 'notification-bland'
			};

			this.keycodes = {
				escape: 27
			};

			this._applySettings(options);

			this.open = this._open.bind(this);
			this.close = this._close.bind(this);
		}

		_createClass(notifications, [{
			key: '_applySettings',
			value: function _applySettings(options) {
				if (typeof options === 'function') {
					for (var i in options) {
						if (options.hasOwnProperty(i)) {
							this.defaults[i] = options[i];
						}
					}
				}
			}
		}, {
			key: '_open',
			value: function _open() {
				var _this = this;

				this.notifyId = "notification-" + this.count;

				if (typeof this.defaults.onBeforeOpen === 'function') {
					this.defaults.onBeforeOpen.call(this);
				}

				this._buildOut.call(this);

				setTimeout(function () {
					_this.container.classList.add(_this.classes.active);
					_this.container.setAttribute('id', notifyId);

					if (typeof _this.defaults.onOpen === 'function') {
						_this.defaults.onOpen.call(_this);
					}
				}, 100);

				if (this.defaults.timeoutClose === true && this.defaults.timeout > 0) {
					setTimeout(function () {
						_this.close(notifyId);
					}, this.defaults.timeout);
				}

				this._attachEvents();
			}
		}, {
			key: '_close',
			value: function _close(notifyId) {
				var notification = document.getElementById(notifyId);

				if (notification) {
					if (typeof this.defaults.onBeforeClose === 'function') {
						this.defaults.onBeforeClose.call(this);
					}

					notification.classList.remove(this.classes.active);

					if (typeof this.defaults.onClose === 'function') {
						this.defaults.onClose.call(this);
					}

					setTimeout(function () {
						notification.parentNode.removeChild(notification);
					}, 600);

					return true;
				} else {
					return false;
				}
			}
		}, {
			key: '_buildOut',
			value: function _buildOut() {
				var container = document.createElement('div');
				var contentHolder = document.createElement('div');
				var content;

				container.classList.add(this.classes.container);
				contentHolder.classList.add(this.classes.notification);

				this.container = container;
				this.container.style.position = "fixed";

				if (typeof this.defaults.content === 'string') {
					content = this.defaults.content;
				} else {
					content = this.defaults.content.innerHTML;
				}

				this._checkType(contentHolder);
				this._checkPosition();

				contentHolder.innerHTML = content;
				this.container.appendChild(contentHolder);
				document.body.appendChild(this.container);
			}
		}, {
			key: '_checkTyoe',
			value: function _checkTyoe(item) {
				switch (this.defaults.type) {
					case "success":
						item.classList.add(this.classes.success);
						break;

					case "danger":
						item.classList.add(this.classes.danger);
						break;

					case "warning":
						item.classList.add(this.classes.warning);
						break;

					case "alert":
						item.classList.add(this.classes.alert);
						break;

					case "none":
						item.classList.add(this.classes.bland);
						break;

					default:
						item.classList.add(this.classes.alert);
				}
			}
		}, {
			key: '_checkPosition',
			value: function _checkPosition() {
				if (this.defaults.aligned === true) {
					switch (this.defaults.posX) {
						case "right":
							this.container.style.right = 20 + "px";
							break;

						case "left":
							this.container.style.left = 20 + "px";
							break;

						default:
							this.container.style.right = 20 + "px";
					}

					switch (this.defaults.posY) {
						case "top":
							this.container.style.top = 20 + "px";
							break;

						case "bottom":
							this.container.style.bottom = 20 + "px";
							break;

						default:
							this.container.style.right = 20 + "px";
					}
				}
			}
		}, {
			key: '_attachEvents',
			value: function _attachEvents() {
				var _this2 = this;

				var keyHandler = this._keyHandler.bind(this);

				if (this.defaults.requiredAction === false) {
					if (this.defaults.clickOutsideToClose === true) {
						(function () {
							var documentClickHandler = function documentClickHandler(evt) {
								if (evt.target.parentNode !== _this2.container && _this2.container.classList.contains(_this2.classes.active)) {
									_this2.close(_this2.notifyId);

									setTimeout(function () {
										document.removeEventListener('click', documentClickHandler);
									}, 50);
								}
							};

							document.addEventListener('click', documentClickHandler);
						})();
					}
				} else {}

				if (this.defaults.keyActions === true) {
					this.container.addEventListener('keydown', keyHandler);
				}
			}
		}, {
			key: '_keyHandler',
			value: function _keyHandler(e) {
				if (this.defaults.requiredAction === false) {
					if (e.keyCode === this.keycodes.escape) {
						this.close(this.notifyId);
					}
				}
			}

			/* _handleActionTriggers() {
	  	if (this.defaults.actionTriggers.length) {
	  		for (let i = 0; i < this.defaults.actionTriggers.length; i++) {
	  			for var (k in this.defaults.actionTriggers[i]) {
	  				if (this.defaults.actionTriggers[i].hasOwnProperty(k)) {
	  					let actionTrigger = this.defaults.actionTriggers[i];
	  					let eventTrigger;
	  					let eventAction;
	  					let eventTarget;
	  						if (typeof actionTrigger.eventTrigger === 'string') {
	  						eventTrigger = actionTrigger.eventTrigger;
	  					}
	  						if (typeof actionTrigger.eventAction === 'function') {
	  						eventAction = actionTrigger.eventAction;
	  					}
	  						if (typeof actionTrigger.eventTarget === 'string') {
	  						eventTarget === document.querySelector(actionTrigger.eventTarget);
	  					}
	  						eventTarget.addEventListener(eventTrigger, eventAction);
	  				}
	  			}
	  		}
	  	}
	  } */

		}]);

		return notifications;
	}();

	exports.default = notifications;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var smoothScroll = function () {
		function smoothScroll(options) {
			_classCallCheck(this, smoothScroll);

			this.targets = null;
			this.scrollTargets = null;

			this.defaults = {
				clickTargets: '[data-scroll]',
				scrollTargets: '.scroll-target',
				duration: 1000,
				factor: null,
				timer: null,
				start: null
			};

			this._applySettings(options);
			this._init();
		}

		_createClass(smoothScroll, [{
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
				var _this = this;

				var handleClickEvent = this._handleClickEvent.bind(this);

				this.clickTargets = document.querySelectorAll(this.defaults.clickTargets);

				Array.prototype.map.call(this.clickTargets, function (item) {
					item.addEventListener('click', function () {
						_this._handleClickEvent(item);
					});
				});
			}
		}, {
			key: '_handleClickEvent',
			value: function _handleClickEvent(item) {

				var step = this._step.bind(this);

				this.defaults.start = Date.now();
				this.defaults.factor = 0;

				if (this.defaults.timer) {
					clearInterval(this.defaults.timer);
				}

				this.defaults.timer = setInterval(function () {
					step(item);
				}, 10);

				return this.defaults.timer;
			}
		}, {
			key: '_step',
			value: function _step(item) {
				var y;
				var target = item.getAttribute('data-scroll');
				var scrollTarget = document.getElementById(target).offsetTop;
				var offset = window.pageYOffset;
				var delta = scrollTarget - window.pageYOffset;

				this.defaults.factor = (Date.now() - this.defaults.start) / this.defaults.duration;

				if (this.defaults.factor >= 1) {
					clearInterval(this.defaults.timer);
					this.defaults.factor = 1;
				}

				y = this.defaults.factor * delta + offset;
				window.scrollBy(0, y - window.pageYOffset);
			}
		}]);

		return smoothScroll;
	}();

	exports.default = smoothScroll;

/***/ }
/******/ ])
});
;