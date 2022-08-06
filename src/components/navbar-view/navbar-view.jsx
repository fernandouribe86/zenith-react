import React from "react";
import { Nav, Navbar, Button, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Hamburger } from "../hamburger/hamburger";

import { GiHamburgerMenu } from 'react-icons';

import logo from '../../hero-assets/logo.png';

import { stack as Menu } from 'react-burger-menu';

import './navbar-view.scss';

export class NavbarView extends React.Component{

render(){
  return (
  <Col id="navbarContainer">
      <div id="navbar">
        <Link id="hero" to="/">
              <img id ="heroLogo" src={logo} alt="Fernando Uribe Logo" />
          <div id="fernandoName">
            fernando a. uribe
          </div>
          <div id="fernandoNameShort">
            f.a.u.
          </div>
        </Link>
        {/* <Hamburger /> */}
      </div>
     </Col>
    )
  }
}