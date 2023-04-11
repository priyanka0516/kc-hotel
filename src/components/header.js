import React, { Component} from "react";
import {Container,Nav,Navbar}from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css';
import'./responsive.css';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false
    };
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }
  render() {
    return (
        <>
          <Navbar bg="white" variant="dark" sticky="top" expand="lg" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="navbar-brand">
                  <img src={require('./../images/logo2.png')}alt="" /></Link>
              </Navbar.Brand>         
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto" onClick={this.setNavClose}>
                    <Link to={"/"} id="nav">Home</Link>
                    <Link to={"/about"}id="nav">About</Link>
                    <Link to={"/menu"} id="nav">Menu</Link>
                    <Link to={"/gallery"} id="nav">Gallery</Link>
                    <Link to={"/contact"}id="nav">Contact</Link>
                    <Link id="nav">Get Started</Link>
                  </Nav>          
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}
}
export default Header;