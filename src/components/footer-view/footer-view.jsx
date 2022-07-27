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
          
          <Button className="socialContainer" target="_blank" href="https://github.com/fernandouribe86">
            <img src={github} alt="GitHub logo" className="socialLogo"/>
            <p className="socialName">GitHub</p>
          </Button>

          <Button className="socialContainer" target="_blank" href="https://www.linkedin.com/in/fauribe/">
            <img src={linkedin} alt="LinkedIn logo" className="socialLogo"/>
            <p className="socialName">LinkedIn</p>
          </Button>

          <Button className="socialContainer" target="_blank" href="https://www.twitter.com/fernandouribe">
            <img src={twitter} alt="Twitter logo" className="socialLogo"/>
            <p className="socialName">Twitter</p>
          </Button>

        </div>
        <p className="copyright">© 2022, Fernando Uribe Consulting Company. All rights reserved.</p>
      </div>
     </Col>
    )
  }
}