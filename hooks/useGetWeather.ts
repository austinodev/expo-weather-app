import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetWeather(
	latitude: number | null,
	longitude: number | null
) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log(latitude, longitude);
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=c80d1ad5bfd728aa8b72081cc75ad705`
			)
			.then((obj) => setData(obj.data))
			.catch((error) => console.log(error.message));
	}, [latitude, longitude]);

	return { data, loading };
}
