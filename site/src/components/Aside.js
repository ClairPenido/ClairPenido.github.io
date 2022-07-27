import React from 'react';
import {
  FaHome, FaPhoneAlt, FaAddressCard, FaRegWindowRestore,
} from 'react-icons/fa';

class Aside extends React.Component {
  render() {
    return (
      <div id="aside">
        <nav>
          <a href="#info-text">
            <FaHome />
          </a>
          <a href="#info-text">
            <FaAddressCard />
          </a>
          <a href="#info-text">
            <FaRegWindowRestore />
          </a>
          <a href="#info-text">
            <FaPhoneAlt />
          </a>
        </nav>
      </div>
    );
  }
}
export default Aside;
