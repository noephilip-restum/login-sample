import React, { useEffect } from 'react';
import {
	NotificationContainer,
	NotificationManager
} from 'react-notifications';

// import { Context } from '../../contexts';
// import { post } from '../../utils/api';

export default function MainPages({ history }) {
	const notification = localStorage.getItem('notification');
	// const { accountState } = useContext(Context);

	useEffect(() => {
		if (notification) {
			NotificationManager.success(notification);
			localStorage.removeItem('notification');
		}
	}, [notification]);

	return (
		<>
			{/* <h1>Hello {accountState.db_profile.name}!</h1> */}
			<NotificationContainer />
		</>
	);
}
