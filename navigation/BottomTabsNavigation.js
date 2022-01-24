import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/Home";
import TweetDetailScreen from "../screens/TweetDetail";
import SearchScreen from "../screens/Search";
import NontificationScreen from "../screens/Nontification";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";

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
            headerTitle: () => (
              <Ionicons name="ios-logo-twitter" size={30} color="dodgerblue" />
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
            headerTitle: () => (
              <Ionicons name="ios-logo-twitter" size={30} color="black" />
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
          component={TweetDetailScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="mail" size={24} color="dodgerblue" />
            ),
            headerTitle: () => (
              <Ionicons name="ios-logo-twitter" size={30} color="dodgerblue" />
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
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    // get the current user
    const fetchUser = async () => {
      const userInfo = await awsAmplify.Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!userInfo) {
        return;
      }

      try {
        const userData = await awsAmplify.API.graphql(
          awsAmplify.graphqlOperation(setUser, { id: userInfo.attributes.sub })
        );
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Ionicons
              name={"logo-twitter"}
              size={30}
              color={Colors.light.tint}
              style={{ marginHorizontal: "40%", color: "dodgerblue" }}
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              name={"star-four-points-outline"}
              size={30}
              color={Colors.light.tint}
              style={{ color: "dodgerblue", marginHorizontal: 15 }}
            />
          ),
          headerLeft: () => <ProfilePicture size={40} image={user?.image} />,
        }}
      />
    </TabOneStack.Navigator>
  );
}

export default BottomTabNavigator;
