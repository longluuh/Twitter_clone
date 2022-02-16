import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CommentIcon = ({ tweet }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("NewComment");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Feather name="message-circle" size={22} color="grey" />
      </TouchableOpacity>
      <Text style={styles.number}> {tweet.public_metrics.reply_count} </Text>
    </View>
  );
};
export default CommentIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  number: {
    marginRight: 35,
    color: "grey",
    textAlign: "center",
  },
});
