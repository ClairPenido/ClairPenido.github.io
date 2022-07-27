import React from 'react';
import eu from '../style/eu.jpg';

class InfoText extends React.Component {
  render() {
    return (
      <div id="info-div">
        <img className="photo" src={eu} alt="Foto Clair" width="140px" height="200px" />
        <div className="info-text">
          <h3>Clair de Andrade Penido</h3>
          <p>Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
      </div>
    );
  }
}
export default InfoText;
