import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "&apikey=bb134ec959784cc58e11ecfeb4e61900";

export default {
    search: function (search, startYear, endYear) {
        var query = BASEURL;
        query += "?q=" + search;
        if (parseInt(startYear, 10)) {
            query += "&begin_date=" + startYear + "0101";
        }

        if (parseInt(endYear, 10)) {
            query += "&end_date=" + endYear + "1231";
        }
        return axios.get(query + APIKEY);
    },
    save: function (article) {
        return axios.post("/api/articles", article);
    },
    get: function () {
        return axios.get("/api/articles");
    },
    delete: function (article) {
        return axios.delete("/api/articles", { data: article });
    }
};