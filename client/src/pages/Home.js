import React from "react";
import ArticleContainer from "../components/ArticleContainer";
import Jumbotron from "../components/Jumbotron";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Jumbotron />
                <ArticleContainer />
            </div>
        );
    }
}

export default Home;