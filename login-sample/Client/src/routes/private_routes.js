import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookies from 'js-cookie';

export default function PrivateRoutes({ component: Component, ...rest }) {
	const token = cookies.get('token');
	return (
		<Route
			{...rest}
			render={props =>
				token ? <Component {...props} /> : <Redirect to="/sign-in" />
			}
		/>
	);
}
