import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NewTweetButton from "../components/NewTweetButton";
const NontificationScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Nontification</Text>
      <NewTweetButton />
    </View>
  );
};
export default NontificationScreen;
