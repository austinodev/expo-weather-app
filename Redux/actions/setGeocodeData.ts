export default function setGeocodeData(data: Object) {
	return async (dispatch: any) => {
		dispatch({
			type: "SET_CURRENT_LOCATION",
			payload: data
		});
	};
}
