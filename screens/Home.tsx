import React, { useEffect } from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";
import { useSelector } from "react-redux";
import useTodayForecast from "../hooks/useTodayForecast";
import DailyForecast from "../components/DailyForecast";
import CurrentWeather from "../components/CurrentWeather";

export default function Home() {
	const location = useSelector(
		({ currentLocation }: any) =>
			currentLocation?.name + ", " + currentLocation?.state
	);

	return (
		<View style={tailwind("flex-1 pt-20")}>
			<View style={tailwind("px-6 pb-8")}>
				<Text style={tailwind("text-2xl")}>{location}</Text>
			</View>
			<CurrentWeather />
			<DailyForecast />
		</View>
	);
}
