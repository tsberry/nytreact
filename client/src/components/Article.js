import React from "react";

class Article extends React.Component {
    render() {
        return (
            <div className="article">
                <p><a href={this.props.article.url}>{this.props.article.title}</a></p>
                <p>{this.props.article.date}</p>
                {window.location.pathname === "/" ? <button onClick={() => this.props.saveArticle(this.props.article)}>Save</button> : ""}
                {window.location.pathname === "/saved" ? <button onClick={() => this.props.deleteArticle(this.props.article)}>Delete</button> : ""}
            </div>
        )
    }
}

export default Article;