import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FooterView } from "../footer-view/footer-view";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './myflix-ng.scss';

import {MainView} from "../main-view/main-view";
import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";


export default function MyflixNg() {

    return (
      <Container>
        <Col>
          <Row className="navbarPortfolio">
            <NavbarView />
            <Hamburger />
          </Row>
        </Col>
          <div className="portfolioContainer">
            <div className="portfolioMain">

              <Image className="projectImage" src="https://via.placeholder.com/300x200" />
              <h1 className="projectName">MyFlix (Angular)</h1>
            </div>
            <div className="projectDetails">
              
              <div className="projectDescription">
                <h2 className="aboutTitle">About MyFlix (Angular)</h2>
                <p>
                Since maybe like the Middle Ages, there have been many
                differing opinions on hustle and bustle. This cannot be
                denied. It is my intention to sit down and play video games
                for several hours.
                
                First, moving around quickly, and with purpose, is a
                true sign of character. Secondarily, bustle(e.g. hustle)
                yields more product for the working types. "Hustle and bustle
                are like my right and left arms," said Li'l Spicy in his famous
                "Hustle and Bustle Are Like My Right and Left Arms" speech.
                Webster's defines bustle as "excited and often noisy activity;
                a stir." A stir, indeed. Finally, sometimes gross stuff can
                be funny.
              </p>
              </div>
                <Image className="projectImageTwo" src="https://via.placeholder.com/300x200" />
            </div>
            <div className="projectTechnologies">
              <div className="languages">
                <h2 className="technologiesTitle">Languages & Technologies</h2>
                <div>Languages Chart goes Here</div>
                <Image className="projectChart" src="https://via.placeholder.com/250x250" />
              </div>
              <div className="technologies">
                <h4 className="techUsed">Technologies Used</h4>
                <ul className="technologiesList">
                  <li>Tech 1</li>
                  <li>Tech 2</li>
                  <li>Tech 3</li>
                  <li>Tech 4</li>
                  <li>Tech 5</li>
                </ul>
              </div>
            </div>
            <div className="projectLinks">
              <h1 className="linksTitle">Project Links</h1>
              <p className="linkDescription">Check out the project links below. Feel free to create an account!</p>
              <div className="projectLinkContainer">
                <button target="_blank" href="#" className="projectLink-item">Launch Site</button>
                <button target="_blank" href="#" className="projectLink-item">README/External API</button>
                <button target="_blank" href="#" className="projectLink-item">GitHub Repository</button>
              </div>
            </div>
            <div className="footer">
            
            </div>
          </div>
      </Container>
    )
}