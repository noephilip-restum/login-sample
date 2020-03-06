import React, { useReducer, createContext } from 'react';

//REDUCER
import * as AccountReducer from './reducers/account_reducers';
import * as SignInReducer from './reducers/signin_reducer';

//FUNCTIONS
import * as logInFunction from './functions/login_functions';

//CONTEXT
const Context = createContext();

function ContextState({ children }) {
	const [stateAccount, dispatchAccount] = useReducer(
		AccountReducer.reducer,
		AccountReducer.initialState
	);
	const [stateSignIn, dispatchSignIn] = useReducer(
		SignInReducer.reducer,
		SignInReducer.initialState
	);

	return (
		<Context.Provider
			value={{
				stateAccount,
				dispatchAccount,
				stateSignIn,
				dispatchSignIn,
				logInFunction
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, ContextState };
