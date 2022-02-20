import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, TouchableWithoutFeedback } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import ProfileScreen_ios from "../screens/Profile_ios";
import ListsScreen from "../screens/Lists";
import TopicsScreen from "../screens/Topics";
import BookmarksScreen from "../screens/Bookmarts";
import MomentsScreen from "../screens/Moments";
import PurchasesScreen from "../screens/Purchases";
import MonetizationScreen from "../screens/Monetization";
import HomeScreen from "../screens/Home";
import { DrawerContent } from "../screens/DrawerContent";
import ProfileScreenAndroid from "../screens/Profile_android";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "70%",
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerShown: true,
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
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
              <Image
                source={require("../assets/pic/Gut.jpg")}
                style={{ height: 40, width: 40, borderRadius: 30, margin: 15 }}
              />
            </TouchableWithoutFeedback>
          ),
        })}
      />
      <Drawer.Screen name="Profile_ios" component={ProfileScreen_ios} />
      <Drawer.Screen name="ProfileAndroid" component={ProfileScreenAndroid} />
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
