import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import tailwind from "tailwind-rn";
import Redux from "./Redux";
import Loading from "./screens/Loading";

export default function App() {
	return (
		<PersistGate loading={null} persistor={Redux.persistor}>
			<Provider store={Redux.store}>
				<View style={tailwind("flex-1 bg-gray-200")}>
					<StatusBar style="auto" />
					<Loading />
				</View>
			</Provider>
		</PersistGate>
	);
}
