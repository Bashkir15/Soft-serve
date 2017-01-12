import * as softServe from '../../dist/soft-serve'

describe('SoftserveNotifications', function() {
	describe('visibility function', function() {
		var parent;
		var element;

		before(function() {
			element = document.createElement('div');
			element.innerHTML = `<p>Tester</p>`;

			var notification = new softServe.notifications({
				content: element.innerHTML
			});
		});

		it('should start animating on open()', function(done) {
			expect($(element.parentElement)).to.not.have.class('notification-shown');
			notification.open();
			window.setTimeout(function() {
				expect($(element.parentElement)).to.have.class('notification-shown');

				var event = document.createEvent('HTMLEvents');
				event.initEvent('transitionend', true, true);
				element.dispatchEvent(event);
				done();
			}, 100);
		});

		it('should start animating on close()', function(done) {
			expect($(element.parentElement)).to.have.class('notification-shown');
			notification.close();
			window.setTimeout(function() {
				expect($(element.parentElement)).to.not.have.class('notification-shown');

				var event = document.createElement('HTMLEvents');
				event.initEvent('transitionend', true, true);
				event.dispatchEvent(event);
				done();
			}, 100);
		});

		it('should appear on click', function(done) {
			var test = document.createElement('div');
			test.innerHTML = `<button id='notificationtrigger>Click</button>`;
			document.body.appendChild(test);

			var event = document.createEvent('MouseEvents');
			event.initEvent('click', true, true);
			test.querySelector('#notificationtrigger').addEventListener('click', notification.open);
			test.querySelector('#notificationtrigger').dispatchEvent(event);
			window.setTimeout(function() {
				expect($(element.parentElement)).to.have.class('notification-shown');
				document.body.removeChild(test);
				done();
			}, 100);
		});
	});
});