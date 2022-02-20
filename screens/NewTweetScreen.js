import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";
import newApiRequestUser from "../data/ApiServiceUser";

export default function NewTweetScreen() {
  const [postTweet, setPostTweet] = useState("");
  const [postImageUrl, setPostImageUrl] = useState("");

  const onPosttweet = () => {
    console.log(`Post the tweet: ${postTweet}  Image: ${postImageUrl} `);
    navigation.goBack();
  };
  // get user tweeter
  const [twitterUser, setTwitterUser] = React.useState(null);
  React.useEffect(() => {
    newApiRequestUser({}).then((response) => {
      setTwitterUser(response.data);
    });
  }, []);
  if (!twitterUser) return null;

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
        {/* <ProfilePicture
          image={
            "https://www.whatspaper.com/wp-content/uploads/2021/10/hollow-knight-wallpaper-whatspaper-4.jpg"
          }
        /> */}
        <Image
          source={{ uri: twitterUser.data.profile_image_url }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 40,
            margin: 15,
          }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            value={postTweet}
            onChangeText={(value) => setPostTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder="What's happening?"
          />
          <TextInput
            value={postImageUrl}
            onChangeText={(value) => setPostImageUrl(value)}
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
