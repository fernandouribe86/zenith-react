import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { NavbarView } from "../navbar-view/navbar-view";
import { FooterView } from "../footer-view/footer-view";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './main-view.scss';

class MainView extends React.Component {
  constructor(){
    super();
  }

  render() {
    return(
      <Container id="mainViewContainer">
        <NavbarView />
        <Col>
          <div className="listContainer">
            <ul className="list">
              <li className="list-item">
                <div className="details">
                  <div className="year">2022</div>
                  <div className="divider"></div>
                  <div className="list-item-name">portfolio</div>
                </div>
                </li>
              <li className="list-item">about</li>
              <li className="list-item">contact</li>
              
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

                 {/* MyFlix Angular */}
                 <li className="list-item">
                    <div className="details">
                      <div className="year">2022</div>
                      <div className="divider"></div>
                      <div className="list-item-name">myFlix<br/>Angular</div>
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
            </ul>
          </div>
        </Col>
        <FooterView />
        </Container>
          )
      }
    }

export default MainView;