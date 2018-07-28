import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div style={styles.bodyText}>
            About Me
        </div>
    );
  }
}

export default About;

const styles={
    bodyText: {
        color: "#FFFFFF"
    }
}