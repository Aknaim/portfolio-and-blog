import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { getToken, removeToken, setToken } from './services/tokenService';
import logoImg from './assets/logo.PNG';
import { CSSTransitionGroup } from 'react-transition-group'

import Homepage from "./components/Homepage";
import About from './components/About';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Chess from './components/Chess';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
      isAdmin: null,
      clicked: null
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

  handleClickedResumePage = (e) => {
    this.setState({ clicked: false })
  }

  handleClickedBlogPage = (e) => {
    this.setState({ clicked: true })
  }

  render() {

    const style = {
        // margin: 0,
        // top: 0,
        // right: 60,
        // bottom:20,
        // left: 'auto',
        // position: 'fixed',
        // zIndex: 1
    };

    var Img = (
      <span class="logo">
        <a href="/">
          <img src={logoImg} height="33" width="120" style={{width:100, marginTop: -7, marginRight: 10}} alt="" /></a>
      </span>
    );

    return (
      <Router>
        <div id="container">
        <CSSTransitionGroup transitionName="navbarTransition" transitionAppear={true} transitionAppearTimeout={5000}>
          <div id="header">
            <Navbar fixedTop inverse collapseOnSelect >
              <Navbar.Header >
                <Navbar.Brand>
                  {/* {Img} */}
                  <Link to="/">Syed Naim</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse >
                <Nav style={style}>
                  <NavItem>
                    <Link to="/about">About</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/resume" onClick={this.handleClickedResumePage}>Resume</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/blog" onClick={this.handleClickedBlogPage}>Blog</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/chess">Chess</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/gallery">Gallery</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/contact">Contact</Link>
                  </NavItem>
                  <NavItem>
                    {this.state.isAdmin ? <Link to="/admin">Admin</Link> : <p />}
                  </NavItem>
                  <NavItem>
                    {this.state.user ? <button  style={{width:100, marginTop: -7}} className="btn btn-sm btn-primary btn-block" onClick={this.logout} type="button">Logout</button> : <p />}
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </CSSTransitionGroup>

        <Route exact path='/' render={() =>
          <Homepage />
        } />
        <Route exact path='/about' render={() =>
          <About />
        } />
        <Route exact path='/chess' render={() =>
          <Chess />
        } />
        <Route exact path='/resume' render={() =>
          this.state.user ?
          <Resume />
          :
          <Redirect to="/login" />
        } />
        <Route exact path='/gallery' render={() =>
          <Gallery />
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
              ( 
                this.state.clicked ? <Redirect to="/blog" /> : <Redirect to="/resume" /> 
              )
            :
              ( 
                <Login login={this.login} /> 
              )
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
        <Route path="/" render={ ( props ) => ( props.location.pathname !== "/admin") && <Footer/> }/>
          
        </div>
      </Router>
    );
  }
}

export default App;
