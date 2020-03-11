import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../contexts';
import Login from './login';
import { NotificationContainer } from 'react-notifications';

export default function SignUpForm({ history }) {
	const { stateSignIn, dispatchSignIn, logInFunction } = useContext(Context);
	const { email, name, password, hasAgreed, errors, isLoading } = stateSignIn;
	const { handleInput, handleSubmit, handleReset } = logInFunction;

	return (
		<Login>
			<NotificationContainer />
			<div className="FormCenter">
				<form
					className="FormFields"
					onSubmit={e =>
						handleSubmit(e, stateSignIn, dispatchSignIn, history, 'sign-up')
					}
				>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="name">
							Full Name
						</label>
						<input
							type="text"
							id="name"
							className="FormField__Input"
							placeholder="Enter your full name"
							name="name"
							value={name}
							onChange={e => handleInput(e, dispatchSignIn)}
						/>
						<br />
						<small style={{ color: 'red' }}>{errors.name}</small>
					</div>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="FormField__Input"
							placeholder="Enter your password"
							name="password"
							value={password}
							onChange={e => handleInput(e, dispatchSignIn)}
						/>
						<br />
						<small style={{ color: 'red' }}>{errors.password}</small>
					</div>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="email">
							E-Mail Address
						</label>
						<input
							type="text"
							id="email"
							className="FormField__Input"
							placeholder="Enter your email"
							name="email"
							value={email}
							onChange={e => handleInput(e, dispatchSignIn)}
						/>
						<br />
						<small style={{ color: 'red' }}>{errors.email}</small>
					</div>

					<div className="FormField">
						<label className="FormField__CheckboxLabel">
							<input
								className="FormField__Checkbox"
								type="checkbox"
								name="hasAgreed"
								value={hasAgreed}
								onChange={e => handleInput(e, dispatchSignIn)}
							/>{' '}
							I agree all statements in{' '}
							<p className="FormField__TermsLink">terms of service</p>
						</label>
					</div>

					<div className="FormField">
						<button
							className="FormField__Button mr-20"
							style={{ marginRight: '20px' }}
						>
							{isLoading ? 'Loading ...' : 'Sign Up'}
						</button>
						<Link
							to="/sign-in"
							className="FormField__Link"
							onClick={() => handleReset(dispatchSignIn)}
						>
							I'm already member
						</Link>
					</div>
				</form>
			</div>
		</Login>
	);
}
