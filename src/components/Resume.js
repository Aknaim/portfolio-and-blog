import React, { Component } from 'react';
import '../styles/Resume.css';

class Resume extends Component {
    render() {
        return (
            <div id="resumeDiv">
                <iframe id="resumeEmbed" src="https://drive.google.com/file/d/1-mMkLSyJH62KL_C45f9lyuaIwoQXUkDc/preview" width="1000" height="1000"/>
            </div>
        );
    }
}

export default Resume;