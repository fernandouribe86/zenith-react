import React, { PureComponent }from "react";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';


import './design.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";


export default function DesignView() {


    return (
      <Container className="projectContainer">
        <Col>
          <Row className="navbarPortfolio">
            <NavbarView />
            <Hamburger />
          </Row>
        </Col>
        <div className="topBox">
          <div>
            <h1 className="projectName">Design</h1>
          </div>
        </div>
        <Row 
        className="aboutDesign"
        lg={12} md={12} sm={12} xs={12}
        >
            <Col 
            className="styleContainer"
            lg={3} md={6} sm={6} xs={12}
            >
              <h1 className="styleLabel">Bold</h1>
              <p>Fernando's style is bold, there's no getting around it. He does not shy away from bright or in-your-face colors. Your brand will make a statement and everyone will take notice. It will provoke an emotional response that will draw people in.</p>
            </Col>
            <Col 
            className="styleContainer"
            lg={3} md={6} sm={6} xs={12}
            >
              <h1 className="styleLabel">Timeless</h1>
              <p>Inspired by the architecture of Frank Lloyd Wright, the Bauhaus art movement, and Swiss Typography, Fernando's style aims to be vintage and timeless, but modern and fun. Your brand will feel established and sophisticated, yet new and exhilarating.</p>
            </Col>
            <Col 
            className="styleContainer"
            lg={3} md={6} sm={6} xs={12}
            >
              <h1 className="styleLabel">Custom</h1>
              <p>Teamwork is the number one priority. While Fernando's vision and style can be commanding, it means nothing if it cannot compliment the needs of the client. His background as a servant leader allows him to put ego aside to always seek the win-win-win.</p>
            </Col>
            <Col 
            className="styleContainer"
            lg={3} md={6} sm={6} xs={12}
            >
              <h1 className="styleLabel">Versatile</h1>
              <p>Your site, design, and branding need to work across different devices, platforms, and media. Fernando focuses on ensuring all of the above are consistent across the board with strict attention to detail and consistency.</p>
            </Col>
        </Row>
        <Row className="analysisContainer">
          <h1 className="analysisTitle">Design Analysis</h1>
        </Row>
        {/* <div className="portfolioHeroContainer">
          <div className="heroImageContainer-zenith">
          </div>
        </div>
        <div className="descriptionContainer">
              <div><h2 className="projectDescription-title">About Zenith Consulting</h2></div>
              <div><p className="description">Since maybe like the Middle Ages, there have been many differing opinions on hustle and bustle. This cannot be denied. It is my intention to sit down and play video games for several hours. First, moving around quickly, and with purpose, is a true sign of character. Secondarily, bustle(e.g. hustle) yields more product for the working types. "Hustle and bustle are like my right and left arms," said Li'l Spicy in his famous "Hustle and Bustle Are Like My Right and Left Arms" speech. Webster's defines bustle as "excited and often noisy activity; a stir." A stir, indeed. Finally, sometimes gross stuff can be funny.</p></div>
                <Image src={imageTwo} className="projectImageTwo"/>
        </div>
        <div className="languagesContainer">
          <div className="technologiesContainer">
          <h2 className="languagesTitle">Languages & Technologies</h2>
            <Row className="technologies">
              
                  <Col className="pieChart">
                    <PortfolioPieChart data={data} />
                  </Col>
                  <Col className="technologiesListContainer">
                    <ul className="techList">
                      <li>"This is my first website I build after just two weeks of my</li><li>bootcamp! I will never forget the feeling of accomplishment </li><li>when I first finished it, and even though it's a simple site,</li><li> I felt like I was learning a new superpower." </li><li>-Fernando</li>
                    </ul>
                  </Col>
            </Row>            
          </div>
        </div>
        <div className="projectLinks">
              <h2 className="linksTitle">Project Links</h2>
              <p className="linkDescription">Check out the project link below! The website is currently under re-construction and will be updated soon.</p>
              <div className="projectLinkContainer">
                <Button target="_blank" href="https://github.com/fernandouribe86/portfolio-website" className="projectLink-item">View in GitHub</Button>
                </div>
        </div> */}
        <div className="projectFooter">
              <div className="projectSocial">
                
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