import React, { Component } from 'react';

import Intro from '../Intro/Intro';
import Timetable from '../Timetable/Timetable';
import Resume from '../Resume/Resume';

// import logo from '../../img/doc-logo.svg';

import './App.css';

class App extends Component {
  componentDidMount() {
    console.log(this.refs);
  }
  render() {
    return (
      <div className="App">
        
        <Intro />

        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              
            </div>
          </div>
        </section>

        <Timetable ref={(timetable) => { this.timetable = timetable; }}/>
        
        <section className="hero is-primary separator-1">
          <div className="hero-body">
            <div className="container">
              
            </div>
          </div>
        </section>

        <Resume />

        <section className="hero is-primary separator-2">
          <div className="hero-body">
            <div className="container">
              
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
