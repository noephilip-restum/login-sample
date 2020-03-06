import { NotificationManager } from 'react-notifications';
import validate from '../../utils/validate';
import { post } from '../../utils/api';
import { initialState } from '../reducers/signin_reducer';
import Cookies from 'js-cookie';

export const handleInput = (e, dispatchSignIn) => {
	const { name, value } = e.target;
	dispatchSignIn({ type: 'FIELD', fieldName: name, payload: value });
};

export const handleSubmit = (
	event,
	stateSignIn,
	dispatchSignIn,
	history,
	types
) => {
	event.preventDefault();

	const errors = validate(stateSignIn, types);

	dispatchSignIn({ type: 'VALIDATE', payload: { errors, isLoading: true } });

	if (Object.keys(errors).length === 0) {
		let ENDPOINT = types === 'sign-in' ? '/login' : '/users';
		setTimeout(() => {
			post(ENDPOINT, stateSignIn)
				.then(res => {
					localStorage.setItem('notification', 'Successfully Signed In!');
					Cookies.set('token', res.data.accessToken);
					history.push('/main-page');
				})
				.catch(error => {
					types === 'sign-in' && NotificationManager.error(error.response.data);
					dispatchSignIn({
						type: 'VALIDATE',
						payload: { errors, isLoading: false }
					});
				});
		}, 1000);
	} else {
		dispatchSignIn({ type: 'VALIDATE', payload: { errors, isLoading: false } });
	}
};

export const handleReset = dispatchSignIn => {
	dispatchSignIn({
		type: 'RESET',
		payload: initialState
	});
};
