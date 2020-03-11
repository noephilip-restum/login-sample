import { NotificationManager } from 'react-notifications';
import validate from '../../utils/validate';
import { post } from '../../utils/api';
import { initialState } from '../reducers/login_reducer';
import Cookies from 'js-cookie';

export const handleInput = (e, dispatchSignIn) => {
	const { name, value, type, checked } = e.target;
	let field = type === 'checkbox' ? checked : value;
	dispatchSignIn({ type: 'FIELD', fieldName: name, payload: field });
};

export const handleSubmit = (
	event,
	stateSignIn,
	dispatchSignIn,
	history,
	types
) => {
	event.preventDefault();

	const errors = validate(stateSignIn.formState, types);

	dispatchSignIn({ type: 'VALIDATE', payload: { errors, isLoading: true } });

	if (Object.keys(errors).length === 0) {
		let ENDPOINT = types === 'sign-in' ? '/api/login' : '/api/users';
		setTimeout(() => {
			post(ENDPOINT, stateSignIn.formState)
				.then(res => {
					localStorage.setItem('notification', 'Successfully Signed In!');
					Cookies.set('token', res.data.token);
					history.push('/main-page');
				})
				.catch(error => {
					NotificationManager.error(error.response.data);
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
