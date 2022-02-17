import React from "react";
import { View, Text, StyleSheet } from "react-native";
const TopicsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>this is Topics Screen</Text>
    </View>
  );
};
export default TopicsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    height: 250,
    width: "100%",
    backgroundColor: "dodgerblue",
    bottom: 350,
    borderRadius: 30,
  },
});
