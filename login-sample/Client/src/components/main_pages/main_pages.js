import React, { useEffect } from 'react';
import {
	NotificationContainer,
	NotificationManager
} from 'react-notifications';

import Templates from '../templates';
import Chat from '../chat/chat';

export default function MainPages() {
	const notification = localStorage.getItem('notification');

	useEffect(() => {
		if (notification) {
			NotificationManager.success(notification);
			localStorage.removeItem('notification');
		}
	}, [notification]);

	return (
		<>
			<Templates>
				<Chat />
			</Templates>
			<NotificationContainer />
		</>
	);
}
