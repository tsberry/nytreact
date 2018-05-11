import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Saved from "./pages/Saved.js";

import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Home} />
                    <Route path="/saved" component={Saved} />
                </div>
            </Router>
        );
    }
}

export default App;
