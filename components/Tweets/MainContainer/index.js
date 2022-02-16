import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import moment from "moment";
import DotsMenuIcon from "../../DotsMenuIcon";
import Footer from "./Footer";
import { getMediaData } from "../../../data/handleData";
import styles from "./styles";

const MainContainer = ({ tweet }) => (
  <View style={styles.container}>
    <View style={styles.tweetHeaderContainer}>
      <View style={styles.tweetHeaderNames}>
        <Text style={styles.name}>Marvel</Text>
        <Text style={styles.username}>@Marvels</Text>
        <Text style={styles.createdAt}>
          {moment(tweet.created_at).fromNow()}
        </Text>
      </View>
      <DotsMenuIcon />
    </View>
    <View>
      <Text style={styles.content}>{tweet.text}</Text>
      {/* {getMediaData(tweet.attachments, tweet.includes).map((item) => {
        return (
          <View>
            {item.type == "photo" ? (
              <Image style={styles.image} source={{ uri: item.url }} />
            ) : (
              <Image
                style={styles.image}
                source={{ uri: item.preview_image_url }}
              />
            )}
          </View>
        );
      })} */}
    </View>
    <Footer tweet={tweet} />
  </View>
);
export default MainContainer;
