import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
