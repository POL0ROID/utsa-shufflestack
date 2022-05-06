import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Search from "./Component/Search/index";

class App extends Component {
  render() {
	  <p>THIS IS A PLACEHOLDER</p>
    return (
      <Router>
        <Route path="/" exact component={Search} />
      </Router>
    );
  }
}

export default App;
