import axios from "axios";
import { TWEETERSNASA } from "../constants/Api_constant";

function newAPIrequest({}) {
  return axios(TWEETERSNASA);
}
export default newAPIrequest;
