import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>You can reach me at <a className="email" href="mailto:syednaim@outlook.com"> syednaim@outlook.com</a></p>
        </div>
    );
  }
}

export default Contact;