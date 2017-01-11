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
			timeoutClose: true,
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
			success: 'notification-sucess',
			alert: 'notification-alert',
			warning: 'notification-warning',
			danger: 'notification-danger',
			none: 'notification-bland'
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

	_open() {
		let notifyId = "notification-" + this.count;

		if (typeof this.defaults.onBeforeOpen === 'function') {
			this.defaults.onBeforeOpen.call(this);
		}

		this._buildOut.call(this);

		setTimeout(() => {
			this.container.classList.add(this.classes.active);
			this.container.setAttribute('id', notifyId);
		}, 100);

		if (this.defaults.timeoutClose === true && this.defaults.timeout > 0) {
			setTimeout(() => {
				this.close(notifyId);
			}, this.defaults.timeout);
		}

		this._attachEvents();

		return notifyId;
	}

	_buildOut() {
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

		this._checkType(contentHolder);
		this._checkPosition();

		contentHolder.innerHTML = content;
		this.container.appendChild(contentHolder);
		document.body.appendChild(this.container);
	}

	_checkTyoe(item) {
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

			case "none"
				item.classList.add(this.classes.bland);
				break;

			default:
				item.classList.add(this.classes.alert);
		}
	}

	_checkPosition() {
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
					this.container.style.bottom = 20 "px";
					break;

				default:
					this.container.style.right = 20 + "px";				
			}
		} 
	}
}