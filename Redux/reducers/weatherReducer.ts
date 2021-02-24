const weatherReducer = (state = null, action: any) => {
	switch (action.type) {
		case "SET_WEATHER":
			return action.payload;
		case "CLEAR_WEATHER":
			return null;
		default:
			return state;
	}
};

export default weatherReducer;
