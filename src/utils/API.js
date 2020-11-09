import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=" 
const NatURL = "&nat=us";


export default {
  search: function(query) {
    if (query != NaN)
    {return axios.get(BASEURL + query + NatURL);}
  }
};
