const currentLocationReducer = (state = null, action: any) => {
	switch (action.type) {
		case "SET_CURRENT_LOCATION":
			return action.payload;
		case "CLEAR_CURRENT_LOCATION":
			return null;
		default:
			return state;
	}
};

export default currentLocationReducer;
