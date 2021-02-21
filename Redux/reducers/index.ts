import { combineReducers } from "@reduxjs/toolkit";
import locationsReducer from "./locations";
import currentLocationReducer from "./currentLocation";

export default combineReducers({
	locations: locationsReducer,
	currentLocation: currentLocationReducer
});
