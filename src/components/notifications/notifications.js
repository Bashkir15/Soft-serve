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
}