import React, { Component } from 'react';

import bird from '../../img/doc-bird.svg';

import './Timetable.css';

class Timetable extends Component {
  
  render() {
    return (
      <div className="Timetable">
      <section className="">
        <div className="section">
          <div className="container">
          <div className="columns">
          <div className="column is-two-thirds timetable-column">
          <h2 className="title">Ωράριο ιατρείου</h2>
          <table className="table responsive-table is-centered">
            <thead>
              <tr>
                <th>Δευτέρα</th>
                <th>Τρίτη</th>
                <th>Τετάρτη</th>
                <th>Πέμπτη</th>
                <th>Παρασκευή</th>
                <th>Σάββατο</th>
                <th>Κυριακή</th>
              </tr>
            </thead>
            <tbody>
              <tr className="first-row">
                <td>09:00-14:00</td>
                <td>09:00-14:00</td>
                <td>09:00-14:00</td>
                <td>09:00-14:00</td>
                <td>09:00-14:00</td>
                <td>09:00-14:00</td>
                <td>Κλειστό</td>
              </tr>
              <tr className="second-row">
                <td>17:30-21:00</td>
                <td>17:30-21:00</td>
                <td>17:30-21:00</td>
                <td>17:30-21:00</td>
                <td>17:30-21:00</td>
                <td>Κλειστό</td>
                <td>Κλειστό</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className="column bird">
            <span className="icon is-large animated fadeOutUp" id="music-note-1">
              <i className="fas fa-2x fa-music"></i>
            </span>
            <span className="icon is-large animated fadeOutUp" id="music-note-2">
              <i className="fas fa-2x fa-music"></i>
            </span>
            <img src={bird} alt="le bird" />
          </div>
          </div>
          </div>
        </div>
      </section>        
      </div>
    );
  }
}

export default Timetable;
