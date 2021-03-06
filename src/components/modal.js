
class modal {
	constructor(options) {
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

	_open() {
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
			this.modal.addEventListener(this.transitionEvent, () => {
				if (typeof this.defaults.onOpen === 'function') {
					this.defaults.onOpen();
				}

				//this.modal.removeEventListener(transitionEvent, handleTransition, false);
			}, false);
		}

		this._checkOverflow.call(this);
	}

	_close() {
		var self = this;

		if (typeof this.defaults.onBeforeClose === 'function') {
			this.defaults.onBeforeClose.call(this);
		}

		this.modal.classList.remove('modal-open');

		if (this.defaults.classes.length) {
			this.defaults.classes.forEach((item) => {
				this.modal.classList.remove(item);s
			});
		}

		document.body.classList.remove('modal-open');

		//this._destroyEvents();

		if (this.transitionEvent) {
			this.overlay.addEventListener(this.transitionEvent, () => {
				document.body.removeChild(this.overlay);
				//this.overlay.parentNode.removeChild(this.overlay);
				//this.modal.removeEventListener(this.transitionEvent, handleClose, false);
			}, false);
		}

		if (typeof this.defaults.onClose === 'function') {
			this.defaults.onClose.call(this);
		}

	}

	/* Events */

	_closeKeyHandler(e) {
		if (this.defaults.closeKeys.indexOf(e.which) > -1 ) {
			e.preventDefault();
			this.close();
		}
	}

	_clickOutsideHandler(e) {
		if (!this._findAncestor(e.target, 'modal') && event.clientX < this.modal.clientWidth) {
			this.close();
		}
	}

	_attachEvents() {
		let closeKeyHandler = this._closeKeyHandler.bind(this);
		let clickOutsideHandler = this._clickOutsideHandler.bind(this);

		if (typeof this.closeButton !== 'null') {
			this.closeButton.addEventListener('click', this.close, false);
		}

		this.modal.addEventListener('mousedown', clickOutsideHandler, false);
		document.addEventListener('keydown', closeKeyHandler, false);
	}

	_destroyEvents() {
		let closeKeyHandler = this._closeKeyHandler.bind(this);
		let clickOutsideHandler = this._clickOutsideHandler.bind(this);

		if (typeof this.closeButton !== 'null') {
			this.closeButton.removeEventListener('click', this.close());
		}

		this.modal.removeEventListener('mousedown', clickOutsideHandler);
		document.removeEventListener('keydown', closeKeyHandler);
	}

	/* Build */

	_buildOut() {
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
			this.defaults.classes.forEach((item) => {
				if (typeof item === 'string') {
					this.modDal.classList.add(item);
				}
			});
		}

		this.modal.appendChild(contentHolder);
		this.modal.appendChild(this.closeButton);
		this.overlay.appendChild(this.modal);
		document.body.insertBefore(this.overlay, document.body.firstChild);
	}

	_checkContent() {
		var content;

		if (typeof this.defaults.content === 'string') {
			content = this.defaults.content; 
		} else {
			content = this.defaults.content.innerHTML
		}

		return content;
	}

	_checkOverlay() {
		if (this.defaults.overlay === true) {
			this.overlay = document.createElement('div');
			this.overlay.classList.add('modal-overlay');
		} else {
			return; 
		}
	}

	_checkClose() {
		if (this.defaults.closeButton === true) {
			this.closeButton = document.createElement('button');
			this.closeButton.innerHTML = `<span>X</span>`;
			this.closeButton.classList.add('modal-close-button');
		} else {
			return;
		}
	}


	/* Utils */

	_applySettings(options) {
		if (typeof options === 'object') {
			for (var i in options) {
				if (options.hasOwnProperty(i)) {
					this.defaults[i] = options[i];
				}
			}
		}
	}

	_transitionSniff() {
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

	_checkOverflow() {
		if (this.modal.classList.contains('modal-open')) {
			if (this._isOverflow()) {
				this.modal.classList.add('modal-overflow');
			} else {
				this.modal.classList.remove('modal-overflow');
			}
		}
	}

	_isOverflow() {
		let viewportHeight = window.innerHeight;
		let modalHeight = this.modal.clientHeight;
		var isOverflow = modalHeight < viewportHeight ? false : true;
		return isOverflow;
	}

	_findAncestor(el, cls) {
		while ((el = el.parentElement) && !el.classList.contains(cls));
		return el;
	}
}

export default modal