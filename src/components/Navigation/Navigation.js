import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
