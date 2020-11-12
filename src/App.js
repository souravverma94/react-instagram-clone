import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="navBar">
      <NavBar />
      <Router>
        <Switch>
          <div className="app-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/explore" component={Explore} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
