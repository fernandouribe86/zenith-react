import React, { PureComponent }from "react";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import imageTwo from '../../hero-assets/pokedex-modal.png';
import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';


import './portfolio-project.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";

import PortfolioPieChart from "../pie-chart/pie-chart";

export default function PokedexView() {

  const data = [
    { name: 'JavaScript', value: 840 },
    { name: 'HTML', value: 131 },
    { name: 'CSS', value: 29 }
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
          <h1 className="projectName">Pokedex<br/>Bootstrap</h1>
        </div>
        </div>
        <div className="portfolioHeroContainer">
          <div className="heroImageContainer-pokedex">
          </div>
        </div>
        <div className="descriptionContainer">
              <div><h2 className="projectDescription-title">About Pokedex (Bootstrap)</h2></div>
              <div><p className="description">This simple Pokedex project uses the Bootstrap library to create a website that integrates the Pokemon Open API that makes it easy to search for and learn about individual Pokemon.</p></div>
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
                      <li>Boostrap</li>
                      <li>jQuery</li>
                      <li>External REST API</li>
                    </ul>
                  </Col>
            </Row>            
          </div>
        </div>
        <div className="projectLinks">
              <h2 className="linksTitle">Project Links</h2>
              <p className="linkDescription">Check out the project links below!</p>
              <div className="projectLinkContainer">
                <Button target="_blank" href="https://fernandouribe86.github.io/simple-js-app/" className="projectLink-item">Launch Site</Button>
                <Button target="_blank" href="https://pokeapi.co/api/v2/pokemon/?limit=150" className="projectLink-item">View API</Button>
                <Button target="_blank" href="https://github.com/fernandouribe86/simple-js-app" className="projectLink-item">View in GitHub</Button>
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