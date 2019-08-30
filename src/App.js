import React from 'react';
import NavBar from './components/NavBar';
import ProfileView from './components/profileView';
import Home from './components/Home';
import Explore from './components/Explore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div id="navBar">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
