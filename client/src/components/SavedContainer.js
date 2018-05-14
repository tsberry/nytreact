import React from "react";
import API from "../utils/API";
import Article from "./Article";

class SavedContainer extends React.Component {
    state = {
        articles: []
    }

    componentDidMount = () => {
        this.getArticles();
    }

    getArticles = () => {
        API.get()
            .then(res => this.setState({ articles: res.data })
            )
            .catch(err => console.log(err)
            );
    }

    deleteArticle = article => {
        API.delete(article)
            .then(res => {this.getArticles()})
            .catch(err => console.log(err)
            );
    }

    render() {
        return (
            <div id="saved-container">
                {this.state.articles.map(article => <Article article={article} deleteArticle={this.deleteArticle} />)}
            </div>
        );
    }
}

export default SavedContainer;