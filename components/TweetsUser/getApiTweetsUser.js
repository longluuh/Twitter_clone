import React from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
import moment from "moment";
import DotsMenuIcon from "../DotsMenuIcon";
import styles from "./styles";
import Footer from "../Footer";
import { getMediaData } from "../../data/handleData";
import newApiRequestUserTweets from "../../data/ApiServiceUserTweets";

export default function GetApitweetsUser() {
  const [twitter, setTwitter] = React.useState(null);
  React.useEffect(() => {
    newApiRequestUserTweets({}).then((response) => {
      setTwitter(response.data);
    });
  }, []);
  if (!twitter) return null;

  const Tweets = ({ tweet }) => {
    return (
      <View style={styles.constainerTweets}>
        {/* Left container */}
        <View>
          {twitter.includes.users.map((item) => (
            <Image
              source={{ uri: item.profile_image_url }}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                margin: 15,
              }}
            />
          ))}
        </View>

        {/* Main container */}
        <View style={styles.container}>
          <View style={styles.tweetHeaderContainer}>
            <View style={styles.tweetHeaderNames}>
              {twitter.includes.users.map((item) => (
                <Text style={styles.name}>{item.name} </Text>
              ))}
              {twitter.includes.users.map((item) => (
                <Text style={styles.username}>@{item.username} </Text>
              ))}
              <Text style={styles.createdAt}>
                {moment(tweet.created_at)
                  .fromNow()
                  .replace(" hours ago", "h")
                  .replace(" once hour ago", "h")
                  .replace(" days ago", "d")
                  .replace("a day ago", "1d")}
              </Text>
            </View>
            <DotsMenuIcon />
          </View>
          <View>
            <Text style={styles.content}>{tweet.text}</Text>
            {getMediaData(tweet.attachments, twitter.includes).map((item) => {
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
            })}
          </View>
          <Footer tweet={tweet} />
        </View>
      </View>
    );
  };
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        nestedScrollEnabled={true}
        data={twitter.data}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <Tweets tweet={item} />;
        }}
      />
    </View>
  );
}
