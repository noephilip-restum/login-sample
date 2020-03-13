import React, { useEffect, useContext } from 'react';

import {
	NotificationContainer,
	NotificationManager
} from 'react-notifications';

import io from 'socket.io-client';
import { Context } from '../../contexts';

import Templates from '../templates';
import Chat from '../chat/chat';
import jwtToken from '../../utils/jwtToken';

let socket;
export default function MainPages() {
	const ENDPOINT = 'localhost:4000';
	const account = jwtToken();
	const notification = localStorage.getItem('notification');
	const [online, setOnline] = React.useState(null);

	useEffect(() => {
		if (notification) {
			NotificationManager.success(notification);
			localStorage.removeItem('notification');
		}
	}, [notification]);

	useEffect(() => {
		socket = io(ENDPOINT);

		socket.emit('loggedIn', { account, room: 'hasLoggedIn' });
	}, [ENDPOINT]);

	useEffect(() => {
		socket.on('online', users => {
			console.log(users);
		});
		// return () => {
		// socket.emit('disconnect');
		// 	socket.off();
		// };
	}, [online]);

	return (
		<>
			{console.log(online)}
			<Templates>
				<Chat />
			</Templates>
			<NotificationContainer />
		</>
	);
}
