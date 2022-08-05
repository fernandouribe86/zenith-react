import React, { PureComponent }from "react";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';

import logoF from '../../hero-assets/logo-f.png';
import logoFace from '../../hero-assets/logo-face.png';
import logoCurly from '../../hero-assets/logo-curly.png';

import brandGuide from '../../hero-assets/example-brand-guide.pdf';

import './design.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";


export default function DesignView() {


    return (
      <Container className="projectContainer">
        <Col>
          <Row className="navbarDesign">
            <NavbarView />
            <Hamburger />
          </Row>
        </Col>
        <div className="topBox-design">
          <div>
            <h1 className="designName">Design</h1>
          </div>
        </div>
        <Row 
        className="aboutDesign"
        lg={12} md={12} sm={12} xs={12}
        >
          <Row id="styleContainer">
            <Col lg={5} md={5} sm={5} xs={3} className="boxLeft"></Col>
            <Col className="styleLeft">
            <h1 className="styleTitle">BOLD</h1>
            <p className="styleDescription">Fernando's style is bold, there's no getting around it. He does not shy away from bright or in-your-face colors. Your brand will make a statement and everyone will take notice. It will provoke an emotional response that will draw people in.</p>
            </Col>
          </Row>
          <Row>

            <Col className="styleRight">
            <h1 className="styleTitle-right">Timeless</h1>
            <p className="styleDescription-right">Inspired by the architecture of Frank Lloyd Wright, the Bauhaus art movement, and Swiss Typography, Fernando's style aims to be vintage and timeless, but modern and fun. Your brand will feel established and sophisticated, yet new and exhilarating.</p>
            </Col>
            <Col lg={4} md={4} sm={4} xs={3} className="boxRight"></Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={3} xs={3} className="boxLeft"></Col>
            <Col className="styleLeft">
            <h1 className="styleTitle">Custom</h1>
            <p className="styleDescription">Teamwork is the number one priority. While Fernando's vision and style can be commanding, it means nothing if it cannot compliment the needs of the client. His background as a servant leader allows him to put ego aside to always seek the win-win-win.</p>
            </Col>
          </Row>
          <Row>

            <Col className="styleRight">
            <h1 className="styleTitle-right">Versatile</h1>
            <p className="styleDescription-right">Your site, design, and branding need to work across different devices, platforms, and media. Fernando focuses on ensuring all of the above are consistent across the board with strict attention to detail and consistency.</p>
            </Col>
            <Col lg={5} md={5} sm={5} xs={3} className="boxRight"></Col>
          </Row>
        </Row>
        <Row className="analysisContainer">
          <h1 className="analysisTitle">Design Analysis</h1>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Image src={logoFace} alt="logo Face" className="designLogo" />
            <p className="analysisText">The first thing your brain notices is the face in the logo. Fernando wants your clients to connect with your brand on a personal level in order to bring out that deeper undestanding of their needs, wants, and desires. 
            <br/>
            <br/>
            We also want to remember that your and my end-users are always people, and that we must design with the needs and tendencies of real human being, not hypotheticals.
            </p>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Image src={logoF} alt="logo F" className="designLogo" />
            <p className="analysisText">Next, your eyes notice the “F”. This is a reflection of Fernando’s personal mission to always look for the profound, unseen meaning in design and development.
            <br />
            <br />
            This is also meant to emphasize Fernando’s commanding aesthetic in his work. While collaboration is always the priority, he strives to work with clients that share his bold design visions that inspire an emotional response.
            </p>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <Image src={logoCurly} alt="logo Face" className="designLogo" />
            <p className="analysisText">Lastly, you’ll notice the “curly brace” in the logo. This highlights Fernando’s web development background as the forward-facing part of the company. 
            <br/>
            <br/>
            In web development, the curly brace {} is often used to evaluate an expression in JavaScript, and thus continue’s Fernando’s desire to provoke emotional responses through his work.


            </p>
          </Col>
          <Row className="downloadContainer">
            <p className="downloadDescription">Check out the style guide below to see how our team can create a uniform design language for you.</p>
            <button id="downloadButton">
              <a href={brandGuide} download>
                Download Example Brand Guide
              </a>
            </button>
          </Row>
        </Row>
        <div className="designFooter">
              <div className="designSocial">
                
                <Button className="socialContainer socialContainerProject" target="_blank" href="https://github.com/fernandouribe86">
                  <img src={github} alt="GitHub logo" className="socialLogo projectFooterLogo"/>
                  <p className="projectFooter-social">GitHub</p>
                </Button>

                <Button className="socialContainer socialContainerProject" target="_blank" href="https://www.linkedin.com/in/fauribe/">
                  <img src={linkedin} alt="LinkedIn logo" className="socialLogo projectFooterLogo"/>
                  <p className="projectFooter-social">LinkedIn</p>
                </Button>

                <Button className="socialContainer socialContainerProject" target="_blank" href="https://www.twitter.com/fernandouribe">
                  <img src={twitter} alt="Twitter logo" className="socialLogo projectFooterLogo"/>
                  <p className="projectFooter-social">Twitter</p>
                </Button>

              </div>
              <p className="copyright-project">© 2022, Fernando Uribe Consulting Company. All rights reserved.</p>
            </div>
      </Container>
    )
}