import React from "react";
import { Link } from "react-router-dom";

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1>{window.location.pathname === "/" ? "New York Times Article Search" : "Saved Articles"}</h1>
                <Link className="btn btn-primary" to={window.location.pathname === "/" ? "/saved" : "/"}> {window.location.pathname !== "/" ? "Home" : "Saved Articles"}</Link>
            </div>
        );
    }
}

export default Jumbotron;