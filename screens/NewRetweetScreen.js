import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

export default function NewRetweetScreen() {
  const [tweet, setTweet] = useState("");
  const onPostComment = () => {
    // console.log(`Post the tweet: ${tweet}  `);
    navigation.goBack();
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color={Colors.light.tini} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPostComment}>
          <Text style={styles.buttonText}>Retweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newCommentContainer}>
        <View style={styles.inputContainer}>
          <Text>
            Retweet <Text style={{ color: "dodgerblue" }}>@LongLuu577</Text>{" "}
          </Text>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.commentInput}
            placeholder="Retweet"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  button: {
    alignItems: "center",
    backgroundColor: Colors.light.tini,
    borderRadius: 20,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  newCommentContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 15,
  },
  commentInput: {
    height: 100,
    maxHeight: 300,
    color: "black",
    fontSize: 16,
  },
  imageInput: {},
});
