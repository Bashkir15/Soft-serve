

import { menuComponent } from './components/menu'
import notificationsComponent from './components/notifications'
import { tooltipComponent } from './components/tooltip'

if (window.location.href.indexOf('notifications') != -1) {
	notificationsComponent();
} else if (window.location.href.indexOf('menu') != -1) {
	menuComponent();
} else if (window.location.href.indexOf('tooltip') != -1) {
	tooltipComponent();
}

//let modalTrigger1 = document.getElementById('modal-trigger');
//let modalContent1 = document.getElementById('modal-component');

//let modal1 = new modal({
//	content: modalContent1
//});

//modalTrigger1.addEventListener('click', modal1.open, false);