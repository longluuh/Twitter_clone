import React from "react";
import { View, StyleSheet } from "react-native";
import NewTweetButton from "../components/NewTweetButton";
import Tweet from "../components/Tweet";
import tweets from "../data/tweets";
import Feed from "../components/Feed";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Tweet tweet={tweets[0]} /> */}
      <Feed />
      <NewTweetButton />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
