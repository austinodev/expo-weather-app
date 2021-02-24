import axios from "axios";
import { useEffect, useState } from "react";
import useUserLocation from "./useUserLocation";

export default function useGetForecast() {
	const { isLocationEnabled, latitude, longitude } = useUserLocation();
	const [data, setData] = useState<Array<Object>>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect((): any => {
		if (latitude && longitude) {
			fetchWeatherData().catch();
		}
		return () => {
			if (latitude && longitude) {
				fetchWeatherData().catch();
			}
		};
	}, [isLocationEnabled, latitude, longitude]);

	async function fetchWeatherData() {
		try {
			const response = await axios.get(
				`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=16a945ccf41ca813732b1a89c95894e5`
			);
			setData(response.data.list);
			setLoading(false);
		} catch (e) {
			throw e.message;
		}
	}

	return { data, loading };
}
