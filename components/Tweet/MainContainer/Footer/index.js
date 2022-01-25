import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const Footer = ({ tweet }) => {
  return (
    <View styles={{ flexDirection: "row" }}>
      <View style={styles.iconContainer}>
        <Feather name="message-circle" size={22} color="grey" />
        <Text style={styles.number}> {tweet.numberOfComments} </Text>
        <EvilIcons name="retweet" size={28} color="grey" />
        <Text style={styles.number}> {tweet.numberOfRetweets} </Text>
        <AntDesign name="hearto" size={18} color="grey" />
        <Text style={styles.number}> {tweet.numberOfLikes} </Text>
        <EvilIcons name="share-apple" size={24} color="grey" />
      </View>
    </View>
  );
};

export default Footer;
