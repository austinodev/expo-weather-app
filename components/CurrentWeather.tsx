import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import useTodayForecast from "../hooks/useTodayForecast";
import tailwind from "tailwind-rn";
import moment from "moment";
import dayjs from "dayjs";

export default function CurrentWeather() {
	const { weather } = useTodayForecast();
	const [currentWeather, setCurrentWeather] = useState<any>({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const current = weather.filter((item: any) =>
			dayjs(dayjs.unix(item.dt)).isBetween(dayjs(), dayjs().endOf("day"))
		);
		setCurrentWeather(current[0]);
		if (current.length) {
			setLoading(false);
		}
	}, [currentWeather]);

	return (
		<>
			{loading ? (
				<ActivityIndicator />
			) : (
				<View
					style={tailwind(
						"flex-col bg-blue-400 rounded-2xl justify-between mx-6 mb-8 justify-center"
					)}
				>
					<View
						style={tailwind(
							"flex-col py-10 px-4 w-full border-b-2 border-blue-200"
						)}
					>
						<Image
							style={{
								width: 80,
								height: 80,
								alignSelf: "center"
							}}
							source={{
								uri: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
							}}
						/>
						<Text
							style={tailwind("text-2xl text-white text-center")}
						>
							{currentWeather.weather[0].main}
						</Text>
						<Text
							style={[
								tailwind("text-center text-white"),
								{ fontSize: 80 }
							]}
						>
							{Math.round(currentWeather?.main.temp)}
							{"°"}
						</Text>
					</View>
					<View style={tailwind("flex-row justify-between")}>
						<View style={tailwind("flex-col border-r w-1/2")}>
							<View>
								<Text>Wind</Text>
								<Text>
									{Math.round(
										currentWeather?.main.feels_like
									)}
								</Text>
							</View>
							<View>
								<Text>
									{Math.round(
										currentWeather?.main.feels_like
									)}
								</Text>
							</View>
						</View>
						<View style={tailwind("flex-col w-1/2")}>
							<View>
								<Text>FEELS LIKE</Text>
								<Text>
									{Math.round(
										currentWeather?.main.feels_like
									)}
								</Text>
							</View>
							<View>
								<Text>
									{Math.round(
										currentWeather?.main.feels_like
									)}
								</Text>
							</View>
						</View>
					</View>
				</View>
			)}
		</>
	);
}
