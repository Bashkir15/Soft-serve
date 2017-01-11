class notifications {
	constructor(options) {
		this.container = null;
		this.count = 0;

		this.defaults = {
			content: '',
			timeout: 200,
			type: 'alert',
			onBeforeOpen: null,
			onOpen: null,
			onBeforeClose: null,
			onClose: null,
			actionTriggers: [],
			action: null,
			requiredAction: null,
			clickOutsideToClose: true,
			posX: 'right',
			posY: 'bottom',
			aligned: true
		};

		this.classes = {
			container: 'notification-container',
			title: 'notification-title',
			text: 'notification-text',
			confirmAction: 'notification-action-confirm',
			confirmCancel: 'notification-action-cancel',
			active: 'notification-shown',
		};

		this._applySettings(options);
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

	_BuildOut() {
		var container = document.createElement('div');
		var contentHolder = document.createElement('div');
		var content;

		container.classList.add('notification-container');
		contentHolder.classList.add('notification');

		this.container = container;
		this.container.style.position = "fixed";

		if (typeof this.defaults.content === 'string') {
			content = this.defaults.content;
		} else {
			content = this.defaults.content.innerHTML;
		}

		this._checkType();
		this._checkPosition();

		contentHolder.innerHTML = content;
		this.container.appendChild(contentHolder);
	}
}