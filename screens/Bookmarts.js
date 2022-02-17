import React from "react";
import { View, Text, StyleSheet } from "react-native";
const BookmarksScreen = () => {
  return (
    <View style={styles.container}>
      <Text>this is BookmarksScreen</Text>
    </View>
  );
};
export default BookmarksScreen;

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
