import React, { Component } from 'react';

import './Navigation.css';

import logo from '../../img/doc-logo.svg';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src={logo} alt="Πλακιάς Γεώργιος - Παιδίατρος" width="50" height="50" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
