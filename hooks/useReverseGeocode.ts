import axios from "axios";
import { useEffect, useState } from "react";
import useUserLocation from "./useUserLocation";

export default function useReverseGeocode() {
	const { isLocationEnabled, latitude, longitude } = useUserLocation();
	const [data, setData] = useState<Array<Object>>([]);

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
				`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=16a945ccf41ca813732b1a89c95894e5`
			);
			setData(response.data);
		} catch (e) {
			throw e.message;
		}
	}

	return { geoData: data };
}
