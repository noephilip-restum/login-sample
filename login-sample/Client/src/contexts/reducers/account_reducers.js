export const initialState = [];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USERS': {
			return [...state, action.payload];
		}
		default:
			return state;
	}
};
