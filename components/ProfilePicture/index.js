import React from "react";
import { Image } from "react-native";
import newApiRequestUser from "../../data/ApiServiceUser";

// const ProfilePicture = ({ image, size = 50 }) => ({});

function ProfilePicture({ image, size }) {
  const [twitterUser, setTwitterUser] = React.useState(null);
  React.useEffect(() => {
    newApiRequestUser({}).then((response) => {
      setTwitterUser(response.data);
    });
  }, []);
  if (!twitterUser) return null;

  return (
    <Image
      source={{ uri: twitterUser.data.profile_image_url }}
      style={{
        flex: 1,
        width: size,
        height: size,
        borderRadius: 40,
      }}
    />
  );
}

export default ProfilePicture;
