import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return (
        <div id="contactBackground">
          <div className = "div-contact">
            <h1>Contact Me</h1>
            <p>You can reach me at <a className="email" href="mailto:syednaim@outlook.com"> syednaim@outlook.com</a></p>
          </div>
        </div>
    );
  }
}

export default Contact;