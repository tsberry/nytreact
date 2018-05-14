import React from "react";
import API from "../utils/API";
import Form from "./Form";
import Article from "./Article";

class ArticleContainer extends React.Component {
    state = {
        articles: [],
        search: "",
        startYear: "",
        endYear: ""
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

        API.search(this.state.search, this.state.startYear, this.state.endYear)
            .then(res => {
                var articles = [];
                var nytResponse = res.data.response.docs;
                for (var i = 0; i < nytResponse.length; i++) {
                    articles.push({
                        title: nytResponse[i].headline.main,
                        url: nytResponse[i].web_url,
                        date: nytResponse[i].pub_date,
                        byline: nytResponse[i].byline.original,
                        summary: nytResponse[i].snippet
                    });
                }
                this.setState({ articles: articles });
            })
            .catch(err => console.log(err));

        this.setState({
            search: ""
        });
    };

    saveArticle = article => {
        API.save(article);
    }

    render() {
        return (
            <div>
                <div>
                    <Form handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} search={this.state.search} startYear={this.state.startYear} endYear={this.state.endYear} />
                </div>
                <div>
                    {this.state.articles.map(article => <Article article={article} saveArticle={this.saveArticle} />)}
                </div>
            </div>
        );
    }
}

export default ArticleContainer;