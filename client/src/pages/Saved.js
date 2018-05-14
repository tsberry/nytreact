import React from "react";
import SavedContainer from "../components/SavedContainer";
import Jumbotron from "../components/Jumbotron";

class Saved extends React.Component {
    render() {
        return (
            <div className="container">
                <Jumbotron />
                <SavedContainer />
            </div>
        );
    }
}

export default Saved;