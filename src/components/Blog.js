import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Blog.css';

class Blog extends Component {
    render() {
        return (
            <div class="row" style={styles.bodyText}>
                <div class="col-sm-2 text-center">
                    <img src="bandmember.jpg" class="img-circle" height="65" width="65" alt="Avatar" />
                </div>
                <div class="col-sm-10">
                    <h4>Anja <small>Sep 29, 2015, 9:12 PM</small></h4>
                    <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <br />
                </div>
                <div class="col-sm-2 text-center">
                    <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar" />
                </div>
                <div class="col-sm-10">
                    <h4>John Row <small>Sep 25, 2015, 8:25 PM</small></h4>
                    <p>I am so happy for you man! Finally. I am looking forward to read about your trendy life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <br />
                    <p><span class="badge">1</span> Comment:</p><br />
                    <div class="row">
                        <div class="col-sm-2 text-center">
                            <img src="bird.jpg" class="img-circle" height="65" width="65" alt="Avatar" />
                        </div>
                        <div class="col-xs-10">
                            <h4>Nested Bro <small>Sep 25, 2015, 8:28 PM</small></h4>
                            <p>Me too! WOW!</p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;

const styles = {
    bodyText: {
        color: "#FFFFFF"
    }
}