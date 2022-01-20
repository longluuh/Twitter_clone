import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
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
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Profile") {
            }

            return <Ionicons name="ios-home-outline" size={24} color="black" />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="TweetDetail" component={TweetDetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Index;
