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
import ProfilePicture from "../components/ProfilePicture";
import { useNavigation } from "@react-navigation/native";

export default function NewTweetScreen() {
  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onPosttweet = () => {
    console.log(`Post the tweet: ${tweet}  Image: ${imageUrl} `);
    navigation.goBack();
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color={Colors.light.tini} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPosttweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture
          image={
            "https://www.whatspaper.com/wp-content/uploads/2021/10/hollow-knight-wallpaper-whatspaper-4.jpg"
          }
        />
        <View style={styles.inputContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder="What's happening?"
          />
          <TextInput
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
            style={styles.imageInput}
            placeholder="image input"
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
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 15,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    color: "black",
    fontSize: 16,
  },
  imageInput: {},
});
