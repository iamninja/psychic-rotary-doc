import React, { Component } from 'react';

import Intro from '../Intro/Intro';
import Timetable from '../Timetable/Timetable';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Intro />

        <section className="hero is-primary">
          <div class="hero-body">
            <div class="container">
              
            </div>
          </div>
        </section>

        <Timetable />
        
        <section className="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Hero title
              </h1>
              <h2 class="subtitle">
                Hero subtitle
              </h2>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
