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
		})
	})
})