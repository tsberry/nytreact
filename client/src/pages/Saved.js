import React from "react";
import { Link } from "react-router-dom";

class Saved extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World from Saved</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Saved;