import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);

export default function useTodayForecast() {
	const weatherArr = useSelector(({ weather }: any) => weather);
	const [weather, setWeather] = useState<Array<Object>>([]);

	useEffect((): any => {
		const todayForecast = weatherArr.filter((x: any) =>
			dayjs(dayjs(dayjs.unix(x.dt))).isBetween(
				dayjs().startOf("day"),
				dayjs().endOf("day")
			)
		);
		setWeather(todayForecast);
	}, []);

	return { weather };
}
