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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modalTrigger1 = document.getElementById('modal-trigger');
	var modalContent1 = document.getElementById('modal-component');

	var modal1 = new _modal2.default({
		content: modalContent1
	});

	modalTrigger1.addEventListener('click', modal1.open, false);

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
					this.modal.addEventListener(this.transitionEvent, function handleTransition() {
						if (typeof this.defaults.onOpen === 'function') {
							this.defaults.onOpen.call(this);
						}

						this.modal.removeEventListener(transitionEvent, handleTransition, false);
					}, false);
				}

				this._checkOverflow.call(this);
			}
		}, {
			key: '_close',
			value: function _close() {
				var _this = this;

				var self = this;

				if (typeof this.defaults.onBeforeClose === 'function') {
					this.defaults.onBeforeClose.call(this);
				}

				this.overlay.classList.remove('dialog-open');
				this.modal.classList.remove('dialog-open');
				this.defaults.classes.forEach(function (item) {
					_this.modal.classList.remove(item);
				});
				document.body.classList.remove('dialog-open');

				this._destroyEvents();

				if (this.transitionEvent) {
					this.modal.addEventListener(this.transitionEvent, function handleClose() {
						this.overlay.parentNode.removeChild(this.overlay);

						this.modal.removeEventListener(this.transitionEvent, handleClose, false);
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
				if (this.defaults.closeKeys.indexOf(e.which) > 1 && this.modal.classList.contains('modal-open')) {
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

				this.modal.addEventListener('mousedown', clickOutsideHandler);
				document.addEventListener('keydown', closeKeyHandler);
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
				var _this2 = this;

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
							_this2.modal.classList.add(item);
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

/***/ }
/******/ ]);