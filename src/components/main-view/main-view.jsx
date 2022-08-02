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

              {/* About Page */}    
              <li className="list-item">contact</li>

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
                <li className="list-item">
                    <div className="details">
                      <div className="year">2021-Pres</div>
                      <div className="divider"></div>
                      <div className="list-item-name">Design</div>
                    </div>
                </li>

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
        
        <FooterView />
        </div>
          )
      }