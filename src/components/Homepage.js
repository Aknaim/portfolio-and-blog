import React, { Component } from 'react';
import { container } from "react-bootstrap";
import '../styles/Homepage.css';

import SocialMedia from './SocialMedia.js';

class Homepage extends Component {
  render() {
    return (
      <div id="body">
        <div className="container-fluid">
          <h1 id="welcomeMsg"><i class="fa fa-road" aria-hidden="true"></i> Under Construction <i class="fa fa-road" aria-hidden="true"></i></h1>
        </div>
      </div>
    );
  }
}

export default Homepage;