import React from "react";
import API from "../utils/API";
import Form from "./Form";
import Article from "./Article";

class ArticleContainer extends React.Component {
    state = {
        articles: [],
        search: ""
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        API.search(this.state.search)
            .then(res => {
                var articles = [];
                var nytResponse = res.data.response.docs;
                for (var i = 0; i < nytResponse.length; i++) {
                    articles.push({
                        title: nytResponse[i].headline.main,
                        url: nytResponse[i].web_url,
                        date: nytResponse[i].pub_date
                    });
                }
                this.setState({articles: articles});
            })
            .catch(err => console.log(err));

        this.setState({
            search: ""
        });
    };

    render() {
        return (
            <div id="article-container">
            <Form handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} value={this.state.search} />
                {this.state.articles.map(article => <Article title={article.title} url={article.url} date={article.date} />)}
            </div>
        );
    }
}

export default ArticleContainer;