import React, { Component } from 'react';
import { container } from "react-bootstrap";
import '../styles/SocialMedia.css';

class SocialMedia extends Component {
  render() {
    return (
      <div class="col-md-12">
        <ul class="social-network social-circle">
          <li><a href="http://www.linkedin.com/in/syed-naim" target="_blank" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
          <li><a href="https://github.com/Aknaim" target="_blank" class="icoGithub" title="Github"><i class="fa fa-github"></i></a></li>
          <li><a href="https://lichess.org/@/Aknaim" target="_blank" class="icoChessKnight" title="Lichess"><i class="fa fa-delicious" aria-hidden="true"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCiNl5QZ-xkSQBECb-bUaOKg?view_as=subscriber" target="_blank" class="icoYoutube" title="Youtube"><i class="fa fa-youtube"></i></a></li>
          <li><a href="https://www.twitch.tv/aknaim" target="_blank" class="icoTwitch" title="Twitch"><i class="fa fa-twitch" aria-hidden="true"></i></a></li>
          <a id="backToTop" href="#header">Return to Top</a>
          {/* <i class="fa fa-arrow-up" aria-hidden="true"></i> */}
        </ul>
      </div>
    );
  }
}

export default SocialMedia;