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
import MyflixNg from "../myflix-ng/myflix-ng";
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
              <li className="list-item">
                <div className="details">
                  <div className="year">2022</div>
                  <div className="divider"></div>
                  <div className="list-item-name">meet PWA</div>
                </div>
                </li>

              {/* Pokedex */}
                <li className="list-item">
                <div className="details">
                  <div className="year">2022</div>
                  <div className="divider"></div>
                  <div className="list-item-name">Pokedex</div>
                </div>
                </li>

                {/* myFlix React */}
                <li className="list-item">
                <div className="details">
                  <div className="year">2022</div>
                  <div className="divider"></div>
                  <div className="list-item-name">myFlix<br/>React</div>
                </div>
                </li>
                
                {/* Chat App */}
                <li className="list-item">
                <div className="details">
                  <div className="year">2022</div>
                  <div className="divider"></div>
                  <div className="list-item-name">React-Native<br/>Chat App</div>
                </div>
                </li>

                {/* Zenith Consulting */}
                <li className="list-item">
                    <div className="details">
                      <div className="year">2022</div>
                      <div className="divider"></div>
                      <div className="list-item-name">Zenith</div>
                    </div>
                </li>

                {/* Amaca.tech */}
                <li className="list-item">
                    <div className="details">
                      <div className="year">2021-Pres.</div>
                      <div className="divider"></div>
                      <div className="list-item-name">Amaca</div>
                    </div>
                </li>

                {/* Design Portfolio */}
                <li className="list-item">
                    <div className="details">
                      <div className="year">2021-Pres</div>
                      <div className="divider"></div>
                      <div className="list-item-name">Design</div>
                    </div>
                </li>

                {/* This Site */}
                <li className="list-item">
                <div className="details">
                  <div className="year">2022</div>
                  <div className="divider"></div>
                  <div className="list-item-name">portfolio</div>
                </div>
                </li>
            </ul>
          </div>
        </div>
        
        <FooterView />
        </div>
          )
      }