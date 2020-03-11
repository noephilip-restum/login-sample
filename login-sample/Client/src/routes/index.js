import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignInForm from '../components/landing_pages/signin_form';
import SignUpForm from '../components/landing_pages/signup_form';
import MainPages from '../components/main_pages/main_pages';
import NotFound from '../components';
import PrivateRoutes from './private_routes';
import PublicRoutes from './public_routes';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<PublicRoutes exact path="/" component={SignUpForm} />
				<PublicRoutes exact path="/sign-in" component={SignInForm} />
				<PrivateRoutes exact path="/main-page" component={MainPages} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}
