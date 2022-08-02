import React, { PureComponent }from "react";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import imageTwo from '../../hero-assets/amaca.png';
import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';


import './portfolio-project.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";

import PortfolioPieChart from "../pie-chart/pie-chart";

export default function PluribusView() {

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
          <h1 className="projectName">Pluribus<br/>Media</h1>
        </div>
        </div>
        <div className="portfolioHeroContainer">
          <div className="heroImageContainer-pluribus">
          </div>
        </div>
        <div className="descriptionContainer">
              <div><h2 className="projectDescription-title">About Pluribus Media</h2></div>
              <div><p className="description">Pluribus Media is a web development and marketing firm based just outside of Los Angeles, CA. Established in 1997, Pluribus is known for bringing high-quality web and marketing services to both large and small businesses, focusing on brand intent and holistic design and strategy.<br /><br/>
              Fernando has begun his web development career here as an Entry Level Developer following his coding Boot Camp. He is tasked with growing Pluribus Media's burgeoning Progressive Web App business, as well as serve as a Junior Graphic Designer.</p></div>
                <Image src={imageTwo} className="projectImageTwo"/>
        </div>
        <div className="languagesContainer">
          <div className="technologiesContainer">
          <h2 className="languagesTitle">Amaca.Tech</h2>
            <Row className="technologies">
                  <Col className="technologiesListContainer">
                    <p className="techList amaca">
                      Fernando will also be working on www.amaca.tech, a growing site operated by Pluribus Media that is bringing text encryption to the masses!
                    </p>
                  </Col>
            </Row>            
          </div>
        </div>
        <div className="projectLinks">
              <h2 className="linksTitle">Project Links</h2>
              <p className="linkDescription">Check out the project links below. Feel free to create an account and add a few movies to your favorites!</p>
              <div className="projectLinkContainer">
                <Button target="_blank" href="https://www.pluribusmedia.com" className="projectLink-item">Visit Pluribus</Button>
                <Button target="_blank" href="https://www.amaca.tech" className="projectLink-item">Visit AMACA</Button>
                </div>
        </div>
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