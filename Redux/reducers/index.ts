import { combineReducers } from "@reduxjs/toolkit";
import locationsReducer from "./locations";
import currentLocationReducer from "./currentLocation";
import weatherReducer from "./weatherReducer";

export default combineReducers({
	locations: locationsReducer,
	currentLocation: currentLocationReducer,
	weather: weatherReducer
});
