import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';

import './Intro.css';

import logo from '../../img/doc-logo.svg';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <section className="hero is-primary is-fullheight">
          <div className="hero-head">
            <Navigation ref={table => this.timetable = this.refs.table} />
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <img width="200px" height="200px" src={logo} alt="logo" />
              <p className="title is-1 animated fadeInDown">
                Πλακιάς Γεώργιος
              </p>
              <p className="subtitle is-3 animated fadeInUp">
                Παιδιατρικό ιατρείο
              </p>
                        
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Intro;
