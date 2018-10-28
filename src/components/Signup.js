import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      redirectToLogin: false,
      redirectToBlog: false
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleLoginChange = () => {
    this.setState({ redirectToLogin: true });
  }

  signUp = async () => {
    try {
      const response = await axios.post("/users/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      });
      this.setState({ redirectToBlog: true });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { redirectToLogin } = this.state;
    const { redirectToBlog } = this.state;

    if (redirectToLogin || redirectToBlog) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container-fluid-signup" >
        <div id="signupBackground">
          <div className="div-signup">
            <form className="form-signup">
              <label for="inputName" className="sr-only">Name</label>
              <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
              <label for="inputEmail" className="sr-only">Email address</label>
              <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
              <label for="inputPassword" className="sr-only">Password</label>
              <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
              <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
            </form>
            <div id="signin">
              <br />
              <p>Already have an account?</p>
              <button className="btn btn-sm btn-primary btn-block" onClick={this.handleLoginChange} type="button">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;