import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Homepage from "./components/Homepage";
import About from './components/About';
import Blog from './components/Blog';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
              <Link to="/">SN</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem>
                  <Link to="/about">About</Link>
              </NavItem>
                <NavItem>
                  <Link to="/blog">Blog</Link>
              </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path='/' render={() =>
              <Homepage/>
          } />
          <Route exact path='/about' render={() =>
              <About/>
          } />
          <Route exact path='/blog' render={() =>
              <Blog/>
          } />
        </div>
      </Router>    
    );
  }
}

export default App;
