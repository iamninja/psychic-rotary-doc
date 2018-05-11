import React, { Component } from 'react';

import Intro from '../Intro/Intro';
import Navigation from '../Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Intro />
      </div>
    );
  }
}

export default App;
