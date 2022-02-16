// profile container
import React from "react";
import { Image, View } from "react-native";
import ProfilePicture from "../../ProfilePicture";

function LeftContainer({ user }) {
  return (
    <View>
      <Image
        source={require("../../../assets/pic/Gut.jpg")}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          margin: 15,
        }}
      />
    </View>
  );
}
export default LeftContainer;
