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
      <Container className="contactContainer">
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
        <Row id="contactFormContainer">
          <h3>Want to learn more? </h3>
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
              <Form.Label class="formLabel">Notes & Questions</Form.Label>
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
        </Row>
        <Row id="footerMain">
            <FooterView id="footerMain" style="width: 100px;"/>
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
      </Container>
    )
}