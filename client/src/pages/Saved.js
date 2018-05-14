import React from "react";
import { Link } from "react-router-dom";
import SavedContainer from "../components/SavedContainer";

class Saved extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World from Saved</h1>
                <SavedContainer />
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Saved;