class smoothScroll {
	constructor(options) {
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

	_applySettings(options) {
		if (typeof options === 'object') {
			for (var i in options) {
				if (options.hasOwnProperty(i)) {
					this.defaults[i] = options[i];
				}
			}
		}
	}

	_init() {
		let handleClickEvent = this._handleClickEvent.bind(this);

		this.clickTargets = document.querySelectorAll(this.defaults.clickTargets);

		Array.prototype.map.call(this.clickTargets, (item) => {
			item.addEventListener('click', () => {
				this._handleClickEvent(item);
			});
		}); 
	}

	_handleClickEvent(item) {

		let step = this._step.bind(this);

		this.defaults.start = Date.now();
		this.defaults.factor = 0;

		if (this.defaults.timer) {
			clearInterval(this.defaults.timer);
		}

		this.defaults.timer = setInterval(() => {
			step(item)},
			10
		);


		return this.defaults.timer;
	}

	_step(item) {
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
}

export default smoothScroll