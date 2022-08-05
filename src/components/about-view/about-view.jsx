import React, { PureComponent }from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FooterView } from "../footer-view/footer-view";
import { Image } from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';
import headshot from '../../hero-assets/fernando-headhsot.jpg';


import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import imageOne from '../../hero-assets/myflix-ng-main-2.png';
import imageTwo from '../../hero-assets/myflix-ng-profile.png';
import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';

import cv from '../../hero-assets/fernando-uribe-cv-2.pdf';

import './about-view.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";

import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

import PortfolioPieChart from "../pie-chart/pie-chart";
import SkillsTree from "../tree-map/tree-map";

export default function AboutView() {


    return (
      <Container className="aboutContainer">
        <div>
          <Row className="navbarAbout">
            <NavbarView />
            <Hamburger />
          </Row>
        </div>
        <Row className="aboutDetails">
          
            {/* Circular Image */}
            <Col id="aboutImageContainer" lg={6} md={6} sm={12} xs={12}>
              <div id="aboutHeroImage">
              </div>
            </Col>

            {/* Text Area */}
            <Col lg={6} md={6} sm={12} xs={12} className="aboutTextContainer">
              <h1 id="aboutHeroName">Meet<br/>Fernando</h1>
              <p className="aboutText">
                Born and raised in the greater Los Angeles area, Fernando is a multi-passionate that can't fit in just one box.
                <br/>
                <br/>
                He's a multi-instrumentalist, an automtive industry expert, a tech executive, an emeritus Financial Advisor, a graphic design, an amateur woodworker, and now -- a junior Web Developer.
                <br/>
                <br/>
                Fernando hopes that he can help businesses upgrade their technology stacks to the modern era, as well as develop marketing and branding strategies that provoke real emotion for all stakeholders. Welcome to the site!</p>
            </Col>
        </Row>

        <Row id="techSkills" lg={12} md={12} sm={12} xs={12}>
          <Col className="langContainer">
            <Carousel variant="dark" id="skillsCoursel" interval={7500}>
              <Carousel.Item className="carouselItem">
                      <h3 className="carouselCaption">Languages</h3>
                        <ul className="carouselList">
                          <li className="carouselList-item">HTML</li>
                          <li className="carouselList-item">SCSS/CSS</li>
                          <li className="carouselList-item">JavaScript</li>
                          <li className="carouselList-item">TypeScript</li>
                        </ul>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <h3 className="carouselCaption">Libraries & Frameworks</h3>
                        <ul className="carouselList">
                          <li  className="carouselList-item">React/React-Native</li>
                          <li className="carouselList-item">Angular/Angular Material</li>
                          <li className="carouselList-item">Bootstrap/React-Bootstrap</li>
                          <li className="carouselList-item">jQuery</li>
                        </ul>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <h3 className="carouselCaption">Technologies</h3>
                        <ul className="carouselList">
                          <li className="carouselList-item">Node.js</li>
                          <li className="carouselList-item">AWS</li>
                          <li className="carouselList-item">Google Firebase/Firestore</li>
                          <li className="carouselList-item">MongoDB/SQL</li>
                          <li className="carouselList-item">Express</li>
                          <li className="carouselList-item">REST API</li>
                          <li className="carouselList-item">Progressive WebApps</li>
                          <li className="carouselList-item">TDD/BDD/ATDD/Integration Testing</li>
                        </ul>
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <h3 className="carouselCaption">Additional Skills</h3>
                        <ul className="carouselList">
                          <li className="carouselList-item">VSCode</li>
                          <li className="carouselList-item">Postman</li>
                          <li className="carouselList-item">PostgreSQL</li>
                          <li className="carouselList-item">GitHub</li>
                          <li className="carouselList-item">Trello/JIRA</li>
                          <li className="carouselList-item">Agile/Scrum</li>
                        </ul>
                </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="aboutStrengths">
            <h3 className="strengthsHeader">ATTRIBUTES</h3>
            <SkillsTree />
          </Col>
        </Row>
        <Row>
          <Col id="experience">
          <h2>Experience</h2>
          <p>
            <ul>
              <li>Web Developer: 2022 - Pres.</li>
              <li>Graphic Design: 2002 - Pres.</li>
              <li>VP of Operations: 2018 - Pres.</li>
              <li>Client Succes Manager, Major Accounts: 2014-2018</li>
              <li>Financial Planner: 2010-2014</li>
              <li>BMW Client Advisor: 2010</li>
            </ul>
          </p>
          <button id="cv">
            <a href={cv} download>Download CV</a>
          </button>
          </Col>
        </Row> 
        <div className="aboutFooter">
              <div className="aboutSocial">
                
                <Button className="socialContainer socialContainerabout" target="_blank" href="https://github.com/fernandouribe86">
                  <img src={github} alt="GitHub logo" className="socialLogo aboutFooterLogo"/>
                  <p className="aboutFooter-social">GitHub</p>
                </Button>

                <Button className="socialContainer socialContainerabout" target="_blank" href="https://www.linkedin.com/in/fauribe/">
                  <img src={linkedin} alt="LinkedIn logo" className="socialLogo aboutFooterLogo"/>
                  <p className="aboutFooter-social">LinkedIn</p>
                </Button>

                <Button className="socialContainer socialContainerabout" target="_blank" href="https://www.twitter.com/fernandouribe">
                  <img src={twitter} alt="Twitter logo" className="socialLogo aboutFooterLogo"/>
                  <p className="aboutFooter-social">Twitter</p>
                </Button>

              </div>
              <p className="copyright-about">© 2022, Fernando Uribe Consulting Company. All rights reserved.</p>
            </div>
      </Container>
    )
}