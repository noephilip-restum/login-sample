import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookies from 'js-cookie';

export default function PublicRoutes({ component: Component, ...rest }) {
	const token = cookies.get('token');
	return (
		<Route
			{...rest}
			render={props =>
				token ? <Redirect to="/main-page" /> : <Component {...props} />
			}
		/>
	);
}
