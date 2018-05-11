import React, { Component } from 'react';

import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </nav>
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
