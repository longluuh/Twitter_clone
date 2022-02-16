import React from "react";
import { View, StyleSheet } from "react-native";
import NewTweetButton from "../components/NewTweetButton";
import Feed from "../components/Feed";

import ApiContainer from "../data/try_/ApiContainer";
import GetApitweets from "../components/Feed/getApiTweets";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Feed /> */}
      {/* <ApiContainer /> */}
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
