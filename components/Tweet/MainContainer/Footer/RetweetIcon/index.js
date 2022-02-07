import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Share } from "react-native";

const RetweetIcon = ({ tweet }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("NewRetweet");
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <EvilIcons name="retweet" size={28} color="grey" />
      </TouchableOpacity>
      <Text style={styles.number}> {tweet.numberOfRetweets} </Text>
    </View>
  );
};
export default RetweetIcon;

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
