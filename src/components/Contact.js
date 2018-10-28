import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return (
        <div id="body">
          <div class="container-fluid">
            <img class="contactImg" src="http://richthinking.net/wp-content/uploads/2017/07/contact.jpg"/>          
            <div className = "div-contact">
              <h1 id="contactTitle">Contact Me</h1>
              <p id="contactMsg">You can reach me at: <a className="email" href="mailto:syednaim@outlook.com"> syednaim@outlook.com</a></p>
            </div>
          </div>
          </div>
    );
  }
}

export default Contact;