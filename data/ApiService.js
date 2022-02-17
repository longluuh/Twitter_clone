import axios from "axios";
import { CONFIG, USERPROFILE } from "../constants/Api_constant";

function newAPIrequest({}) {
  return axios(CONFIG, USERPROFILE);
}
export default newAPIrequest;
