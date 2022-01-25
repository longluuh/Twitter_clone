import React from "react";
import { View, StyleSheet } from "react-native";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

const Tweet = ({ tweet }) => {
  return (
    <View style={styles.constainer}>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </View>
  );
};
export default Tweet;

const styles = StyleSheet.create({
  constainer: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#fff",
  },
});
