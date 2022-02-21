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

function NotifiScreenDrawer() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nontification Screen</Text>
      <NewTweetButton />
    </View>
  );
}

const NontificationScreen = () => {
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
        component={NotifiScreenDrawer}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: () => (
            <Text
              style={{
                marginHorizontal: "27%",
                color: "black",
                fontWeight: "bold",
                fontSize: 19,
              }}
            >
              Nontifications
            </Text>
          ),
          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={30}
              color={Colors.light.tint}
              style={{ color: "black", marginRight: 15 }}
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
export default NontificationScreen;

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
