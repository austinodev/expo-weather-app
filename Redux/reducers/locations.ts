const locationsReducer = (state = null, action: any) => {
	switch (action.type) {
		case "SET_LOCATIONS":
			return action.payload;
		case "CLEAR_LOCATIONS":
			return null;
		default:
			return state;
	}
};

export default locationsReducer;
