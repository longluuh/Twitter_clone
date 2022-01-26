import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import CommentIcon from "./CommentIcon";
import LikeIcon from "./LikeIcon";

const Footer = ({ tweet }) => {
  return (
    <View styles={{ flexDirection: "row" }}>
      <View style={styles.iconContainer}>
        <CommentIcon tweet={tweet} />
        <TouchableOpacity>
          <EvilIcons name="retweet" size={28} color="grey" />
        </TouchableOpacity>
        <Text style={styles.number}> {tweet.numberOfRetweets + 1} </Text>
        <LikeIcon tweet={tweet} />
        <TouchableOpacity>
          <EvilIcons name="share-apple" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
