import React, { PureComponent }from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FooterView } from "../footer-view/footer-view";
import { Image } from "react-bootstrap";

// import 'bootstrap/dist/css/bootstrap.min.css';


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

import './about-view.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";

import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

import PortfolioPieChart from "../pie-chart/pie-chart";

export default function AboutView() {


    return (
      <Container className="aboutContainer">
        <div>
          <Row className="navbarAbout">
            <NavbarView />
            <Hamburger />
          </Row>
        </div>
        <div className="aboutTopBox">
        <div>
          <h1 id="aboutHeroName">Meet<br/>Fernando</h1>
        </div>
        </div>
        <Col>
          <Col className="aboutDetails">
            <Col id="aboutImageContainer" lg={6} md={6} sm={12} xs={12}>
              <div id="aboutHeroImage"></div>
            </Col>
            <Col className="aboutText" lg={6} md={6} sm={12} xs={12}>Since maybe like the Middle Ages, there have been many differing opinions on hustle and bustle. This cannot be denied. It is my intention to sit down and play video games for several hours. First, moving around quickly, and with purpose, is a true sign of character. Secondarily, bustle(e.g. hustle) yields more product for the working types. "Hustle and bustle are like my right and left arms," said Li'l Spicy in his famous "Hustle and Bustle Are Like My Right and Left Arms" speech. Webster's defines bustle as "excited and often noisy activity; a stir." A stir, indeed. Finally, sometimes gross stuff can be funny.
            </Col>
          </Col>
        </Col>

        <Col id="techSkills">
          <Col className="langContainer">
            <Carousel id="skillsCoursel" interval={10000}>
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
                    <h3 className="carouselCaption">Libraries/Frameworks</h3>
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
                    <h3 className="carouselCaption">Additional Resources</h3>
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
            <h3>Strengths</h3>
            <ul>
              <li>ay</li>
              <li>ay</li>
              <li>ay</li>
              <li>ay</li>
              <li>ay</li>
            </ul>
          </Col>
        </Col>        
       <FooterView />
      </Container>
    )
}