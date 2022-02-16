import axios from "axios";
import { CONFIG } from "../constants/Api_constant";

function newAPIrequest({}) {
  return axios(CONFIG);
}
export default newAPIrequest;
