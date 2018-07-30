import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { getToken, removeToken, setToken} from './services/tokenService';

import Homepage from "./components/Homepage";
import About from './components/About';
import Blog from './components/Blog';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      user: null
    } 
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  login = (token) => {
    setToken(token);
    this.getCurrentUser();
  }

  logout = (token) => {
    removeToken();
    this.setState({user: null});
  }

  getCurrentUser = () =>{
    this.setState({user: getToken()})
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar inverse collapseOnSelect>
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
                  <Link to="/blog">Blog</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">Contact</Link>
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
          <Route exact path='/contact' render={() =>
              <Contact/>
          } />
          <Route exact path='/blog' render={() =>
              this.state.user?
              <Blog/>
              :
              <Redirect to="/login" />
          } />
          <Route exact path='/login' render={() =>
              this.state.user?
              <Redirect to="/blog"/>
              :
              <Login login={this.login}/>
          } />
          <Route exact path='/signup' render={() =>
              this.state.user?
              <Redirect to="/"/>
              :
              <Signup/>
          } />
        </div>
      </Router>    
    );
  }
}

export default App;
