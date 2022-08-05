import React, { PureComponent }from "react";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import imageTwo from '../../hero-assets/chat-homepage.png';
import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';


import './portfolio-project.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";

import PortfolioPieChart from "../pie-chart/pie-chart";

export default function ChatView() {

  const data = [
    { name: 'JavaScript', value: 1000 },
  ];


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
          <h1 className="projectName">Chat<br/>React</h1>
        </div>
        </div>
        <div className="portfolioHeroContainer">
          <div className="heroImageContainer-chat">
          </div>
        </div>
        <div className="descriptionContainer">
              <div><h2 className="projectDescription-title">About Chat App React-Native</h2></div>
              <div><p className="description">Chat App (also Groupr) is a simple React-Native mobile app that allows users to Chat and update the colors/theme of the application. This app works on both iOS and Android devices using Google Firebase/Firestore and AWS hosting services.</p></div>
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
                      <li>React-Native</li>
                      <li>Expo</li>
                      <li>Gifted Chat</li>
                      <li>Google Firestore/Firebase</li>
                      <li>AWS</li>
                    </ul>
                  </Col>
            </Row>            
          </div>
        </div>
        <div className="projectLinks">
              <h2 className="linksTitle">Project Links</h2>
              <p className="linkDescription">To launch sample site, follow instructions on README!</p>
              <div className="projectLinkContainer">
                <Button target="_blank" href="https://github.com/fernandouribe86/groupr" className="projectLink-item">View in GitHub</Button>
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