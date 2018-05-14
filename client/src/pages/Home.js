import React from "react";
import { Link } from "react-router-dom";
import ArticleContainer from "../components/ArticleContainer";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <ArticleContainer />
                <Link to="/saved">Saved</Link>
            </div>
        );
    }
}

export default Home;