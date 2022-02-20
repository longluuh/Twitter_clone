import axios from "axios";
import { USERPROFILE } from "../constants/Api_constant";

function newApiRequestUser({}) {
  return axios(USERPROFILE);
}
export default newApiRequestUser;
