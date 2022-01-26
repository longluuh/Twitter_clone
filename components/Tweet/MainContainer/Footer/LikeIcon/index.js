import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LikeIcon = ({ tweet }) => {
  const [isLike, setIsLike] = useState(1);
  const onPress = () => setIsLike((pre) => pre + 1);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {isLike % 2 === 0 ? (
          <AntDesign name="heart" size={18} color="red" />
        ) : (
          <AntDesign name="hearto" size={18} color="grey" />
        )}
      </TouchableOpacity>
      <Text style={styles.number}> {tweet.numberOfLikes} </Text>
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
