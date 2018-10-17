import React, { Component } from 'react'

import './splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="splash-header" >Welcome to my Webpage</h1>
          <img src={require('../images/meloadin.jpg')} className="mepic" alt="logo" />

        </header>
      </div>
    );
  }
}

export default Splash
