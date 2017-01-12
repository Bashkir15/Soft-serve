import * as softServe from '../../dist/soft-serve'

describe('SoftserveMenu', function() {
	describe('visibility function', function() {
		var parent;
		var element;

		before(function() {
			parent = document.createElement('div');
			element = document.createElement('ul');
			element.classList.add('.test-element');
			parent.appendChild(element);
			var menu = new softServe.menu({
				element: '.test-element'
			});
		});

		it('should start animating on show()', function(done) {
			expect($(element.parentElement)).to.not.have.class('soft-menu-visible');
			menu.show();
			window.setTimeout(function() {
				expect($(element.parentElement)).to.have.class('soft-menu-visible');

				var event = document.createEvent('HTMLEvents');
				event.initEvent('transitionend', true, true);
				element.dispatchEvent(event);
				done();
			}, 100);
		});

		it('should start animating on hide()', function(done) {
			expect($(element.parentElement)).to.have.class('soft-menu-visible');
			menu.toggle();
			window.setTimeout(function() {
				expect($(element.parentElement)).to.not.have.class('soft-menu-visible');

				var event = document.createEvent('HTMLEvents');
				event.initEvent('transitionend', true, true);
				element.dispatchEvent(event);
				done();
			}, 100);
		});

		it('should start animating on toggle()', function(done) {
			expect($(element.parentElement)).to.not.have.class('soft-menu-visible');
			menu.toggle();
			window.setTimeout(function() {
				expect($(element.parentElement)).to.have.class('soft-menu-visible');

				var event = document.createEvent('HTMLEvents');
				event.initEvent('transitionend', true, true);
				element.dispatchEvent(event);
				done();
			}, 100);
		});
	});
});