import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function PrivateRoutes({ component: Component }) {
	const token = Cookies.get('token');
	return (
		<Route
			render={props =>
				token ? <Component {...props} /> : <Redirect to="/sign-in" />
			}
		/>
	);
}
