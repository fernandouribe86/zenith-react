import React from "react";
import {BrowserRouter as Router, Link, useNavigate, Routes, Route } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { NavbarView } from "../navbar-view/navbar-view";
import { FooterView } from "../footer-view/footer-view";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './main-view.scss';

import MyflixNg from "../projects/myflix-ng";
import MyflixReact from "../projects/myflix-rt";
import MeetView from "../projects/meet";

import { render } from "@testing-library/react";

import github from '../../hero-assets/gh.png';
import linkedin from '../../hero-assets/linkedin-1.png';
import twitter from '../../hero-assets/twitter.png';

export default function MainView() {

    return(
      
      <div id="mainViewContainer">
        <NavbarView />
        <div>
          <div className="listContainer">
            <ul className="list">
              
              {/* About Page */}
              <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/about" className="details">
                            <div className="list-item-name">About</div>
                        </Nav.Link>
                  </Nav.Item>

              {/* Contact Page */}    
              <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/contact" className="details">
                            <div className="list-item-name">Contact</div>
                        </Nav.Link>
                  </Nav.Item>

              {/* MyFlix Angular */}
                  <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/myflix-ng" className="details">
                            <div className="year">2022</div>
                            <div className="divider"></div>
                            <div className="list-item-name">myFlix<br/>Angular</div>
                        </Nav.Link>
                  </Nav.Item>
              
              {/* Meet App */}
              <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/meet" className="details">
                            <div className="year">2022</div>
                            <div className="divider"></div>
                            <div className="list-item-name">Meet<br/>PWA</div>
                        </Nav.Link>
                  </Nav.Item>

              {/* Pokedex */}
              <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/pokedex" className="details">
                            <div className="year">2022</div>
                            <div className="divider"></div>
                            <div className="list-item-name">Pokedex</div>
                        </Nav.Link>
                  </Nav.Item>

                {/* myFlix React */}
                <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/myflix-rt" className="details">
                            <div className="year">2022</div>
                            <div className="divider"></div>
                            <div className="list-item-name">myFlix<br/>React</div>
                        </Nav.Link>
                  </Nav.Item>
                
                {/* Chat App */}
                <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/chat" className="details">
                            <div className="year">2022</div>
                            <div className="divider"></div>
                            <div className="list-item-name">React-Native<br/>Chat App</div>
                        </Nav.Link>
                  </Nav.Item>

                {/* Zenith Consulting */}
                <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/zenith" className="details">
                            <div className="year">2022</div>
                            <div className="divider"></div>
                            <div className="list-item-name">Zenith</div>
                        </Nav.Link>
                  </Nav.Item>

                {/* Pluribus Media */}
                <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/pluribus" className="details">
                            <div className="year">2021-Pres</div>
                            <div className="divider"></div>
                            <div className="list-item-name">Pluribus<br/>Media</div>
                        </Nav.Link>
                  </Nav.Item>

                {/* Design Portfolio */}
                <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/design" className="details">
                            <div className="year">2021-Pres</div>
                            <div className="divider"></div>
                            <div className="list-item-name">Design</div>
                        </Nav.Link>
                  </Nav.Item>

                {/* This Site */}
                <Nav.Item className="list-item nav-item">                
                      <Nav.Link href="/portfolio" className="details">
                            <div className="year">2022</div>
                            <div className="divider"></div>
                            <div className="list-item-name">Portfolio</div>
                        </Nav.Link>
                  </Nav.Item>

            </ul>
          </div>
        </div>
        <Row id="footerMain">
            <FooterView id="footerMain"/>
        </Row>
        <Row id="footerSmall">
        <div className="mainFooter-small">
              <div className="footerSocial-small">
                
                <Button className="footerButton-small"  target="_blank" href="https://github.com/fernandouribe86">
                  <img src={github} alt="GitHub logo" className="footerLogo-small"/>
                  <p className="footerSocial-small">GitHub</p>
                </Button>

                <Button className="footerButton-small"  target="_blank" href="https://www.linkedin.com/in/fauribe/">
                  <img src={linkedin} alt="LinkedIn logo" className="footerLogo-small"/>
                  <p className="footerSocial-small">LinkedIn</p>
                </Button>

                <Button className="footerButton-small" target="_blank" href="https://www.twitter.com/fernandouribe">
                  <img src={twitter} alt="Twitter logo" className="footerLogo-small"/>
                  <p className="footerSocial-small">Twitter</p>
                </Button>

              </div>
            </div>
        </Row>
        <Row id="mainCopyright">
            <p className="copyright">© 2022, Fernando Uribe Consulting Company. All rights reserved.</p>
        </Row>
        </div>
          )
      }