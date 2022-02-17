import React from "react";
import { View, Text, StyleSheet } from "react-native";
const MomentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>this is MomentsScreen</Text>
    </View>
  );
};
export default MomentsScreen;

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
