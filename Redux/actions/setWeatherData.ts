export default function setWeatherData(data: Array<Object>) {
	return async (dispatch: any) => {
		dispatch({
			type: "SET_WEATHER",
			payload: data
		});
	};
}
