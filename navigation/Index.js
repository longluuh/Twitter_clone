import * as React from "react";
import BottomTabNavigator from "./BottomTabsNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NewTweetScreen from "../screens/NewTweetScreen";

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
        <Stack.Screen name="NewTweet" component={NewTweetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
