import React from "react";
import { View, Text, Image } from "react-native";
import useTodayForecast from "../hooks/useTodayForecast";
import tailwind from "tailwind-rn";
import moment from "moment";

export default function DailyForecast() {
	const { weather } = useTodayForecast();

	return (
		<View
			style={tailwind(
				"flex-row justify-between py-6 px-4 bg-white rounded-lg mx-6"
			)}
		>
			{weather.map((item: any) => (
				<View key={item.dt} style={tailwind("flex-col")}>
					<Text>
						{Math.round(item.main.temp)}
						{"°F"}
					</Text>
					<Image
						style={{ width: 40, height: 40 }}
						source={{
							uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
						}}
					/>
					<Text>{moment.unix(item.dt).format("ha")}</Text>
				</View>
			))}
		</View>
	);
}
