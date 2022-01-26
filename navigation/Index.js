import * as React from "react";
import BottomTabNavigator from "./BottomTabsNavigation";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewTweetScreen from "../screens/NewTweetScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import { ColorSchemeName } from "react-native";

const Stack = createStackNavigator();
export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="NewTweet" component={NewTweetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
