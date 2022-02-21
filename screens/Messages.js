import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import NewTweetButton from "../components/NewTweetButton";
import newApiRequestUser from "../data/ApiServiceUser";
import { DrawerContent } from "./DrawerContent";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

function MessScreenDrawer() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Messages Screen</Text>
      <NewTweetButton />
    </View>
  );
}

const MessagesScreen = () => {
  const [twitterUser, setTwitterUser] = React.useState(null);
  React.useEffect(() => {
    newApiRequestUser({}).then((response) => {
      setTwitterUser(response.data);
    });
  }, []);
  if (!twitterUser) return null;
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
        component={MessScreenDrawer}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: () => (
            <Text
              style={{
                marginHorizontal: "32%",
                color: "black",
                fontWeight: "bold",
                fontSize: 19,
              }}
            >
              Messages
            </Text>
          ),
          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={30}
              color={Colors.light.tint}
              style={{ color: "black", marginHorizontal: 15 }}
            />
          ),
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
              <Image
                source={{ uri: twitterUser.data.profile_image_url }}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 30,
                  margin: 15,
                }}
              />
            </TouchableWithoutFeedback>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};
export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    width: "50%",
    height: 40,
    margin: 22,
    color: "black",
    borderWidth: 0.9,
    borderRadius: 50,
    textAlign: "center",
  },
});
