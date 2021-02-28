import axios from "axios";
function search() {
  return axios.get("https://randomuser.me/api/?results=200&nat=US");
}
export default search;