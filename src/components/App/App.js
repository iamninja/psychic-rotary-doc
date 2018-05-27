import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import Intro from '../Intro/Intro';
import Timetable from '../Timetable/Timetable';
import Resume from '../Resume/Resume';

import './App.css';

// import image1 from '../../img/doc-photo-1.jpg';
import image2 from '../../img/doc-photo-2.jpg';
// import image3 from '../../img/doc-photo-3.jpg';
// import logo from '../../img/doc-logo.svg';

const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";



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

        <Parallax bgImage={image2} strength={500} >
          <div className="parallax-content" style={{height: 500}}>

          </div>
        </Parallax>        
        {/* <section className="hero is-primary separator-1">
          <div className="hero-body">
            <div className="container">
              
            </div>
          </div>
        </section> */}

        <Resume />

        <Parallax bgImage={image3} strength={500} >
          <div className="parallax-content" style={{height: 500}}>

          </div>
        </Parallax>     

        {/* <section className="hero is-primary separator-2">
          <div className="hero-body">
            <div className="container">
              
            </div>
          </div>
        </section> */}

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
