import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavbarView } from "../navbar-view/navbar-view";
import { FooterView } from "../footer-view/footer-view";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './myflix-ng.scss';
import { render } from "@testing-library/react";

import {MainView} from "../main-view/main-view";

export default function myFlixNg() {

    return (
      <div>
        <p id="test">this is a test</p>
      </div>
    )
}