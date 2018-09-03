import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { getToken, removeToken, setToken } from './services/tokenService';

import Homepage from "./components/Homepage";
import About from './components/About';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
      isAdmin: null
    }
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  login = (data) => {
    setToken(data.payload);
    this.getCurrentUser();
    this.setState({ isAdmin: data.isAdmin })
  }

  logout = () => {
    removeToken();
    this.setState({ user: null });
    <Redirect to="/login" />
  }

  getCurrentUser = () => {
    this.setState({ user: getToken() })
  }

  render() {
    return (
      <Router>
        <div id="container">
          <div id="header">
            <Navbar fixedTop inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/">Syed Naim</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem>
                    <Link to="/about">About</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/resume">Resume</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/blog">Blog</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/contact">Contact</Link>
                  </NavItem>
                  <NavItem>
                    {this.state.isAdmin ? <Link to="/admin">Admin</Link> : <p />}
                  </NavItem>
                  <NavItem>
                    {this.state.user ? <button className="btn btn-sm btn-primary btn-block" onClick={this.logout} type="button">Logout</button> : <p />}
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>

          <Route exact path='/' render={() =>
            <Homepage />
          } />
          <Route exact path='/about' render={() =>
            <About />
          } />
          <Route exact path='/resume' render={() =>
            // this.state.user ?
            <Resume />
            // :
            // <Redirect to="/login" />
          } />
          <Route exact path='/contact' render={() =>
            <Contact />
          } />
          <Route exact path='/blog' render={() =>
            this.state.user ?
              <Blog />
              :
              <Redirect to="/login" />
          } />
          <Route exact path='/login' render={() =>
            this.state.user ?
              <Redirect to="/blog" />
              :
              <Login login={this.login} />
          } />
          <Route exact path='/signup' render={() =>
            this.state.user ?
              <Redirect to="/" />
              :
              <Signup />
          } />
          <Route exact path='/admin' render={() =>
            this.state.isAdmin ?
              <Admin user={this.state.user} />
              :
              <Redirect to="/login" />
          } />
          <Route path="/" render={ ( props ) => ( props.location.pathname !== "/admin") && ( props.location.pathname !== "/resume") && <Footer/> }/>
          
        </div>
      </Router>
    );
  }
}

export default App;
