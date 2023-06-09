import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import {
	useFonts as useOswald,
	Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Test from "./src/features/account/screens/test";

const Tab = createBottomTabNavigator();
export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});

	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) return null;

	return (
		<>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarActiveTintColor: theme.colors.brand.primary,

							tabBarInactiveTintColor: "black",

							tabBarIcon: ({ focused, color, size }) => {
								let iconName;

								switch (route.name) {
									case theme.constants.screens[0]:
										iconName = focused
											? "ios-restaurant"
											: "ios-restaurant-outline";
										break;

									case theme.constants.screens[1]:
										iconName = focused ? "map" : "map-outline";
										break;

									case theme.constants.screens[2]:
										iconName = focused
											? "ios-person-circle"
											: "ios-person-circle-outline";
										break;
								}
								return (
									<Ionicons
										name={iconName}
										color={color}
										size={size}
									/>
								);
							},
						})}>
						<Tab.Screen
							name={theme.constants.screens[0]}
							component={RestaurantsScreen}
						/>
						<Tab.Screen
							name={theme.constants.screens[1]}
							component={RestaurantsScreen}
						/>
						<Tab.Screen
							name={theme.constants.screens[2]}
							component={Test}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</>
	);
}
