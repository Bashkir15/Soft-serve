import s from '../../../dist/soft-serve'

function notificationsComponent() {

	var notificationContent1 = document.getElementById('notification-1');
	var notificationContent2 = document.getElementById('notification-2');
	var notificationContent3 = document.getElementById('notification-3');
	var notificationContent4 = document.getElementById('notification-4');
	var notificationContent5 = document.getElementById('notification-5');
	var notificationTrigger1 = document.getElementById('notification-trigger-1');
	var notificationTrigger2 = document.getElementById('notification-trigger-2');
	var notificationTrigger3 = document.getElementById('notification-trigger-3');
	var notificationTrigger4 = document.getElementById('notification-trigger-4');
	var notificationTrigger5 = document.getElementById('notification-trigger-5');
	var notificationTrigger6 = document.getElementById('notification-trigger-6');

	var notification1 = new s.notifications({
		content: notificationContent1
	});

	var notification2 = new s.notifications({
		content: `<h2 class='notification-title'>I'm a title!</h2><p class='notification-text'>I'm some text!</p>`
	});

	var notification3 = new s.notifications({
		content: notificationContent2,
		posY: 'bottom',
		posX: 'left'
	});

	var notification4 = new s.notifications({
		content: notificationContent3,
		posY: 'top',
		posX: 'right'
	});

	var notification5 = new s.notifications({
		content: notificationContent4,
		posY: 'top',
		posX: 'left'
	});

	var notification6 = new s.notifications({
		aligned: false
	});

	var scroller = new s.smoothScroll();

	notificationTrigger1.addEventListener('click', notification1.open);
	notificationTrigger2.addEventListener('click', notification2.open);
	notificationTrigger3.addEventListener('click', notification3.open);
	notificationTrigger4.addEventListener('click', notification4.open);
	notificationTrigger5.addEventListener('click', notification5.open);
	notificationTrigger6.addEventListener('click', notification6.open);
}

export default notificationsComponent