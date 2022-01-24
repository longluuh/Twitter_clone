import React from "react";
import { View, StyleSheet } from "react-native";
import Tweet from "../components/Tweet";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Tweet />
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
