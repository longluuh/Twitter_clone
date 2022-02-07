import React from "react";
import { View } from "react-native";
import styles from "./styles";
import CommentIcon from "./CommentIcon";
import LikeIcon from "./LikeIcon";
import ShareIcon from "./ShareIcon";
import RetweetIcon from "./RetweetIcon";

const Footer = ({ tweet }) => {
  return (
    <View styles={{ flexDirection: "row" }}>
      <View style={styles.iconContainer}>
        <CommentIcon tweet={tweet} />
        <RetweetIcon tweet={tweet} />
        <LikeIcon tweet={tweet} />
        <ShareIcon />
      </View>
    </View>
  );
};

export default Footer;
