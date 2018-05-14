import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&apikey=bb134ec959784cc58e11ecfeb4e61900";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};