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

	var _menu = __webpack_require__(1);

	var _notifications = __webpack_require__(4);

	var _notifications2 = _interopRequireDefault(_notifications);

	var _tooltip = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function init() {
		var mobileMenuTrigger = document.querySelector('.nav-menu button');
		var mobileMenu = document.querySelector('.mobile-menu-list');

		if (window.location.href.indexOf('notifications') != -1) {
			(0, _notifications2.default)();
		} else if (window.location.href.indexOf('menu') != -1) {
			(0, _menu.menuComponent)();
		} else if (window.location.href.indexOf('tooltip') != -1) {
			(0, _tooltip.tooltipComponent)();
		}

		function toggleMenu() {
			if (mobileMenu.classList.contains('mobile-open')) {
				mobileMenu.classList.remove('mobile-open');
				mobileMenuTrigger.classList.remove('mobile-open');
			} else {
				mobileMenuTrigger.classList.add('mobile-open');

				setTimeout(function () {
					mobileMenu.classList.add('mobile-open');
				}, 700);
			}
		}

		mobileMenuTrigger.addEventListener('click', toggleMenu);
	}

	init();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.menuComponent = menuComponent;

	var _softServe = __webpack_require__(2);

	var _softServe2 = _interopRequireDefault(_softServe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function menuComponent() {

		var dropdown1 = new _softServe2.default.menu({
			element: '.menu-1'
		});

		var dropdown2 = new _softServe2.default.menu({
			element: '.menu-2'
		});

		var dropdown3 = new _softServe2.default.menu({
			element: '.menu-3'
		});

		var dropdown4 = new _softServe2.default.menu({
			element: '.menu-4'
		});

		var dropdown5 = new _softServe2.default.menu({
			element: '.menu-5'
		});

		var dropdown6 = new _softServe2.default.menu({
			element: '.menu-6'
		});

		var dropdown7 = new _softServe2.default.menu({
			element: '.menu-7'
		});

		var scroller = new _softServe2.default.smoothScroll();
	} //import menu from '../../../src/components/menu/menu'

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.softserve = e() : t.softserve = e();
	}(undefined, function () {
	  return function (t) {
	    function e(i) {
	      if (s[i]) return s[i].exports;var n = s[i] = { exports: {}, id: i, loaded: !1 };return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports;
	    }var s = {};return e.m = t, e.c = s, e.p = "/", e(0);
	  }([function (t, e, s) {
	    "use strict";
	    function i(t) {
	      return t && t.__esModule ? t : { default: t };
	    }Object.defineProperty(e, "__esModule", { value: !0 });var n = s(2),
	        o = i(n),
	        l = s(1),
	        a = i(l),
	        c = s(3),
	        r = i(c),
	        h = s(4),
	        u = i(h),
	        f = s(5),
	        d = i(f),
	        m = { modal: o.default, menu: a.default, notifications: r.default, tooltip: u.default, smoothScroll: d.default };e.default = m;
	  }, function (t, e) {
	    "use strict";
	    function s(t, e) {
	      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
	      return typeof t === "undefined" ? "undefined" : _typeof(t);
	    } : function (t) {
	      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
	    },
	        n = function () {
	      function t(t, e) {
	        for (var s = 0; s < e.length; s++) {
	          var i = e[s];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
	        }
	      }return function (e, s, i) {
	        return s && t(e.prototype, s), i && t(e, i), e;
	      };
	    }(),
	        o = function () {
	      function t(e) {
	        s(this, t), this.element = null, this.container = null, this.outline = null, this.menuTrigger = null, this.items = null, this.defaults = { element: ".soft-menu", transitionDuration: .3, transitionFraction: .8, closeTimeout: 150, onBeforeOpen: null, onBeforeClose: null, onOpen: null, onClose: null }, this.keycodes = { enter: 13, escape: 27, space: 32, up: 38, down: 40 }, this.classes = { container: "soft-menu-container", outline: "soft-menu-outline", item: "soft-menu-item", unaligned: "soft-menu-unaligned", bottomRight: "soft-menu-bottom-right", bottomLeft: "soft-menu-bottom-left", topRight: "soft-menu-top-right", topLeft: "soft-menu-top-left", animating: "soft-menu-animating", visible: "soft-menu-visible" }, this.toggle = this._toggle.bind(this), this.show = this._show.bind(this), this.hide = this._hide.bind(this), this._applySettings(e), this._init();
	      }return n(t, [{ key: "_show", value: function value(t) {
	          var e = this;this.element && this.container && !function () {
	            var s = e.element.getBoundingClientRect().height,
	                i = e.element.getBoundingClientRect().width;e.container.style.width = i + "px", e.container.style.height = s + "px", e.outline.style.width = i + "px", e.outline.style.height = s + "px", e._calculateTransition(s, i), e._applyClip(s, i), "function" == typeof e.defaults.onBeforeOpen && e.defaults.onBeforeOpen.call(e), window.requestAnimationFrame(function () {
	              e.element.classList.add(e.classes.animating), e.element.style.clip = "rect(0 " + i + "px " + s + "px 0)", e.container.classList.add(e.classes.visible), "function" == typeof e.defaults.onOpen && e.defaults.onOpen.call(e);
	            }), e._animationEndListener();var n = function s(i) {
	              i !== t && i.target.parentNode !== e.element && e.container.classList.contains(e.classes.visible) && (e.hide(), setTimeout(function () {
	                document.removeEventListener("click", s);
	              }, 50));
	            };document.addEventListener("click", n);
	          }();
	        } }, { key: "_hide", value: function value() {
	          if (this.element && this.container) {
	            "function" == typeof this.defaults.onBeforeClose && this.defaults.onBeforeClose.call(this);for (var t = 0; t < this.items.length; t++) {
	              this.items[t].style.removeProperty("transition-delay");
	            }var e = this.element.getBoundingClientRect(),
	                s = e.height,
	                i = e.width;this.element.classList.add(this.classes.animating), this._applyClip(s, i), this.container.classList.remove(this.classes.visible), "function" == typeof this.defaults.onClose && this.defaults.onClose.call(this);
	          }
	        } }, { key: "_toggle", value: function value(t) {
	          this.container.classList.contains(this.classes.visible) ? this.hide() : this.show(t);
	        } }, { key: "_init", value: function value() {
	          var t = document.createElement("div"),
	              e = document.createElement("div"),
	              s = null,
	              i = null,
	              n = null;this.element = document.querySelector(this.defaults.element), this.element.parentNode.insertBefore(t, this.element), this.element.parentNode.removeChild(this.element), t.classList.add(this.classes.container), t.appendChild(this.element), e.classList.add(this.classes.outline), this.container = t, this.outline = e, this.container.insertBefore(e, this.element), i = this.element.getAttribute("for"), i && (s = document.getElementById(i), s && (this.menuTrigger = s, this._attachTriggerEvents())), n = this.element.querySelectorAll("." + this.classes.item), this.items = n, this._attachItemEvents(), this._positionOutline();
	        } }, { key: "_positionOutline", value: function value() {
	          this.element.classList.contains(this.classes.bottomLeft) && this.outline.classList.add(this.classes.bottomLeft), this.element.classList.contains(this.classes.topLeft) && this.outline.classList.add(this.classes.topLeft), this.element.classList.contains(this.classes.bottomRight) && this.outline.classList.add(this.classes.bottomRight), this.element.classList.contains(this.classes.topRight) && this.outline.classList.add(this.classes.topRight);
	        } }, { key: "_applyClip", value: function value(t, e) {
	          this.element.classList.contains(this.classes.unaligned) || (this.element.classList.contains(this.classes.bottomRight) ? this.element.style.clip = "rect(0 " + e + "px 0 " + e + "px)" : this.element.classList.contains(this.classes.topLeft) ? this.element.style.clip = "rect(" + t + "px 0 " + t + "px 0)" : this.element.classList.contains(this.classes.topRight) ? this.element.style.clip = "rect(" + t + "px " + e + "px " + t + "px " + e + "px)" : this.element.style.clip = "");
	        } }, { key: "_calculateTransition", value: function value(t, e) {
	          for (var s = this.defaults.transitionDuration * this.defaults.transitionFraction, i = 0; i < this.items.length; i++) {
	            var n = null;n = this.element.classList.contains(this.classes.topLeft) || this.element.classList.contains(this.classes.topRight) ? (t - this.items[i].offsetTop - this.items[i].offsetHeight) / t * s + "s" : this.items[i].offsetTop / t * s + "s", this.items[i].style.transitionDelay = n;
	          }
	        } }, { key: "_triggerClickHandler", value: function value() {
	          if (this.element && this.menuTrigger) {
	            var t = this.menuTrigger.getBoundingClientRect(),
	                e = this.menuTrigger.parentNode.getBoundingClientRect();this.element.classList.contains(this.classes.unaligned) || (this.element.classList.contains(this.classes.bottomRight) ? (this.container.style.right = e.right - t.right + "px", this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + "px") : this.element.classList.contains(this.classes.topRight) ? (this.container.style.right = e.right - t.right + "px", this.container.style.bottom = e.bottom - t.top + "px") : this.element.classList.contains(this.classes.topLeft) ? (this.container.style.left = this.menuTrigger.offsetLeft + "px", this.container.style.bottom = e.bottom - t.top + "px") : (this.container.style.left = this.menuTrigger.offsetLeft + "px", this.container.style.top = this.menuTrigger.offsetTop + this.menuTrigger.offsetHeight + "px"));
	          }this.toggle();
	        } }, { key: "_triggerKeyHandler", value: function value(t) {
	          this.element && this.container && this.menuTrigger && this.items && this.items.length > 0 && this.container.classList.contains(this.classes.visible) && (t.keyCode === this.keycodes.up ? (t.preventDefault(), this.items[this.items.length - 1].focus()) : t.keyCode === this.keycodes.down && (t.preventDefault(), this.items[0].focus()));
	        } }, { key: "_itemClickHandler", value: function value(t) {
	          var e = this;window.setTimeout(function (t) {
	            e.hide();
	          }, this.defaults.closeTimeout);
	        } }, { key: "_itemKeyHandler", value: function value(t) {
	          if (this.element && this.container && this.items && this.items.length > 0 && this.container.classList.contains(this.classes.visible)) {
	            var e = Array.prototype.slice.call(this.items).indexOf(t.target);t.keyCode === this.keycodes.up ? (t.preventDefault(), e > 0 ? this.items[e - 1].focus() : this.items[this.items.length - 1].focus()) : t.keyCode === this.keycodes.down ? (t.preventDefault(), this.items.length > e + 1 ? this.items[e + 1].focus() : this.items[0].focus()) : t.keyCode === this.keycodes.space || t.keyCode === this.keycodes.enter ? t.preventDefault() : t.keyCode === this.keycodes.escape && (t.preventDefault(), this.hide());
	          }
	        } }, { key: "_attachTriggerEvents", value: function value() {
	          var t = this._triggerClickHandler.bind(this),
	              e = this._triggerKeyHandler.bind(this);this.menuTrigger.addEventListener("click", t), this.menuTrigger.addEventListener("keydown", e);
	        } }, { key: "_attachItemEvents", value: function value() {
	          for (var t = this._itemClickHandler.bind(this), e = this._itemKeyHandler.bind(this), s = 0; s < this.items.length; s++) {
	            this.items[s].addEventListener("click", t), this.items[s].tabIndex = "-1", this.items[s].addEventListener("keydown", e);
	          }
	        } }, { key: "_animationEndListener", value: function value() {
	          var t = this._removeAnimationEndListener.bind(this);this.element.addEventListener("transitionend", t), this.element.addEventListener("webkitTransitionEnd", t);
	        } }, { key: "_removeAnimationEndListener", value: function value() {
	          this.element.classList.remove(this.classes.animating);
	        } }, { key: "_applySettings", value: function value(t) {
	          if ("object" === ("undefined" == typeof t ? "undefined" : i(t))) for (var e in t) {
	            t.hasOwnProperty(e) && (this.defaults[e] = t[e]);
	          }
	        } }]), t;
	    }();e.default = o;
	  }, function (t, e) {
	    "use strict";
	    function i(t, e) {
	      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(e, "__esModule", { value: !0 });var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
	      return typeof t === "undefined" ? "undefined" : _typeof(t);
	    } : function (t) {
	      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
	    },
	        o = function () {
	      function t(t, e) {
	        for (var s = 0; s < e.length; s++) {
	          var i = e[s];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
	        }
	      }return function (e, s, i) {
	        return s && t(e.prototype, s), i && t(e, i), e;
	      };
	    }(),
	        l = function () {
	      function t(e) {
	        i(this, t), this.overlay = null, this.modal = null, this.closeButton = null, this.defaults = { classes: [], overlay: !0, content: "", closeKeys: [27], closeButton: !0, onBeforeOpen: null, onBeforeClose: null, onOpen: null, onClose: null }, this.open = this._open.bind(this), this.close = this._close.bind(this), this._applySettings(e), this.transitionEvent = this._transitionSniff();
	      }return o(t, [{ key: "_open", value: function value() {
	          var t = this;"function" == typeof this.defaults.onBeforeOpen && this.defaults.onBeforeOpen.call(this), document.body.classList.add("modal-open"), this._buildOut.call(this), this.modal.classList.add("modal-open"), this.overlay.classList.add("modal-open"), this._attachEvents(), this.transitionEvent && this.modal.addEventListener(this.transitionEvent, function () {
	            "function" == typeof t.defaults.onOpen && t.defaults.onOpen();
	          }, !1), this._checkOverflow.call(this);
	        } }, { key: "_close", value: function value() {
	          var t = this;"function" == typeof this.defaults.onBeforeClose && this.defaults.onBeforeClose.call(this), this.modal.classList.remove("modal-open"), this.defaults.classes.length && this.defaults.classes.forEach(function (e) {
	            t.modal.classList.remove(e), s;
	          }), document.body.classList.remove("modal-open"), this.transitionEvent && this.overlay.addEventListener(this.transitionEvent, function () {
	            document.body.removeChild(t.overlay);
	          }, !1), "function" == typeof this.defaults.onClose && this.defaults.onClose.call(this);
	        } }, { key: "_closeKeyHandler", value: function value(t) {
	          this.defaults.closeKeys.indexOf(t.which) > -1 && (t.preventDefault(), this.close());
	        } }, { key: "_clickOutsideHandler", value: function value(t) {
	          !this._findAncestor(t.target, "modal") && event.clientX < this.modal.clientWidth && this.close();
	        } }, { key: "_attachEvents", value: function value() {
	          var t = this._closeKeyHandler.bind(this),
	              e = this._clickOutsideHandler.bind(this);"null" != typeof this.closeButton && this.closeButton.addEventListener("click", this.close, !1), this.modal.addEventListener("mousedown", e, !1), document.addEventListener("keydown", t, !1);
	        } }, { key: "_destroyEvents", value: function value() {
	          var t = this._closeKeyHandler.bind(this),
	              e = this._clickOutsideHandler.bind(this);"null" != typeof this.closeButton && this.closeButton.removeEventListener("click", this.close()), this.modal.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
	        } }, { key: "_buildOut", value: function value() {
	          var t,
	              e = this,
	              s = document.createElement("div");s.classList.add("modal-content"), t = "string" == typeof this.defaults.content ? this.defaults.content : this.defaults.content.innerHTML, s.innerHTML = t, this._checkOverlay(), this._checkClose(), this.modal = document.createElement("div"), this.modal.classList.add("modal"), this.defaults.classes.length && this.defaults.classes.forEach(function (t) {
	            "string" == typeof t && e.modDal.classList.add(t);
	          }), this.modal.appendChild(s), this.modal.appendChild(this.closeButton), this.overlay.appendChild(this.modal), document.body.insertBefore(this.overlay, document.body.firstChild);
	        } }, { key: "_checkContent", value: function value() {
	          var t;return t = "string" == typeof this.defaults.content ? this.defaults.content : this.defaults.content.innerHTML;
	        } }, { key: "_checkOverlay", value: function value() {
	          this.defaults.overlay === !0 && (this.overlay = document.createElement("div"), this.overlay.classList.add("modal-overlay"));
	        } }, { key: "_checkClose", value: function value() {
	          this.defaults.closeButton === !0 && (this.closeButton = document.createElement("button"), this.closeButton.innerHTML = "<span>X</span>", this.closeButton.classList.add("modal-close-button"));
	        } }, { key: "_applySettings", value: function value(t) {
	          if ("object" === ("undefined" == typeof t ? "undefined" : n(t))) for (var e in t) {
	            t.hasOwnProperty(e) && (this.defaults[e] = t[e]);
	          }
	        } }, { key: "_transitionSniff", value: function value() {
	          var t,
	              e = document.createElement("div"),
	              s = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (t in s) {
	            if (void 0 !== e.style[t]) return s[t];
	          }
	        } }, { key: "_checkOverflow", value: function value() {
	          this.modal.classList.contains("modal-open") && (this._isOverflow() ? this.modal.classList.add("modal-overflow") : this.modal.classList.remove("modal-overflow"));
	        } }, { key: "_isOverflow", value: function value() {
	          var t = window.innerHeight,
	              e = this.modal.clientHeight,
	              s = !(e < t);return s;
	        } }, { key: "_findAncestor", value: function value(t, e) {
	          for (; (t = t.parentElement) && !t.classList.contains(e);) {}return t;
	        } }]), t;
	    }();e.default = l;
	  }, function (t, e) {
	    "use strict";
	    function s(t, e) {
	      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
	      return typeof t === "undefined" ? "undefined" : _typeof(t);
	    } : function (t) {
	      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
	    },
	        n = function () {
	      function t(t, e) {
	        for (var s = 0; s < e.length; s++) {
	          var i = e[s];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
	        }
	      }return function (e, s, i) {
	        return s && t(e.prototype, s), i && t(e, i), e;
	      };
	    }(),
	        o = function () {
	      function t(e) {
	        s(this, t), this.container = null, this.count = 0, this.notifyId = null, this.defaults = { content: "", timeout: 2500, type: "alert", onBeforeOpen: null, onOpen: null, onBeforeClose: null, onClose: null, actionTriggers: [], requiredAction: null, clickOutsideToClose: !0, keyActions: !0, timeoutClose: !0, posX: "right", posY: "bottom", aligned: !0 }, this.classes = { container: "notification-container", notification: "notification", topLeft: "notification-top-left", topRight: "notification-top-right", bottomLeft: "notification-bottom-left", title: "notification-title", text: "notification-text", confirmAction: "notification-action-confirm", confirmCancel: "notification-action-cancel", active: "notification-shown", success: "notification-sucess", alert: "notification-alert", warning: "notification-warning", danger: "notification-danger", none: "notification-bland" }, this.keycodes = { escape: 27 }, this._applySettings(e), this.open = this._open.bind(this), this.close = this._close.bind(this);
	      }return n(t, [{ key: "_open", value: function value(t) {
	          var e = this;this.notifyId = "notification-" + this.count, "function" == typeof this.defaults.onBeforeOpen && this.defaults.onBeforeOpen.call(this), this._buildOut.call(this), setTimeout(function () {
	            e.container.classList.add(e.classes.active), e.container.setAttribute("id", e.notifyId), "function" == typeof e.defaults.onOpen && e.defaults.onOpen.call(e);
	          }, 100), this.defaults.clickOutsideToClose === !0 && this.defaults.requiredAction !== !0 && !function () {
	            var s = function s(i) {
	              t !== i && i.target.parentNode !== e.container && e.container.classList.contains(e.classes.active) && (e.close(e.notifyId), setTimeout(function () {
	                document.removeEventListener("click", s);
	              }, 50));
	            };document.addEventListener("click", s);
	          }(), this.defaults.timeoutClose === !0 && this.defaults.timeout > 0 && setTimeout(function () {
	            e.close(e.notifyId);
	          }, this.defaults.timeout), this._attachEvents();
	        } }, { key: "_close", value: function value(t) {
	          var e = document.getElementById(t);return !!e && ("function" == typeof this.defaults.onBeforeClose && this.defaults.onBeforeClose.call(this), e.classList.remove(this.classes.active), "function" == typeof this.defaults.onClose && this.defaults.onClose.call(this), setTimeout(function () {
	            e.parentNode.removeChild(e);
	          }, 600), !0);
	        } }, { key: "_buildOut", value: function value() {
	          var t,
	              e = document.createElement("div"),
	              s = document.createElement("div");e.classList.add(this.classes.container), s.classList.add(this.classes.notification), this.container = e, this.container.style.position = "fixed", t = "string" == typeof this.defaults.content ? this.defaults.content : this.defaults.content.innerHTML, this._checkType(s), this._checkPosition(), s.innerHTML = t, this.container.appendChild(s), document.body.appendChild(this.container);
	        } }, { key: "_checkType", value: function value(t) {
	          switch (this.defaults.type) {case "success":
	              t.classList.add(this.classes.success);break;case "danger":
	              t.classList.add(this.classes.danger);break;case "warning":
	              t.classList.add(this.classes.warning);break;case "alert":
	              t.classList.add(this.classes.alert);break;case "none":
	              t.classList.add(this.classes.bland);break;default:
	              t.classList.add(this.classes.alert);}
	        } }, { key: "_checkPosition", value: function value() {
	          if (this.defaults.aligned === !0) {
	            switch (this.defaults.posX) {case "right":
	                this.container.style.right = "20px";break;case "left":
	                this.container.style.left = "20px";break;default:
	                this.container.style.right = "20px";}switch (this.defaults.posY) {case "top":
	                this.container.style.top = "20px";break;case "bottom":
	                this.container.style.bottom = "20px";break;default:
	                this.container.style.right = "20px";}"right" === this.defaults.posX && "top" === this.defaults.posY ? this.container.classList.add(this.classes.topRight) : "left" === this.defaults.posX && "top" === this.defaults.posY ? this.container.classList.add(this.classes.topLeft) : "left" === this.defaults.posX && "bottom" === this.defaults.posY && this.container.classList.add(this.classes.bottomLeft);
	          }
	        } }, { key: "_attachEvents", value: function value() {
	          var t = this._keyHandler.bind(this);this.defaults.keyActions === !0 && document.addEventListener("keydown", t);
	        } }, { key: "_keyHandler", value: function value(t) {
	          this.defaults.requiredAction !== !0 && t.keyCode === this.keycodes.escape && this.close(this.notifyId);
	        } }, { key: "_applySettings", value: function value(t) {
	          if ("object" === ("undefined" == typeof t ? "undefined" : i(t))) for (var e in t) {
	            t.hasOwnProperty(e) && (this.defaults[e] = t[e]);
	          }
	        } }]), t;
	    }();e.default = o;
	  }, function (t, e) {
	    "use strict";
	    function s(t, e) {
	      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
	      return typeof t === "undefined" ? "undefined" : _typeof(t);
	    } : function (t) {
	      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
	    },
	        n = function () {
	      function t(t, e) {
	        for (var s = 0; s < e.length; s++) {
	          var i = e[s];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
	        }
	      }return function (e, s, i) {
	        return s && t(e.prototype, s), i && t(e, i), e;
	      };
	    }(),
	        o = function () {
	      function t(e) {
	        s(this, t), this.element = null, this.parent = null, this.defaults = { element: ".soft-tooltip" }, this.classes = { active: "soft-tooltip-active", bottom: "soft-tooltip-bottom", left: "soft-tooltip-left", right: "soft-tooltip-right", top: "soft-tooltip-top" }, this._applySettings(e), this._init();
	      }return n(t, [{ key: "_hide", value: function value() {
	          this.element.classList.remove(this.classes.active);
	        } }, { key: "_init", value: function value() {
	          if (this.element = document.querySelector(this.defaults.element), this.element) {
	            var t = this.element.getAttribute("for");t && (this.parent = document.getElementById(t), this._attachEvents());
	          }
	        } }, { key: "_handleMouseEvent", value: function value(t) {
	          var e = t.target.getBoundingClientRect(),
	              s = e.left + e.width / 2,
	              i = e.top + e.height / 2,
	              n = -1 * (this.element.offsetWidth / 2),
	              o = -1 * (this.element.offsetHeight / 2);this.element.classList.contains(this.classes.left) || this.element.classList.contains(this.classes.right) ? (s = e.width / 2, i + o < 0 ? (this.element.style.top = "0", this.element.style.marginTop = "0") : (this.element.style.top = i + "px", this.element.style.marginTop = o + "px")) : s + n < 0 ? (this.element.style.left = "0", this.element.style.marginLeft = "0") : (this.element.style.left = s + "px", this.element.style.marginLeft = n + "px"), this.element.classList.contains(this.classes.top) ? this.element.style.top = e.top - this.element.offsetHeight - 10 + "px" : this.element.classList.contains(this.classes.right) ? this.element.style.left = e.left + e.width + 10 + "px" : this.element.classList.contains(this.classes.left) ? this.element.style.left = e.left - this.element.offsetWidth - 10 + "px" : this.element.style.top = e.top + e.height + 10 + "px", this.element.classList.add(this.classes.active);
	        } }, { key: "_attachEvents", value: function value() {
	          var t = this._handleMouseEvent.bind(this),
	              e = this._throttle.bind(this),
	              s = this._hide.bind(this);this.parent.addEventListener("mouseenter", t, !1), this.parent.addEventListener("touchend", t, !1), this.parent.addEventListener("mouseleave", s, !1), window.addEventListener("scroll", e, !0), window.addEventListener("touchstart", e);
	        } }, { key: "_throttle", value: function value() {
	          var t = this,
	              e = !1;e || window.requestAnimationFrame(function () {
	            t._hide.call(t), e = !1;
	          }), e = !0;
	        } }, { key: "_applySettings", value: function value(t) {
	          if ("object" === ("undefined" == typeof t ? "undefined" : i(t))) for (var e in t) {
	            t.hasOwnProperty(e) && (this.defaults[e] = t[e]);
	          }
	        } }]), t;
	    }();e.default = o;
	  }, function (t, e) {
	    "use strict";
	    function s(t, e) {
	      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	    }Object.defineProperty(e, "__esModule", { value: !0 });var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
	      return typeof t === "undefined" ? "undefined" : _typeof(t);
	    } : function (t) {
	      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
	    },
	        n = function () {
	      function t(t, e) {
	        for (var s = 0; s < e.length; s++) {
	          var i = e[s];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
	        }
	      }return function (e, s, i) {
	        return s && t(e.prototype, s), i && t(e, i), e;
	      };
	    }(),
	        o = function () {
	      function t(e) {
	        s(this, t), this.targets = null, this.scrollTargets = null, this.defaults = { clickTargets: "[data-scroll]", scrollTargets: ".scroll-target", duration: 1e3, factor: null, timer: null, start: null }, this._applySettings(e), this._init();
	      }return n(t, [{ key: "_applySettings", value: function value(t) {
	          if ("object" === ("undefined" == typeof t ? "undefined" : i(t))) for (var e in t) {
	            t.hasOwnProperty(e) && (this.defaults[e] = t[e]);
	          }
	        } }, { key: "_init", value: function value() {
	          var t = this;this._handleClickEvent.bind(this);this.clickTargets = document.querySelectorAll(this.defaults.clickTargets), Array.prototype.map.call(this.clickTargets, function (e) {
	            e.addEventListener("click", function () {
	              t._handleClickEvent(e);
	            });
	          });
	        } }, { key: "_handleClickEvent", value: function value(t) {
	          var e = this._step.bind(this);return this.defaults.start = Date.now(), this.defaults.factor = 0, this.defaults.timer && clearInterval(this.defaults.timer), this.defaults.timer = setInterval(function () {
	            e(t);
	          }, 10), this.defaults.timer;
	        } }, { key: "_step", value: function value(t) {
	          var e,
	              s = t.getAttribute("data-scroll"),
	              i = document.getElementById(s).offsetTop,
	              n = window.pageYOffset,
	              o = i - window.pageYOffset;this.defaults.factor = (Date.now() - this.defaults.start) / this.defaults.duration, this.defaults.factor >= 1 && (clearInterval(this.defaults.timer), this.defaults.factor = 1), e = this.defaults.factor * o + n, window.scrollBy(0, e - window.pageYOffset);
	        } }]), t;
	    }();e.default = o;
	  }]);
	});
	//# sourceMappingURL=soft-serve.min.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _softServe = __webpack_require__(5);

	var _softServe2 = _interopRequireDefault(_softServe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function notificationsComponent() {

		var notificationContent1 = document.getElementById('notification-1');
		var notificationContent2 = document.getElementById('notification-2');
		var notificationContent3 = document.getElementById('notification-3');
		var notificationContent4 = document.getElementById('notification-4');
		var notificationContent5 = document.getElementById('notification-5');
		var notificationTrigger1 = document.getElementById('notification-trigger-1');
		var notificationTrigger2 = document.getElementById('notification-trigger-2');
		var notificationTrigger3 = document.getElementById('notification-trigger-3');
		var notificationTrigger4 = document.getElementById('notification-trigger-4');
		var notificationTrigger5 = document.getElementById('notification-trigger-5');
		var notificationTrigger6 = document.getElementById('notification-trigger-6');

		var notification1 = new _softServe2.default.notifications({
			content: notificationContent1
		});

		var notification2 = new _softServe2.default.notifications({
			content: '<h2 class=\'notification-title\'>I\'m a title!</h2><p class=\'notification-text\'>I\'m some text!</p>'
		});

		var notification3 = new _softServe2.default.notifications({
			content: notificationContent2,
			posY: 'bottom',
			posX: 'left'
		});

		var notification4 = new _softServe2.default.notifications({
			content: notificationContent3,
			posY: 'top',
			posX: 'right'
		});

		var notification5 = new _softServe2.default.notifications({
			content: notificationContent4,
			posY: 'top',
			posX: 'left'
		});

		var notification6 = new _softServe2.default.notifications({
			aligned: false
		});

		var scroller = new _softServe2.default.smoothScroll();

		notificationTrigger1.addEventListener('click', notification1.open);
		notificationTrigger2.addEventListener('click', notification2.open);
		notificationTrigger3.addEventListener('click', notification3.open);
		notificationTrigger4.addEventListener('click', notification4.open);
		notificationTrigger5.addEventListener('click', notification5.open);
		notificationTrigger6.addEventListener('click', notification6.open);
	}

	exports.default = notificationsComponent;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["softserve"] = factory();else root["softserve"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "/";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _modal = __webpack_require__(2);

				var _modal2 = _interopRequireDefault(_modal);

				var _menu = __webpack_require__(1);

				var _menu2 = _interopRequireDefault(_menu);

				var _notifications = __webpack_require__(3);

				var _notifications2 = _interopRequireDefault(_notifications);

				var _tooltip = __webpack_require__(4);

				var _tooltip2 = _interopRequireDefault(_tooltip);

				var _smoothScroll = __webpack_require__(5);

				var _smoothScroll2 = _interopRequireDefault(_smoothScroll);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				var softServer = {
					modal: _modal2.default,
					menu: _menu2.default,
					notifications: _notifications2.default,
					tooltip: _tooltip2.default,
					smoothScroll: _smoothScroll2.default
				};

				exports.default = softServer;

				/***/
			},
			/* 1 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

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

				/***/
			},
			/* 2 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

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

				/***/
			},
			/* 3 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var notifications = function () {
					function notifications(options) {
						_classCallCheck(this, notifications);

						this.container = null;
						this.count = 0;
						this.notifyId = null;

						this.defaults = {
							content: '',
							timeout: 2500,
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
							topLeft: 'notification-top-left',
							topRight: 'notification-top-right',
							bottomLeft: 'notification-bottom-left',
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

					/**
	     *
	      	Public Methods
	     *
	     **/

					_createClass(notifications, [{
						key: '_open',
						value: function _open(e) {
							var _this = this;

							this.notifyId = "notification-" + this.count;

							if (typeof this.defaults.onBeforeOpen === 'function') {
								this.defaults.onBeforeOpen.call(this);
							}

							this._buildOut.call(this);

							setTimeout(function () {
								_this.container.classList.add(_this.classes.active);
								_this.container.setAttribute('id', _this.notifyId);

								if (typeof _this.defaults.onOpen === 'function') {
									_this.defaults.onOpen.call(_this);
								}
							}, 100);

							if (this.defaults.clickOutsideToClose === true && this.defaults.requiredAction !== true) {
								(function () {
									var documentClickHandler = function documentClickHandler(evt) {
										if (e !== evt && evt.target.parentNode !== _this.container && _this.container.classList.contains(_this.classes.active)) {
											_this.close(_this.notifyId);

											setTimeout(function () {
												document.removeEventListener('click', documentClickHandler);
											}, 50);
										}
									};

									document.addEventListener('click', documentClickHandler);
								})();
							}

							if (this.defaults.timeoutClose === true && this.defaults.timeout > 0) {
								setTimeout(function () {
									_this.close(_this.notifyId);
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

						/**
	      *
	      	Build Methods
	      *
	     **/

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
						key: '_checkType',
						value: function _checkType(item) {
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

								if (this.defaults.posX === 'right' && this.defaults.posY === 'top') {
									this.container.classList.add(this.classes.topRight);
								} else if (this.defaults.posX === 'left' && this.defaults.posY === 'top') {
									this.container.classList.add(this.classes.topLeft);
								} else if (this.defaults.posX === 'left' && this.defaults.posY === 'bottom') {
									this.container.classList.add(this.classes.bottomLeft);
								}
							}
						}

						/**
	      *
	      	Handle Events
	      *
	     **/

					}, {
						key: '_attachEvents',
						value: function _attachEvents() {
							var keyHandler = this._keyHandler.bind(this);

							if (this.defaults.keyActions === true) {
								document.addEventListener('keydown', keyHandler);
							}
						}
					}, {
						key: '_keyHandler',
						value: function _keyHandler(e) {
							if (this.defaults.requiredAction !== true) {
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

					return notifications;
				}();

				exports.default = notifications;

				/***/
			},
			/* 4 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				var tooltip = function () {
					function tooltip(options) {
						_classCallCheck(this, tooltip);

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
							top: 'soft-tooltip-top'
						};

						this._applySettings(options);
						this._init();
					}

					_createClass(tooltip, [{
						key: '_hide',
						value: function _hide() {
							this.element.classList.remove(this.classes.active);
						}
					}, {
						key: '_init',
						value: function _init() {
							this.element = document.querySelector(this.defaults.element);

							if (this.element) {
								var tooltipParent = this.element.getAttribute('for');

								if (tooltipParent) {
									this.parent = document.getElementById(tooltipParent);

									this._attachEvents();
								}
							}
						}
					}, {
						key: '_handleMouseEvent',
						value: function _handleMouseEvent(e) {
							var rect = e.target.getBoundingClientRect();
							var left = rect.left + rect.width / 2;
							var top = rect.top + rect.height / 2;
							var marginLeft = -1 * (this.element.offsetWidth / 2);
							var marginTop = -1 * (this.element.offsetHeight / 2);

							if (this.element.classList.contains(this.classes.left) || this.element.classList.contains(this.classes.right)) {
								left = rect.width / 2;

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
					}, {
						key: '_attachEvents',
						value: function _attachEvents() {
							var mouseEnterHandler = this._handleMouseEvent.bind(this);
							var scrollAndResizeHandler = this._throttle.bind(this);
							var hideHandler = this._hide.bind(this);

							this.parent.addEventListener('mouseenter', mouseEnterHandler, false);
							this.parent.addEventListener('touchend', mouseEnterHandler, false);
							this.parent.addEventListener('mouseleave', hideHandler, false);
							window.addEventListener('scroll', scrollAndResizeHandler, true);
							window.addEventListener('touchstart', scrollAndResizeHandler);
						}
					}, {
						key: '_throttle',
						value: function _throttle() {
							var _this = this;

							var ticking = false;
							if (!ticking) {
								window.requestAnimationFrame(function () {
									_this._hide.call(_this);
									ticking = false;
								});
							}

							ticking = true;
						}
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

					return tooltip;
				}();

				exports.default = tooltip;

				/***/
			},
			/* 5 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

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

				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=soft-serve.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.tooltipComponent = tooltipComponent;

	var _softServe = __webpack_require__(5);

	var _softServe2 = _interopRequireDefault(_softServe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function tooltipComponent() {

		var scroller = new _softServe2.default.smoothScroll();
		var tooltip = new _softServe2.default.tooltip();

		var tooltip2 = new _softServe2.default.tooltip({
			element: '.soft-tooltip-2'
		});

		var tooltip3 = new _softServe2.default.tooltip({
			element: '.soft-tooltip-3'
		});

		var tooltip4 = new _softServe2.default.tooltip({
			element: '.soft-tooltip-4'
		});

		var tooltip5 = new _softServe2.default.tooltip({
			element: '.soft-tooltip-5'
		});
	}

/***/ }
/******/ ]);