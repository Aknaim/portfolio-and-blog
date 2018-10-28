import React, { Component } from 'react';
import { container } from "react-bootstrap";
import '../styles/Homepage.css';
import { CSSTransitionGroup } from 'react-transition-group'
import homepageImage from '../assets/homepageImage.jpg'

import SocialMedia from './SocialMedia.js';

class Homepage extends Component {
  render() {
    return (
      <div id="body">
        <CSSTransitionGroup transitionName="homepageTransition" transitionAppear={true} transitionAppearTimeout={3000} transitionEnter={false} transitionEnterTimeout={false}>
        <div class="container-fluid">
            <img class="homepageImg" src={homepageImage}/>          
            <h1 class="centered" id="welcomeMsg">Portfolio and Blog</h1>        
        </div>
        </CSSTransitionGroup>
      </div>

    );
  }
}

export default Homepage;