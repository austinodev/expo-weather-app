import React, { useEffect } from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";
import { useDispatch } from "react-redux";
import getWeatherData from "../Redux/actions/getWeatherData";
import useUserLocation from "../hooks/checkUserLocation";
import useGetWeather from "../hooks/useGetWeather";

export default function Home() {
	const dispatch = useDispatch();
	const { isLocationEnabled, latitude, longitude } = useUserLocation();
	const { data, loading } = useGetWeather(latitude, longitude);

	useEffect(() => {
		console.log(data);
	}, [isLocationEnabled, longitude, latitude]);

	return (
		<View style={tailwind("flex-1 pt-16")}>
			<View>
				<Text>
					Location enabled: {isLocationEnabled ? "True" : "False"}
				</Text>
			</View>
		</View>
	);
}
