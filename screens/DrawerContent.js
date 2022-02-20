import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import newApiRequestUser from "../data/ApiServiceUser";

export function DrawerContent(props) {
  const [twitterUser, setTwitterUser] = React.useState(null);
  React.useEffect(() => {
    newApiRequestUser({}).then((response) => {
      setTwitterUser(response.data);
    });
  }, []);
  if (!twitterUser) return null;

  const nameTweeter = twitterUser.data.name;
  const userNameTweeter = twitterUser.data.username;
  const followingTweeter = twitterUser.data.public_metrics.following_count;
  const followerTweeter = twitterUser.data.public_metrics.followers_count;

  return (
    <View style={{ flex: 1 }}>
      {/* User information */}
      <View style={styles.userInfoSection}>
        <View style={styles.topDrawerSection}>
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("ProfileAndroid");
            }}
          >
            <Avatar.Image
              source={{ uri: twitterUser.data.profile_image_url }}
              size={50}
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account-box-multiple-outline"
              size={26}
              color="grey"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Title style={styles.title}>{nameTweeter}</Title>
          <Caption style={styles.caption}>@{userNameTweeter}</Caption>
        </View>
        <View style={[styles.row, { marginBottom: 5 }]}>
          <View style={styles.section}>
            <Paragraph style={[styles.paragraph, styles.caption]}>
              {followingTweeter}
            </Paragraph>
            <Caption style={styles.caption}>Following</Caption>
          </View>
          <View style={styles.section}>
            <Paragraph style={[styles.paragraph, styles.caption]}>
              {followerTweeter}
            </Paragraph>
            <Caption style={styles.caption}>Follower</Caption>
          </View>
        </View>
      </View>
      {/* Navigation */}
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* Navigator */}
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="home" size={size} color={color} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("ProfileAndroid");
              }}
            />
            {/* <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Profile_ios"
              onPress={() => {
                props.navigation.navigate("Profile_ios");
              }}
            /> */}

            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="playlist-plus"
                  color={color}
                  size={size}
                />
              )}
              label="Lists"
              onPress={() => {
                props.navigation.navigate("Lists");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Topics"
              onPress={() => {
                props.navigation.navigate("Topics");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="bookmark-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate("Bookmarks");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="lightning-bolt-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Moments"
              onPress={() => {
                props.navigation.navigate("Moments");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <AntDesign name="shoppingcart" color={color} size={size} />
              )}
              label="Purchases"
              onPress={() => {
                props.navigation.navigate("Purchases");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="money-bill" color={color} size={size} />
              )}
              label="Monetization"
              onPress={() => {
                props.navigation.navigate("Monetization");
              }}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="rocket-launch-outline"
                  size={size}
                  color={color}
                />
              )}
              label="Twetter for Professionals"
              onPress={() => {}}
            />
          </Drawer.Section>
          <DrawerItem label="Settings and privacy" onPress={() => {}} />
          <DrawerItem label="Help Center" onPress={() => {}} />
        </View>
      </DrawerContentScrollView>

      {/* button exit */}
      <Drawer.Section style={styles.bottomDrawerSection}>
        {/* <DrawerItem
          icon={({ color, size }) => (
            <AntDesign name="logout" size={size} color={color} />
          )}
          label="Sign Out as"
          onPress={() => {}}
        /> */}
        <TouchableOpacity style={{ marginLeft: "5%" }}>
          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            size={26}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: "70%" }}>
          <MaterialCommunityIcons name="qrcode" size={24} color="black" />
        </TouchableOpacity>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  topDrawerSection: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
    marginRight: 10,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
    // backgroundColor: "dodgerblue",
    flexDirection: "row",
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
