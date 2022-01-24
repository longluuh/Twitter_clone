import React from "react";
import { Image } from "react-native";

const ProfilePicture = ({ image, size = 50 }) => (
  <Image
    source={require("../../assets/Gut.jpg")}
    style={{
      width: size,
      height: size,
      borderRadius: size,
      margin: 15,
    }}
  />
);

export default ProfilePicture;
