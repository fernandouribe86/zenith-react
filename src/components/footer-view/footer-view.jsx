import React from "react";
import { Nav, Navbar, Button, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';

import './footer-view.scss';

export class FooterView extends React.Component{

render(){
  return (
  <Col id="footerContainer">
      <div id="footer">
        <div id="social">
          
          <div className="socialContainer">
            <img src={github} alt="GitHub logo" className="socialLogo"/>
            <p className="socialName">GitHub</p>
          </div>

          <div className="socialContainer">
            <img src={linkedin} alt="LinkedIn logo" className="socialLogo"/>
            <p className="socialName">LinkedIn</p>
          </div>

          <div className="socialContainer">
            <img src={twitter} alt="Twitter logo" className="socialLogo"/>
            <p className="socialName">Twitter</p>
          </div>

        </div>
        <p>test</p>
      </div>
     </Col>
    )
  }
}