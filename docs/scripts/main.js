

import { menuComponent } from './components/menu'
import notificationsComponent from './components/notifications'
import { tooltipComponent } from './components/tooltip'

function init() {
	const mobileMenuTrigger = document.querySelector('.nav-menu button');
	const mobileMenu = document.querySelector('.mobile-menu-list');

	if (window.location.href.indexOf('notifications') != -1) {
		notificationsComponent();
	} else if (window.location.href.indexOf('menu') != -1) {
		menuComponent();
	} else if (window.location.href.indexOf('tooltip') != -1) {
		tooltipComponent();
	}

	function toggleMenu() {
		if (mobileMenu.classList.contains('mobile-open')) {
			mobileMenu.classList.remove('mobile-open');
			mobileMenuTrigger.classList.remove('mobile-open');
		} else {
			mobileMenuTrigger.classList.add('mobile-open');

			setTimeout(() => {
				mobileMenu.classList.add('mobile-open');
			}, 700);
		}
	}

	mobileMenuTrigger.addEventListener('click', toggleMenu);
}

init();
