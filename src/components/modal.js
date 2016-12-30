
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

	/* Build */

	_buildOut() {
		var contentHolder = document.createElement('div');
		contentHolder.classList.add('modal-content');

		this._checkContent();
		this._checkOverlay();
		this._checkClose();

		contentHolder.appendChild(this.defaults.content);
		this.modal.appendChild(contentHolder);
		this.modal.appendChild(this.closeButton);
		this.overlay.appendChild(this.modal);
		document.body.insertBefore(this.overlay, document.body.firstChild);
	}

	_checkContent() {
		if (typeof this.defaults.content === 'string') {
			this.defaults.content = this.defaults.content; 
		} else {
			this.defaults.content = this.defaults.content.innerHTML
		}
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
		var el = document.createElement('test-transition');
		var transition = {
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
}

export modal