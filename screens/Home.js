import React from "react";
import { View, StyleSheet } from "react-native";
import NewTweetButton from "../components/NewTweetButton";

import GetApitweets from "../components/Tweets/getApiTweets";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <GetApitweets />
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
