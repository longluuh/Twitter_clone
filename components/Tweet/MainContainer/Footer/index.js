import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const Footer = ({ tweet }) => {
  return (
    <View styles={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="message-circle" size={24} color="grey" />
        <Text style={styles.number}> {tweet.numberOfComments} </Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="retweet" size={24} color="grey" />
        <Text style={styles.number}> {tweet.numberOfRetweets} </Text>
      </View>
      <View style={styles.iconContainer}>
        <AntDesign name="hearto" size={20} color="grey" />
        <Text style={styles.number}> {tweet.numberOfLikes} </Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name="share-apple" size={24} color="grey" />
      </View>
    </View>
  );
};

export default Footer;
