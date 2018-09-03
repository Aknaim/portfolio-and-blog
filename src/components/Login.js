import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import '../styles/Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSignupChange = () => {
    this.setState({ redirect: true });
  }

  setUser = async () => {
    try {
      const response = await axios.post("/users/login", {
        email: this.state.email,
        password: this.state.password
      });
      this.props.login(response.data);
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/signup" />;
    }

    return (
      <div className="container-fluid" id="signInBackground">
        <div className="div-signin">
          <form className="form-signin">
            {/* <h2 className="form-signin-heading"> Please Sign In</h2> */}
            <label for="inputEmail" className="sr-only"> Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only"> Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" onClick={this.setUser} type="button"> Sign in</button>
          </form>
          <div id="signup">
            <br />
            <p>Don't have an account yet?</p>
            <button className="btn btn-sm btn-primary btn-block" onClick={this.handleSignupChange} type="button"> Sign up!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;