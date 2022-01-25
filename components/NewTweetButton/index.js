import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";

const NewTweetButton = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Mail");
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.Button}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={"feather"} size={30} color="white" />
    </TouchableOpacity>
  );
};
export default NewTweetButton;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: Colors.light.tini,
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
