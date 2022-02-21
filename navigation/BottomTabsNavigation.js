import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../screens/Search";
import NontificationScreen from "../screens/Nontification";
import MessagesScreen from "../screens/Messages";
import NewTweetScreen from "../screens/NewTweetScreen";
import NewCommentScreen from "../screens/NewCommentScreen";
import NewRetweetScreen from "../screens/NewRetweetScreen";

import DrawerNavigator from "./DrawerNavigator";
import DrawerNavigatorSearchScreen from "./DrawerNavigatorsSearchScreen";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "dodgerblue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home-outline" size={24} color="dodgerblue" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={24} color="dodgerblue" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Nontification"
          component={NontificationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="bell" size={24} color="dodgerblue" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Mail"
          component={MessagesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="mail" size={24} color="dodgerblue" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

// Each tab has its own navigation stack
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function HomeNavigator() {
  // const [user, setUser] = React.useState(null);
  // React.useEffect(() => {
  //   // get the current user
  //   const fetchUser = async () => {
  //     const userInfo = await awsAmplify.Auth.currentAuthenticatedUser({
  //       bypassCache: true,
  //     });
  //     if (!userInfo) {
  //       return;
  //     }

  //     try {
  //       const userData = await awsAmplify.API.graphql(
  //         awsAmplify.graphqlOperation(setUser, { id: userInfo.attributes.sub })
  //       );
  //       if (userData) {
  //         setUser(userData.data.getUser);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen name="HomeScreen" component={DrawerNavigator} />
      <TabOneStack.Screen name="NewTweet" component={NewTweetScreen} />
      <TabOneStack.Screen name="NewComment" component={NewCommentScreen} />
      <TabOneStack.Screen name="NewRetweet" component={NewRetweetScreen} />
    </TabOneStack.Navigator>
  );
}

function SearchNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{ headerShown: false }}>
      <TabOneStack.Screen
        name="SearchScreen"
        component={DrawerNavigatorSearchScreen}
      />
    </TabOneStack.Navigator>
  );
}

export default BottomTabNavigator;
