// animation profile
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import GetApitweets from "../components/Tweets/getApiTweets";
import newApiRequestUser from "../data/ApiServiceUser";
import ProfilePicture from "../components/ProfilePicture";

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

const nameTweet = "Long";
const userNameTweet = "Long77179183";
const countTweet = 10;
const followingTweeter = 28;
const followerTweeter = 2;

class ProfileScreenAndroid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp",
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: "clamp",
    });

    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5,
      ],
      extrapolate: "clamp",
    });
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
      outputRange: [0, 0, 1000],
      extrapolate: "clamp",
    });

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26,
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "dodgerblue",
            height: headerHeight,
            zIndex: headerZindex,
            elevation: headerZindex, //required for android
            alignItems: "center",
          }}
        >
          {/* Back button nothing*/}
          <View
            style={{
              zIndex: 2,
              position: "absolute",
              top: 10,
              left: 20,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="chevron-left" color="white" size={26} />
          </View>
          {/* Search button nothing*/}
          <View
            style={{
              zIndex: 2,
              position: "absolute",
              top: 10,
              right: 20,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              height: 35,
              width: 35,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="search" size={24} color="white" />
          </View>

          {/* Name + tweets count */}
          <Animated.View
            style={{
              zIndex: 2,
              position: "absolute",
              left: 0,
              right: 0,
              alignItems: "center",
              opacity: this.state.scrollY.interpolate({
                inputRange: [90, 110],
                outputRange: [0, 1],
              }),
              transform: [
                {
                  translateY: this.state.scrollY.interpolate({
                    inputRange: [90, 120],
                    outputRange: [30, 0],
                    extrapolate: "clamp",
                  }),
                },
              ],
            }}
          >
            {/* Back button */}
            <View
              style={{
                zIndex: 2,
                position: "absolute",
                top: 10,
                left: 20,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                height: 30,
                width: 30,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={() => {}}>
                <Feather name="chevron-left" color="white" size={26} />
              </TouchableOpacity>
            </View>

            {/* Search button */}
            <View
              style={{
                zIndex: 2,
                position: "absolute",
                top: 10,
                right: 20,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                height: 35,
                width: 35,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  alert("search");
                }}
              >
                <Ionicons name="search" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("onpress");
              }}
            >
              <Text style={[styles.textBanner, styles.username]}>
                {nameTweet}
              </Text>
            </TouchableOpacity>

            <Text style={[styles.textBanner, styles.tweetsCount]}>
              {countTweet} Tweets
            </Text>
          </Animated.View>
        </Animated.View>

        {/* Tweets/profile */}
        <ScrollView
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
            // { useNativeDriver: true }
          )}
        >
          {/* Profile user */}
          <View
            style={[
              styles.container,
              {
                paddingHorizontal: 20,
              },
            ]}
          >
            {/* profile picture user */}
            <Animated.View
              style={{
                height: profileImageHeight,
                width: profileImageHeight,
                borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
                borderColor: "white",
                borderWidth: 4,
                overflow: "hidden",
                marginTop: profileImageMarginTop,
                marginLeft: 10,
              }}
            >
              {/* <Image
                source={require("../assets/pic/Gut.jpg")}
                style={{ flex: 1, width: null, height: null }}
              /> */}

              <ProfilePicture size={null} />
            </Animated.View>

            {/* Name */}
            <Text
              style={[
                styles.text,
                {
                  fontSize: 24,
                  fontWeight: "bold",
                  marginTop: 10,
                },
              ]}
            >
              {nameTweet}
            </Text>

            {/* UserName */}
            <Text
              style={[
                styles.text,
                {
                  fontSize: 15,
                  color: "gray",
                  marginBottom: 15,
                },
              ]}
            >
              @{userNameTweet}
            </Text>
            {/* Profile Follow */}
            <View
              style={{
                flexDirection: "row",
                marginBottom: 15,
              }}
            >
              {/* Following */}
              <Text
                style={[
                  styles.text,
                  {
                    fontWeight: "bold",
                    marginRight: 10,
                  },
                ]}
              >
                {followingTweeter}{" "}
                <Text
                  style={{
                    color: "gray",
                    fontWeight: "normal",
                  }}
                >
                  Following
                </Text>
              </Text>

              {/* Followers */}
              <Text style={[styles.text, { fontWeight: "bold" }]}>
                {followerTweeter}{" "}
                <Text
                  style={{
                    color: "gray",
                    fontWeight: "normal",
                  }}
                >
                  Followers
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <GetApitweets />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default ProfileScreenAndroid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",
  },
  text: {
    color: "black",
  },
  textBanner: {
    color: "white",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: -3,
  },
  tweetsCount: {
    fontSize: 13,
  },
  tweet: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(255, 255, 255, 0.25)",
  },
});
