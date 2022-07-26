import React, { PureComponent }from "react";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import imageTwo from '../../hero-assets/myflix-react-movie-view.png';
import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';


import './portfolio-project.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";

import PortfolioPieChart from "../pie-chart/pie-chart";

export default function MyflixReact() {

  const data = [
    { name: 'JavaScript', value: 716 },
    { name: 'HTML', value: 262 },
    { name: 'SCSS', value: 22 },
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
          <h1 className="projectName">MyFlix<br/>React</h1>
        </div>
        </div>
        <div className="portfolioHeroContainer">
          <div className="heroImageContainer-myflixReact">
          </div>
        </div>
        <div className="descriptionContainer">
              <div><h2 className="projectDescription-title">About MyFlix React</h2></div>
              <div><p className="description">myFlix (Angular) is a project that utilizes an external web REST API (also created by Fernando) to show a list of Fernando's top 10 favorite movies. The styling cues are modeled after Card elements in React, as well as the old Cinerama theater of Los Angeles. In this project, a user can create/edit/delete an account, view movie details, and add movies to their favorites.</p></div>
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
                      <li>MERN (MongoDB, Express, React, Node.js)</li>
                      <li>React Bootstrap</li>
                      <li>REST API</li>
                      <li>React Hooks</li>
                    </ul>
                  </Col>
            </Row>            
          </div>
        </div>
        <div className="projectLinks">
              <h2 className="linksTitle">Project Links</h2>
              <p className="linkDescription">Check out the project links below. Feel free to create an account and add a few movies to your favorites!</p>
              <div className="projectLinkContainer">
                <Button target="_blank" href="https://steady-raindrop-99ccc8.netlify.app/" className="projectLink-item">Launch Site</Button>
                <Button target="_blank" href="https://github.com/fernandouribe86/movie_api_2/blob/main/index.js" className="projectLink-item">View API</Button>
                <Button target="_blank" href="https://github.com/fernandouribe86/myFlix-client" className="projectLink-item">View in GitHub</Button>
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