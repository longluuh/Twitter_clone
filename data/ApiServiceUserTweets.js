import axios from "axios";
import { TWEETERSMARVEL } from "../constants/Api_constant";

function newApiRequestUserTweets({}) {
  return axios(TWEETERSMARVEL);
}
export default newApiRequestUserTweets;
