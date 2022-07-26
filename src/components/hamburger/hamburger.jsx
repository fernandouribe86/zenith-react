import React from "react";
import { Nav, Navbar, Button, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from 'react-icons';

import { stack as Menu } from 'react-burger-menu';

import './hamburger.scss';

export class Hamburger extends React.Component{

render(){
  return (
  <Button id="hamburger">
      <Menu id="hamburgerMenu" right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
     </Button>
    )
  }
}