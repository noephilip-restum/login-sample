export const initialState = {
	formState: {
		email: '',
		name: '',
		password: ''
	},
	hasAgreed: false,
	hasLoggedIn: false,
	errors: [],
	isLoading: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FIELD': {
			return {
				...state,
				[action.fieldName]: action.payload
			};
		}
		case 'VALIDATE': {
			return {
				...state,
				errors: action.payload.errors,
				isLoading: action.payload.isLoading
			};
		}
		case 'LOGIN': {
			return {
				...state,
				hasLoggedIn: action.payload
			};
		}
		case 'RESET': {
			return action.payload;
		}

		default:
			return state;
	}
};
