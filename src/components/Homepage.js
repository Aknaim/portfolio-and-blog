import React, { Component } from 'react';
import {container} from "react-bootstrap";
import '../styles/Homepage.css';

class Homepage extends Component {
  render() {
    return (
        <div className="container-fluid">
          <h1 id="welcomeMsg">Welcome to my website. Have a look around!</h1>
        </div>
    );
  }
}

export default Homepage;