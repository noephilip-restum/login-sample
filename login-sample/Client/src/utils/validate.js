import { get } from './api';

export default function Validate(value, type) {
	let error = {};

	if (type === 'sign-up') {
		if (!value.name) {
			error.name = 'Name is required';
		}

		if (!value.email) {
			error.email = 'Email Address is required';
		} else if (!/\S+@\S+\.\S+/.test(value.email)) {
			error.email = 'Email address is invalid';
		}

		if (!value.password) {
			error.password = 'Password is required';
		} else if (value.password.length < 10) {
			error.password = 'Password needs to be more than 10 characters';
		}

		get('/api/users').then(res =>
			res.data.map(user => {
				if (user.email === value.email) {
					error.email = 'Email is already exist';
				}
				return null;
			})
		);
	}

	if (type === 'sign-in') {
		if (!value.email) {
			error.email = 'Email Address is required';
		} else if (!/\S+@\S+\.\S+/.test(value.email)) {
			error.email = 'Email address is invalid';
		}

		if (!value.password) {
			error.password = 'Password is required';
		}
	}

	return error;
}
