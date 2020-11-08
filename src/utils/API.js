import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=" 
const NatURL = "&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    if (query != NaN)
    {return axios.get(BASEURL + query + NatURL);}
  }
};
