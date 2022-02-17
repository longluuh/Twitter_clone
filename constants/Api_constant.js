var CONFIG = {
  method: "get",
  url: "https://api.twitter.com/2/tweets/search/recent?query=from: MarvelStudios&tweet.fields=attachments,author_id,created_at,public_metrics,source&expansions=author_id,attachments.media_keys&media.fields=public_metrics,duration_ms,preview_image_url,url&user.fields=name,profile_image_url",
  headers: {
    Authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAAFbVYQEAAAAAEDWQ33AW%2B%2Bt7w0FrcH7lwhBBFgc%3D2RufDOC8i4PwjESiDCPwQIvT8Ouod7Q4NEeMZokKE0MEsPToqO",
    Cookie:
      'guest_id=v1%3A164327538895434132; guest_id_ads=v1%3A164327538895434132; guest_id_marketing=v1%3A164327538895434132; personalization_id="v1_7hiVq/6NTcyNseRph/mMRw=="',
  },
};
var USERPROFILE = {
  method: "get",
  url: "https://api.twitter.com/2/users/by/username/MarvelStudios?user.fields=profile_image_url,created_at",
  headers: {
    Authorization:
      "Bearer AAAAAAAAAAAAAAAAAAAAAFbVYQEAAAAAEDWQ33AW%2B%2Bt7w0FrcH7lwhBBFgc%3D2RufDOC8i4PwjESiDCPwQIvT8Ouod7Q4NEeMZokKE0MEsPToqO",
    Cookie:
      'guest_id=v1%3A164327538895434132; guest_id_ads=v1%3A164327538895434132; guest_id_marketing=v1%3A164327538895434132; personalization_id="v1_7hiVq/6NTcyNseRph/mMRw=="',
  },
};

export { CONFIG, USERPROFILE };
