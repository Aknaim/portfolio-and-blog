import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signup.css';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      password:'',
      redirect: false
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange= (e) => {
    this.setState({ password: e.target.value })
  }

  handleNameChange= (e) => {
    this.setState({ name: e.target.value })
  }

  handleLoginChange = () => {
    this.setState({ redirect: true });
  }

  signUp() {
    axios.post('/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { redirect } = this.state;

    if(redirect){
      return <Redirect to="/login"/>;
    }

    return (
      <div className="container-fluid" id="signupBackground">
        <div className = "div-signup">
          <form className="form-signup">
            {/* <h2 className="form-signup-heading">Please Sign Up</h2> */}
            <label for="inputName" className="sr-only">Name</label>
            <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
          </form>
          <div id="signin">
            <br/>
            <p>Already have an account?</p>
            <button className="btn btn-sm btn-primary btn-block" onClick={this.handleLoginChange} type="button">Sign in</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup;