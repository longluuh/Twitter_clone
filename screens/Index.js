import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "./Home";
import ProfileScreen from "./Profile";
import TweetDetailScreen from "./TweetDetail";
import SearchScreen from "./Search";

const Tab = createBottomTabNavigator();

function Index() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "dodgerblue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home-outline" size={24} color="dodgerblue" />
            ),
            headerTitle: () => (
              <Ionicons name="ios-logo-twitter" size={30} color="dodgerblue" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={24} color="dodgerblue" />
            ),
            headerTitle: () => (
              <Ionicons name="ios-logo-twitter" size={30} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="md-information-circle-outline"
                size={24}
                color="dodgerblue"
              />
            ),
          }}
        />
        <Tab.Screen
          name="TweetDetail"
          component={TweetDetailScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="twitter-retweet"
                size={24}
                color="dodgerblue"
              />
            ),
            headerTitle: () => (
              <Ionicons name="ios-logo-twitter" size={30} color="dodgerblue" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Index;
