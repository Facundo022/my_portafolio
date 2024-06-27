import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import axios from 'axios'; // Importa axios para realizar solicitudes HTTP

export const Footer = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');

    try {
      await axios.post('/api/subscribe', { email }); // Cambia '/api/subscribe' por la ruta correcta de tu backend
      alert('Subscription successful!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Subscription failed. Please try again later.');
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/facundo-nicolas-denis-60933b199/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Facundo022" target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-right mt-3">
            <p className="footer-message">© 2024 Facundo Denis. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
