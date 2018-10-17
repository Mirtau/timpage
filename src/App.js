import React, { Component } from 'react'
import logo from './logo.svg'
import Splash from './components/Splash'
import Navbar from './components/Navbar'
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom"

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <Splash />
      </div>
    </Router>
    );
  }
}

export default App;
