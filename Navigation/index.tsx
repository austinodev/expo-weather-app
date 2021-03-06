import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";

const Stack = createStackNavigator();

function MainNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode={"none"}>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default MainNavigation;
