import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import Footer from "./Footer";

const MainContainer = ({ tweet }) => (
  <View style={styles.container}>
    <View style={styles.tweetHeaderContainer}>
      <View style={styles.tweetHeaderNames}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>
          {moment(tweet.createdAt).fromNow()}
        </Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="dots-horizontal"
          size={24}
          color="lightgray"
        />
      </TouchableOpacity>
    </View>
    <View>
      <Text style={styles.content}>{tweet.content}</Text>
      {!!tweet.image && (
        <Image source={{ uri: tweet.image }} style={styles.image} />
      )}
    </View>
    <Footer tweet={tweet} />
  </View>
);
export default MainContainer;
