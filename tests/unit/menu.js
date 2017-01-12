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

		it('shold start the hide animation on toggle() if visible', function(done) {
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

		it('should appear on click', function(done) {
			var test = document.createElement('div');
			test.innerHTML = `<button id='clickme'>Menu</button><ul class='soft-menu' for='clickme'><li class='soft-menu-item'>Stuff</li></ul>`;
			document.body.appendChild(test);

			var el = document.querySelector('ul');

			var newMenu = new softServe.menu({
				element: '.soft-menu'
			});

			var event = document.createElement('MouseEvents');
			event.initEvent('click', true, true);
			test.querySelector('#clickme').dispatchEvent(event);
			window.setTimeout(function() {
				expect($(el.parentElement)).to.have.class('soft-menu-visible');
				document.body.removeChild(test);
				done();
			}, 100);
		});	
	});
});