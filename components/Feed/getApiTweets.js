import axios from "axios";
import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import newsApiRequest from "../../data/ApiService";

// import Tweets from "../Tweets";

const { width, height } = Dimensions.get("window");

export default function GetApitweets() {
  const [twitter, setTwitter] = React.useState(null);
  React.useEffect(() => {
    newsApiRequest({}).then((response) => {
      setTwitter(response.data);
    });
  }, []);
  if (!twitter) return null;

  const NewsCard = ({ item }) => {
    return (
      <View style={styles.main}>
        <Text>{item.type}</Text>
        {/* <Text>{item.public_metrics.retweet_count} </Text> */}
      </View>
    );
  };

  const Tweets = ({ tweet }) => {
    return (
      <View style={styles.constainerTweets}>
        <LeftContainer user={tweet.user} />
        <MainContainer tweet={tweet} />
      </View>
    );
  };

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={twitter.includes.media}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <NewsCard item={item} />;
          //   return <Tweets tweet={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "lightgrey",
    margin: width * 0.03,
  },
  constainerTweets: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#fff",
  },
  image: {
    height: height / 8,
    width: "30%",
  },
});
