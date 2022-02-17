import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import ProfileScreen from "../screens/Profile";
import ListsScreen from "../screens/Lists";
import TopicsScreen from "../screens/Topics";
import BookmarksScreen from "../screens/Bookmarts";
import MomentsScreen from "../screens/Moments";
import PurchasesScreen from "../screens/Purchases";
import MonetizationScreen from "../screens/Monetization";
import HomeScreen from "../screens/Home";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
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
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image
                source={require("../assets/pic/Gut.jpg")}
                style={{ height: 40, width: 40, borderRadius: 30, margin: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Lists" component={ListsScreen} />
      <Drawer.Screen name="Topics" component={TopicsScreen} />
      <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
      <Drawer.Screen name="Moments" component={MomentsScreen} />
      <Drawer.Screen name="Purchases" component={PurchasesScreen} />
      <Drawer.Screen name="Monetization" component={MonetizationScreen} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
