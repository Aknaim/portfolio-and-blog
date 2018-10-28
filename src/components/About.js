import React, { Component } from 'react';
import '../styles/About.css';
import icelandPortrait from '../assets/icelandPortrait.jpg'

class About extends Component {
    render() {
        return (
            <div id="bodyAbout">
                    <div class="col-md-6 col-md-offset-3">
                        <div class="w3-padding-64 w3-center">
                        <h1>About Me</h1>
                        <img src={icelandPortrait} class="w3-margin w3-circle" alt="Person"/>
                        <div class="w3-left-align w3-padding-large">
                        <h4>Intro</h4>
                            <p>Hi, my name is Syed Naim and I am Computer Engineering Graduate from McMaster University.</p>
                            <br />
                            <h4>Currently</h4>
                            <p>I am currently working as a Project Engineer at Evertz Microsystems Ltd.</p>
                            <br />
                            <h4>I Like</h4>
                            <ul>
                                <li>Chess (challenge me <a className="lichess" href="https://lichess.org/@/Aknaim" target="_blank"> here!</a>)</li>
                                <li>Video Games</li>
                                <li>Soccer</li>
                                <li>Cooking</li>
                                <li>Tutoring (I tutor grade 12 and below in Math, feel free to contact me: <a className="email" href="mailto:syednaim@outlook.com"> syednaim@outlook.com</a>)</li>
                            </ul>
                            <br />
                            <h4>I Dream Of</h4>
                            <ul>
                                <li>Travelling the world</li>
                                <li>Enabling a brighter future</li>
                                <li>No one checking my commit history ;)</li>
                            </ul>
                        </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default About;