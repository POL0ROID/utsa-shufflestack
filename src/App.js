import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Shuffle from "./Component/Shuffle/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Search} />
      </Router>
    );
  }
}

export default App;
