import React, { Component } from 'react';
import '../styles/Resume.css';

class Resume extends Component {
    render() {
        return (
            <div id="bodyResume">
                <iframe id="resumeEmbed" src="https://drive.google.com/file/d/1-mMkLSyJH62KL_C45f9lyuaIwoQXUkDc/preview" width="1000" height="1100"/>
                <div className="col-sm-8 col-sm-offset-2" id="professionalDevelopment">
                    <br/>
                    <h1 id="professionalDevelopmentHeader">Professional Development</h1>
                    <h3>Courses:</h3>
                    <ol>
                        <li><a className="lichess" href="https://www.udemy.com/the-complete-nodejs-developer-course-2" target="_blank">The Complete Node.js Developer Course (2nd Edition)</a> --- In Progress</li>
                        <li><a className="lichess" href="https://www.udemy.com/ui-ux-web-design-using-adobe-xd/" target="_blank">Web UI UX Design using Adobe XD - Adobe Experience Design </a> --- In Progress</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Resume;