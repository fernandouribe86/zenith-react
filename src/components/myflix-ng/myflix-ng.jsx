import React, { PureComponent }from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FooterView } from "../footer-view/footer-view";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import imageOne from '../../hero-assets/myflix-ng-main-2.png';
import imageTwo from '../../hero-assets/myflix-ng-profile.png';
import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';

import { SkillsMap } from "../tree-map/tree-map";

import './myflix-ng.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";

import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

import PortfolioPieChart from "../pie-chart/pie-chart";

export default function MyflixNg() {

  const data = [
    { name: 'TypeScript', value: 638 },
    { name: 'HTML', value: 183 },
    { name: 'SCSS', value: 159 },
    { name: 'JavaScript', value: 20 },
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
          <h1 className="projectName">MyFlix<br/>Angular</h1>
        </div>
        </div>
        <div className="portfolioHeroContainer">
          <div className="heroImageContainer">
          </div>
        </div>
        <div className="descriptionContainer">
              <div><h2 className="projectDescription-title">About MyFlix Angular</h2></div>
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
                      <li>MEAN (MongoDB, Express, Angular, Node.js)</li>
                      <li>Angular Material UI</li>
                      <li>REST API</li>
                      <li>TypeDoc</li>
                    </ul>
                  </Col>
            </Row>            
          </div>
        </div>
        <div className="projectLinks">
              <h2 className="linksTitle">Project Links</h2>
              <p className="linkDescription">Check out the project links below. Feel free to create an account and add a few movies to your favorites!</p>
              <div className="projectLinkContainer">
                <Button target="_blank" href="https://myflix-angular.netlify.app/" className="projectLink-item">Launch Site</Button>
                <Button target="_blank" href="https://github.com/fernandouribe86/movie_api_2/blob/main/index.js" className="projectLink-item">View API</Button>
                <Button target="_blank" href="https://github.com/fernandouribe86/myFlix-Angular-client" className="projectLink-item">View in GitHub</Button>
                </div>
        </div>
        <div className="projectFooter">
              <div className="projectSocial">
                
                <Button className="socialContainer socialContainerProject" target="_blank" href="https://github.com/fernandouribe86">
                  <img src={github} alt="GitHub logo" className="socialLogo projectFooterLogo"/>
                  <p className="socialName projectFooter-social">GitHub</p>
                </Button>

                <Button className="socialContainer socialContainerProject" target="_blank" href="https://www.linkedin.com/in/fauribe/">
                  <img src={linkedin} alt="LinkedIn logo" className="socialLogo projectFooterLogo"/>
                  <p className="socialName projectFooter-social">LinkedIn</p>
                </Button>

                <Button className="socialContainer socialContainerProject" target="_blank" href="https://www.twitter.com/fernandouribe">
                  <img src={twitter} alt="Twitter logo" className="socialLogo projectFooterLogo"/>
                  <p className="socialName projectFooter-social">Twitter</p>
                </Button>

              </div>
              <p className="copyright projectFooter-social">© 2022, Fernando Uribe Consulting Company. All rights reserved.</p>
            </div>
      </Container>
    )
}