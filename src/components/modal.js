
class modal {
	constructor(options) {
		this.overlay = null;
		this.modal = null;

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