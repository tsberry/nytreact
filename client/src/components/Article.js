import React from "react";

class Article extends React.Component {
    render() {
        return (
            <div className="article">
                <p><a href={this.props.url}>{this.props.title}</a></p>
                <p>{this.props.date}</p>
            </div>
        )
    }
}

export default Article;