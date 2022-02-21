import React from "react";
import { StyleSheet, View, Text } from "react-native";
import newApiRequestUser from "../../data/ApiServiceUser";

function ProfileUser() {
  const [twitterUser, setTwitterUser] = React.useState(null);
  React.useEffect(() => {
    newApiRequestUser({}).then((response) => {
      setTwitterUser(response.data);
    });
  }, []);
  if (!twitterUser) return null;

  const nameTweet = twitterUser.data.name;
  const userNameTweet = twitterUser.data.username;
  const followingTweeter = twitterUser.data.public_metrics.following_count;
  const followerTweeter = twitterUser.data.public_metrics.followers_count;

  return (
    <View>
      {/* Name */}
      <Text
        style={[
          styles.text,
          {
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 10,
          },
        ]}
      >
        {nameTweet}
      </Text>
      {/* UserName */}
      <Text
        style={[
          styles.text,
          {
            fontSize: 15,
            color: "gray",
            marginBottom: 15,
          },
        ]}
      >
        @{userNameTweet}
      </Text>
      {/* Profile Follow */}
      <View
        style={{
          flexDirection: "row",
          marginBottom: 15,
        }}
      >
        {/* Following */}
        <Text
          style={[
            styles.text,
            {
              fontWeight: "bold",
              marginRight: 10,
            },
          ]}
        >
          {followingTweeter}{" "}
          <Text
            style={{
              color: "gray",
              fontWeight: "normal",
            }}
          >
            Following
          </Text>
        </Text>

        {/* Followers */}
        <Text style={[styles.text, { fontWeight: "bold" }]}>
          {followerTweeter}{" "}
          <Text
            style={{
              color: "gray",
              fontWeight: "normal",
            }}
          >
            Followers
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default ProfileUser;

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
