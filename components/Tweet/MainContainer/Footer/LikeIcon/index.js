import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LikeIcon = ({ tweet }) => {
  const [isLike, setIsLike] = useState(tweet.numberOfLikes);
  const onPress = () => setIsLike((pre) => pre);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const like = <AntDesign name="heart" size={18} color="red" />;
  const dislike = <AntDesign name="hearto" size={18} color="grey" />;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSwitch} onPressIn={onPress}>
        {isEnabled ? like : dislike}
      </TouchableOpacity>
      <Text style={styles.number}> {isEnabled ? isLike + 1 : isLike} </Text>
    </View>
  );
};
export default LikeIcon;

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
