import React, { PureComponent }from "react";
import { Image } from "react-bootstrap";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

import { FooterView } from "../footer-view/footer-view";

import imageTwo from '../../hero-assets/zenith-work.png';
import github from '../../hero-assets/gh.png';
import twitter from '../../hero-assets/twitter.png';
import linkedin from '../../hero-assets/linkedin-1.png';


import './contact-view.scss';

import { NavbarView } from "../navbar-view/navbar-view";
import { Hamburger } from "../hamburger/hamburger";

import PortfolioPieChart from "../pie-chart/pie-chart";

export default function ContactView() {
    return (
      <Container className="projectContainer">
        <Col>
          <Row className="navbarContact">
            <NavbarView />
            <Hamburger />
          </Row>
        </Col>
        <div className="topBoxContact">
        <div>
          <h1 className="contactName">Contact</h1>
        </div>
        </div>
        <div id="contactFormContainer">
          <h2>Want to learn more? </h2>
          <p>Submit your contact information and a representative will reach out to you shortly!</p>
          <Form id="contactForm">
              
              {/* Name */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label class="formLabel">Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter name" 
                className="formBox" />
              </Form.Group>

              {/* Email Address */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label class="formLabel">Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email"
              className="formBox"  />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3 formPhone" controlId="formBasicPhone">
              <Form.Label class="formLabel">Phone</Form.Label>
              <input id="phoneBox" className="formBox" required type="tel" placeholder="Enter Phone #" />
              <Form.Text className="text-muted small">
                We'll never share your email or phone number with anyone else.
              </Form.Text>
            </Form.Group>

            {/* Comments */}
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label class="formLabel">Notes/Questions</Form.Label>
              <textarea type="text" rows="4" cols="50" id="formLargeField" className="formBox"  placeholder="(Optional)" />
            </Form.Group>

            {/* Consent Question */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox" id="checkboxContainer">
              <Form.Check id="consent" required type="checkbox" label="" />
              <p className="consentLabel">By checking this box, you are agreeing to be contacted by email, call or text message.</p>
            </Form.Group>
            <Button className="contactSubmit" type="submit">
              Submit
            </Button>
          </Form>
        </div>
       <FooterView />
      </Container>
    )
}