import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Home";
import LoginScreen from "./Login";
import ProfileScreen from "./Profile";
import TweetDetailScreen from "./TweetDetail";

const Stack = createNativeStackNavigator();

function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="TweetDetail" component={TweetDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;
