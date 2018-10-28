import React, { Component } from 'react';
import { container } from "react-bootstrap";
import '../styles/Footer.css';
import { CSSTransitionGroup } from 'react-transition-group'

import SocialMedia from './SocialMedia.js';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <CSSTransitionGroup transitionName="footerTransition" transitionAppear={true} transitionAppearTimeout={5000}>
                <p>Built using ES6 and React.js       Source code available <a id="sourceCode" href="https://github.com/Aknaim/portfolio-and-blog" target="_blank"> here.</a></p>
                <div><SocialMedia /></div>
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default Footer;