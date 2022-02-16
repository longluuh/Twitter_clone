import React from "react";
import { View, TouchableOpacity, StyleSheet, Share } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const ShareIcon = ({ tweet }) => {
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
      <TouchableOpacity activeOpacity={0.8} onPress={onShare}>
        <EvilIcons name="share-apple" size={24} color="grey" />
      </TouchableOpacity>
    </View>
  );
};
export default ShareIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
