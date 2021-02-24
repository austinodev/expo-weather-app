import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import useUserLocation from "../hooks/useUserLocation";
import useGetForecast from "../hooks/useGetForecast";
import MainNavigation from "../Navigation";
import tailwind from "tailwind-rn";
import useReverseGeocode from "../hooks/useReverseGeocode";
import setGeocodeData from "../Redux/actions/setGeocodeData";
import setWeatherData from "../Redux/actions/setWeatherData";

export default function Loading() {
	const dispatch = useDispatch();

	const { geoData } = useReverseGeocode();
	const { data, loading } = useGetForecast();

	useEffect(() => {
		if (geoData && data.length) {
			dispatch(setGeocodeData(geoData[0]));
			dispatch(setWeatherData(data));
		}
	}, [loading]);

	return (
		<>
			{loading ? (
				<View style={tailwind("flex-1 justify-center text-center")}>
					<Text style={tailwind("text-center")}>Loading...</Text>
					<ActivityIndicator size="large" color="#0000ff" />
				</View>
			) : (
				<MainNavigation />
			)}
		</>
	);
}
