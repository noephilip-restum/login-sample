import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import Image from '../../images/background.svg';
import { Context } from '../../contexts';
// import LoginAuth from './LoginAuth';

export default function Login({ children }) {
	const { dispatchSignIn, logInFunction } = useContext(Context);
	const { handleReset } = logInFunction;

	return (
		<div className="login">
			<div className="App__Aside">
				<img src={Image} alt="" className="App__Aside_Image" />
			</div>
			<div className="App__Form">
				<div className="PageSwitcher">
					<NavLink
						to="/sign-in"
						activeClassName="PageSwitcher__Item--Active"
						className="PageSwitcher__Item"
						onClick={() => handleReset(dispatchSignIn)}
					>
						Sign In
					</NavLink>
					<NavLink
						exact
						to="/"
						activeClassName="PageSwitcher__Item--Active"
						className="PageSwitcher__Item"
						onClick={() => handleReset(dispatchSignIn)}
					>
						Sign Up
					</NavLink>
				</div>
				<div className="FormTitle">
					<NavLink
						to="/sign-in"
						activeClassName="FormTitle__Link--Active"
						className="FormTitle__Link"
						onClick={() => handleReset(dispatchSignIn)}
					>
						Sign In
					</NavLink>{' '}
					or{' '}
					<NavLink
						exact
						to="/"
						activeClassName="FormTitle__Link--Active"
						className="FormTitle__Link"
						onClick={() => handleReset(dispatchSignIn)}
					>
						Sign Up
					</NavLink>
				</div>

				{/* <LoginAuth /> */}
				{children}
			</div>
		</div>
	);
}
