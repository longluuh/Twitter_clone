import React, { useRef } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

// get user tweeter
function generateTweets(limit) {
  return new Array(limit).fill(0).map((_, index) => {
    const repetitions = Math.floor(Math.random() * 3) + 1;

    return {
      key: index.toString(),
      text: "halo world ".repeat(repetitions),
      author: name,
      tag: userName,
    };
  });
}

const name = "LongLuu";
const userName = "Longluu12092";
const TWEETS = generateTweets(10);
const HEADER_HEIGHT_EXPANDED = 35;
const HEADER_HEIGHT_NARROWED = 90;

const PROFILE_PICTURE_URI =
  "https://pbs.twimg.com/profile_images/975388677642715136/7Hw2MgQ2_400x400.jpg";

const PROFILE_BANNER_URI =
  "https://pbs.twimg.com/profile_banners/3296259169/1438473955/1500x500";

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

export default function ProfileScreen() {
  // Keeps notches away
  return (
    <SafeAreaProvider>
      <Profile />
    </SafeAreaProvider>
  );
}

function Profile() {
  const insets = useSafeAreaInsets();
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Back button */}
      <View
        style={{
          zIndex: 2,
          position: "absolute",
          top: insets.top + 10,
          left: 20,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: 35,
          width: 35,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" color="white" size={30} />
        </TouchableOpacity>
      </View>
      {/* Search button */}
      <View
        style={{
          zIndex: 2,
          position: "absolute",
          top: insets.top + 10,
          right: 20,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          height: 35,
          width: 35,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Refresh arrow */}
      <Animated.View
        style={{
          zIndex: 2,
          position: "absolute",
          top: insets.top + 13,
          left: 0,
          right: 0,
          alignItems: "center",
          opacity: scrollY.interpolate({
            inputRange: [-20, 0],
            outputRange: [1, 0],
          }),
          transform: [
            {
              rotate: scrollY.interpolate({
                inputRange: [-45, -35],
                outputRange: ["180deg", "0deg"],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Feather name="arrow-down" color="white" size={25} />
      </Animated.View>

      {/* Name + tweets count */}
      <Animated.View
        style={{
          zIndex: 2,
          position: "absolute",
          top: insets.top + 6,
          left: 0,
          right: 0,
          alignItems: "center",
          opacity: scrollY.interpolate({
            inputRange: [90, 110],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [90, 120],
                outputRange: [30, 0],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Text style={[styles.textBanner, styles.username]}>{name}</Text>

        <Text style={[styles.textBanner, styles.tweetsCount]}>10 tweets</Text>
      </Animated.View>

      {/* Banner */}
      <AnimatedImageBackground
        source={require("../assets/pic/griffith.jpg")}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [-200, 0],
                outputRange: [15, 1],
                extrapolateLeft: "extend",
                extrapolateRight: "clamp",
              }),
            },
          ],
        }}
      >
        <AnimatedBlurView
          tint="dark"
          intensity={90}
          style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 2,
            opacity: scrollY.interpolate({
              inputRange: [-50, 0, 50, 100],
              outputRange: [1, 0, 0, 1],
            }),
          }}
        />
      </AnimatedImageBackground>

      {/* Tweets/profile */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        style={{
          zIndex: 3,
          marginTop: HEADER_HEIGHT_NARROWED,
          paddingTop: HEADER_HEIGHT_EXPANDED,
        }}
      >
        <View style={[styles.container]}>
          {/* Profile user */}
          <View
            style={[
              styles.container,
              {
                paddingHorizontal: 20,
              },
            ]}
          >
            {/* Profile Picture */}
            <Animated.Image
              source={require("../assets/pic/kingWolf.jpg")}
              style={{
                width: 75,
                height: 75,
                borderRadius: 40,
                borderWidth: 4,
                borderColor: "white",
                marginTop: -30,
                transform: [
                  {
                    scale: scrollY.interpolate({
                      inputRange: [0, HEADER_HEIGHT_EXPANDED],
                      outputRange: [1, 0.6],
                      extrapolate: "clamp",
                    }),
                  },
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, HEADER_HEIGHT_EXPANDED],
                      outputRange: [0, 16],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              }}
            />

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
              {name}
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
              @{userName}
            </Text>
            {/* sologan */}
            <Text style={[styles.text, { marginBottom: 15, fontSize: 15 }]}>
              Halo @ on every social media
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
                70{" "}
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
                2{" "}
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
          {/* Tweets user */}
          <View style={[styles.container, { marginBottom: "10%" }]}>
            {TWEETS.map((item, index) => (
              <View key={item.key} style={styles.tweet}>
                <Image
                  source={require("../assets/pic/Gut.jpg")}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    marginRight: 10,
                  }}
                />

                <View style={styles.container}>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontWeight: "bold",
                        fontSize: 15,
                      },
                    ]}
                  >
                    {item.author}{" "}
                    <Text
                      style={{
                        color: "gray",
                        fontWeight: "normal",
                      }}
                    >
                      @{item.tag} · {index + 1}d
                    </Text>
                  </Text>

                  <Text style={[styles.text, { fontSize: 15 }]}>
                    {item.text}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
