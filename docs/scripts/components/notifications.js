import s from '../../../dist/soft-serve'

function notificationsComponent() {

	var notificationContent1 = document.getElementById('notification-1');
	var notificationTrigger1 = document.getElementById('notification-trigger-1');

	var notification1 = new s.notifications({
		content: notificationContent1
	});

	notificationTrigger1.addEventListener('click', notification1.open);
}

export default notificationsComponent