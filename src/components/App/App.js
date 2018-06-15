import React, { Component } from 'react';
// import { Parallax } from 'react-parallax';

import Intro from '../Intro/Intro';
import Timetable from '../Timetable/Timetable';
import Resume from '../Resume/Resume';
import Gallery from '../Gallery/Gallery';


import './App.css';

import logo from '../../img/doc-logo.svg';

// import image1 from '../../img/doc-photo-1.jpg';
// import image2 from '../../img/doc-photo-2.jpg';
// import image3 from '../../img/doc-photo-3.jpg';
// import logoWhite from '../../img/doc-logo-white.svg';

// const image3 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0,
      isLoaded: false
    };

    // Bind it to make 'this' work in the callback
    this.scrollToNode = this.scrollToNode.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), 15);
    this.setState({ intervalId: intervalId });
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }

  scrollToNode(node) {
    node.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="App">
        
        <div className={ !this.state.isLoaded ? "pageloader is-active" : "pageloader"} ></div>

        <nav className="Navigation">
          <div className="navbar-brand">
            <a className="navbar-item" onClick={ () => this.scrollToTop() }>
              <img src={logo} alt="Πλακιάς Γεώργιος - Παιδίατρος" width="50" height="50" />
            </a>
          </div>
          
          <a className="button is-medium" onClick={ () => this.scrollToNode(this.timetable) }>Ωράριο</a>
          <a className="button is-medium" onClick={ () => this.scrollToNode(this.resume) }>Βιογραφικό</a>
          <a className="button is-medium" onClick={ () => this.scrollToNode(this.gallery) }>Φωτογραφίες</a>
         
        </nav>

        <Intro />

        <div ref={(timetable) => { this.timetable = timetable }}>
          <Timetable />
        </div>

        {/* <Parallax bgImage={image3} strength={500} >
          <div className="parallax-content" style={{height: 300}}>

          </div>
        </Parallax>    */}

        <div ref = {(resume) => { this.resume = resume }}>
          <Resume />
        </div>

        {/* <Parallax bgImage={image3} strength={500} >
          <div className="parallax-content" style={{height: 300}}>

          </div>
        </Parallax>    */}

        <div ref = {(gallery) => { this.gallery = gallery }}>
          <Gallery />
        </div>

          

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
