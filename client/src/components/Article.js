import React from "react";

class Article extends React.Component {
    render() {
        return (
            <div className="card article my-3">
                <div className="card-header"><a href={this.props.article.url}>{this.props.article.title}</a></div>
                <div className="card-body">
                    <p>{this.props.article.byline}</p>
                    <p>{this.props.article.summary}</p>
                    <p>{this.props.article.date}</p>
                    {window.location.pathname === "/" ? <button className="btn btn-primary" onClick={() => this.props.saveArticle(this.props.article)}>Save</button> : <button className="btn btn-danger" onClick={() => this.props.deleteArticle(this.props.article)}>Delete</button>}
                </div>
            </div>
        )
    }
}

export default Article;