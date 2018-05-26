import React, { Component } from 'react';

import './Navigation.css';

import logo from '../../img/doc-logo.svg';

class Navigation extends Component {
  scrollToComponent(node) {
    node.scrollToComponent();
  }

  render() {
    return (
      <div className="Navigation">
        {/* <nav className="navbar" role="navigation" aria-label="main navigation"> */}
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src={logo} alt="Πλακιάς Γεώργιος - Παιδίατρος" width="50" height="50" />
              </a>
              <button onClick={() => console.log(this.timetable)}>
              Go To times
              </button>
            </div>
          </div>
        {/* </nav> */}
      </div>
    );
  }
}

export default Navigation;
