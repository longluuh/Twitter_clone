import axios from "axios";
import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import newsApiRequest from "../../data/ApiService";
import Footer from "../Footer";
import DotsMenuIcon from "../DotsMenuIcon";

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
        <View>
          <Image
            source={require("../../assets/pic/Gut.jpg")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              margin: 15,
            }}
          />
        </View>

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
