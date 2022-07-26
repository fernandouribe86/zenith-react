import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { NavbarView } from "../navbar-view/navbar-view";

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
                  <div className="list-item-name">portfolio</div>
                </div>
                </li>
              <li className="list-item">about<br />fernando</li>
              <li className="list-item">technologies<br />& languages
              </li>
              <li className="list-item">meet PWA</li>
              <li className="list-item">pokedex</li>
              <li className="list-item">myFlix React</li>
              <li className="list-item">React-Native<br />Chat App</li>
              <li className="list-item">myFlix<br />Angular</li>
              <li className="list-item">zenith<br />consulting</li>
              <li className="list-item">amaca.tech</li>
              <li className="list-item">design<br />portfolio</li>
            </ul>
          </div>
        </Col>
        </Container>
          )
      }
    }

export default MainView;