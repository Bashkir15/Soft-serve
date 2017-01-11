class notifications {
	constructor(options) {
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
		this.notifyId = "notification-" + this.count;

		if (typeof this.defaults.onBeforeOpen === 'function') {
			this.defaults.onBeforeOpen.call(this);
		}

		this._buildOut.call(this);

		setTimeout(() => {
			this.container.classList.add(this.classes.active);
			this.container.setAttribute('id', notifyId);

			if (typeof this.defaults.onOpen === 'function') {
				this.defaults.onOpen.call(this);
			}
		}, 100);

		if (this.defaults.timeoutClose === true && this.defaults.timeout > 0) {
			setTimeout(() => {
				this.close(notifyId);
			}, this.defaults.timeout);
		}

		this._attachEvents();
	}

	_close(notifyId) {
		let notification = document.getElementById(notifyId);

		if (notification) {
			if (typeof this.defaults.onBeforeClose === 'function') {
				this.defaults.onBeforeClose.call(this);
			}

			notification.classList.remove(this.classes.active);

			if (typeof this.defaults.onClose === 'function') {
				this.defaults.onClose.call(this);
			}
			
			setTimeout(() => {
				notification.parentNode.removeChild(notification);
			}, 600);

			return true;
		} else {
			return false;
		}
	}

	_buildOut() {
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

			case "none":
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
					this.container.style.bottom = 20 + "px";
					break;

				default:
					this.container.style.right = 20 + "px";				
			}
		} 
	}

	_attachEvents() {
		let keyHandler = this._keyHandler.bind(this);

		if (this.defaults.requiredAction === false) {
			if (this.defaults.clickOutsideToClose === true) {
				let documentClickHandler = (evt) => {
					if (evt.target.parentNode !== this.container && this.container.classList.contains(this.classes.active)) {
						this.close(this.notifyId);

						setTimeout(() => {
							document.removeEventListener('click', documentClickHandler);
						}, 50);
					}
				};

				document.addEventListener('click', documentClickHandler);
			}
		} else {

		}

		if (this.defaults.keyActions === true) {
			this.container.addEventListener('keydown', keyHandler);
		}
	}

	_keyHandler(e) {
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
}

export default notifications