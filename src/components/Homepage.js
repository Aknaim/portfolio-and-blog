import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
        <div>
            <img className="profile" src={require("../assets/beautiful-swiss-alps-mountains-night-landscape-website-header.jpg")} alt="profile" />;
        </div>
    );
  }
}

export default Homepage;