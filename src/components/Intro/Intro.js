import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';

import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <section className="hero is-bold is-success is-fullheight">
          <div className="hero-body">
            <div className="container">
              <p className="title is-1">
                Πλακιάς Γεώργιος
              </p>
              <p className="subtitle is-3">
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
