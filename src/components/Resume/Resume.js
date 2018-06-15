import React, { Component } from 'react';

import tree from '../../img/doc-tree.svg';

import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <section className="section">
          <div className="content container">
          <div className="columns">
            <div className="column is-two-thirds resume-column">
              <h2>Βιογραφικό</h2>
              <p>Quisque ante lacus, malesuada ac auctor vitae, congue non ante. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
              <ul>
                <li>Donec blandit a lorem id convallis.</li>
                <li>Cras gravida arcu at diam gravida gravida.</li>
                <li>Integer in vulutpat libero.</li>
                <li>Donec a diam tellus.</li>
                <li>Aenean nec tortor orci.</li>
                <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
                <li>Vivamus maximus ultricies pulvinar.</li>
              </ul>
            </div>
            <div className="column is-one-third tree">
              <img src={tree} alt="le tree" />
            </div>
          </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Resume;
