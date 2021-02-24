import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function useUserLocation() {
	const [isLocationEnabled, setIsLocationEnabled] = useState<boolean | null>(
		null
	);
	const [turnedOnLocation, setTurnedOnLocation] = useState<boolean>(false);
	const [latitude, setLatitude] = useState<number | null>(null);
	const [longitude, setLongitude] = useState<number | null>(null);

	useEffect((): any => {
		checkLocation()
			.then((locationStatus) => {
				if (!locationStatus) {
					Location.requestPermissionsAsync().catch(
						(error) => error.message
					);
				}
				return Location.getCurrentPositionAsync().then((obj) => {
					const { coords } = obj;
					setLatitude(coords.latitude);
					setLongitude(coords.longitude);
					setTurnedOnLocation(true);
				});
			})
			.catch((error) => error.message);
		return () => checkLocation();
	}, [latitude, longitude, isLocationEnabled, turnedOnLocation]);

	async function checkLocation() {
		const checkLocationStatus = await Location.hasServicesEnabledAsync();
		setIsLocationEnabled(checkLocationStatus);
		return checkLocationStatus;
	}

	return { isLocationEnabled, longitude, latitude };
}
