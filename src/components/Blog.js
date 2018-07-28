import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
        <div style={styles.bodyText}>
            My Blog
        </div>
    );
  }
}

export default Blog;

const styles={
    bodyText: {
        color: "#FFFFFF"
    }
}