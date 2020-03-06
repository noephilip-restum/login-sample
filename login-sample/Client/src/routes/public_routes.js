import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function PublicRoutes({ component: Component }) {
	const token = Cookies.get('token');
	return (
		<Route
			render={props =>
				token ? <Redirect to="/main-page" /> : <Component {...props} />
			}
		/>
	);
}
