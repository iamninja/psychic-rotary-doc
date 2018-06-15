import React, { Component } from 'react';

import './Gallery.css';

// import logo from '../../img/doc-logo.svg';

import image1 from '../../img/doc-photo-1.jpg';
import image2 from '../../img/doc-photo-2.jpg';
import image3 from '../../img/doc-photo-3.jpg';

const image4 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";


class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: {
        1: image1,
        2: image2,
        3: image3,
        4: image4
      },
      imageOnView: image1
    };

    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(image) {
    this.setState({ imageOnView: image });
  }


  render() {

    return (
      <div className="Gallery">
        <section className="section">
        
        <div className="content container">
          <div className="columns">
            <div className="column is-half photos-column">
            <figure className="image is-128x128">
              <img src={image1} alt="some-foto" onClick={ () => this.changeImage(this.state.images[1]) } />
            </figure>
            <figure className="image is-128x128">
              <img src={image2} alt="some-foto" onClick={ () => this.changeImage(this.state.images[2]) } />
            </figure>
            <figure className="image is-128x128">
              <img src={image3} alt="some-foto" onClick={ () => this.changeImage(this.state.images[3]) } />
            </figure>
            <figure className="image is-128x128">
              <img src={image4} alt="some-foto" onClick={ () => this.changeImage(this.state.images[4]) } />
            </figure>
            <figure className="image is-128x128">
              <img src={image2} alt="some-foto" onClick={ () => this.changeImage(this.state.images[2]) } />
            </figure>
            <figure className="image is-128x128">
              <img src={image2} alt="some-foto" onClick={ () => this.changeImage(this.state.images[2]) } />
            </figure>
            <figure className="image is-128x128">
              <img src={image2} alt="some-foto" onClick={ () => this.changeImage(this.state.images[2]) } />
            </figure>
          </div>

          <div className="column is-half view-column">
            <figure className="iamge is-5by4">
              <img src={ this.state.imageOnView } alt="le tree" />
            </figure>
          </div>
          </div>
        </div>

        </section>
      </div>
    );
  }
}

export default Gallery;
