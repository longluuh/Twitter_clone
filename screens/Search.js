import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import NewTweetButton from "../components/NewTweetButton";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Search"></TextInput>
      <NewTweetButton />
    </SafeAreaView>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    width: "50%",
    height: 40,
    margin: 22,
    color: "black",
    borderWidth: 0.9,
    borderRadius: 50,
    textAlign: "center",
  },
});
