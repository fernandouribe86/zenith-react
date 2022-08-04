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
        <h4>Menu</h4>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a id="design" className="menu-item" href="/design">Design</a>
          <a id="pluribus" className="menu-item" href="/pluribus">Pluribus Media</a>
        <h4>Projects</h4>
          <a id="myflix-ng" className="menu-item" href="/myflix-ng">myFlix (Angular)</a>
          <a id="meet" className="menu-item" href="/meet">Meet PWA</a>
          <a id="pokedex" className="menu-item" href="/pokedex">Pokedex</a>
          <a id="myflix-rt" className="menu-item" href="/myflix-rt">myFlix (React)</a>
          <a id="chat" className="menu-item" href="/chat">React-Native Chat App</a>
          <a id="zenith" className="menu-item" href="/zenith">Zenith</a>
          <a id="portfolio" className="menu-item" href="/portfolio">Portfolio</a>
      </Menu>
     </Button>
    )
  }
}