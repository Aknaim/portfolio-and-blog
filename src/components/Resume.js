import React, { Component } from 'react';
import '../styles/Resume.css';

class Resume extends Component {
    render() {
        return (
            <div id="resumeDiv">
                <iframe id="resumeEmbed" src="https://drive.google.com/file/d/1AQOFu7HmzctXSl3zCXA14G8xAxIqc0Qt/preview" width="1000" height="1000"/>
            </div>
        );
    }
}

export default Resume;