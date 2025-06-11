import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css"

const Footer = () => {
    const [email, setEmail] = useState('');
    const [consent, setConsent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!consent) {
            setError("One or more fields have an error. Please check and try again.");
            return;
        }

        // Process signup (e.g., API call or alert)
        alert("Signed up!");

        // Clear input & error
        setEmail('');
        setConsent(false);
        setError('');
    };

      const socialIcons = [
        { icon: <FaFacebookF />, name: 'Facebook' },
        { icon: <FaInstagram />, name: 'Instagram' },
        { icon: <FaWhatsapp />, name: 'WhatsApp' },
        { icon: <FaLinkedinIn />, name: 'LinkedIn' }
      ];
    return (
        <>
            <Container fluid className='footer-container-fluid'>
                <Container className="footer-container-overlay">
               <Row className="w-100 footer-row">
  <Col lg={3} md={6} sm={12} className="footer-col">
    <div className="footer-section" style={{marginRight:"auto"}}>
      <img className="footer-logo" src={require("../assets/logo-21.png")} alt="" />
    </div>
  </Col>

  <Col lg={3} md={6} sm={12} className="footer-col">
    <div className="footer-section">
      <p><strong>21 Maneuverse</strong></p>
      <p>
       Strategy. Creativity. Growth.
<br />
       K.B. Marketing OPC Pvt. Ltd., C-12-35 Rampur Bagh,<br /> Bareilly-243001, Uttar Pradesh.

    
      </p>
    </div>
  </Col>

  <Col lg={3} md={6} sm={12} className="footer-col">
    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </Col>

  <Col lg={3} md={6} sm={12} className="footer-col">
    <div className="footer-section">
      <h4>Follow Us</h4>
      <div className="footer-social-icons">
        <a href="https://www.facebook.com/21Maneuvers" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><FaFacebookF /></a>
        <a href="https://www.instagram.com/21.maneuvers/" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><FaInstagram /></a>
        <a href="https://wa.me/919927600436" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/company/21-maneuvers/" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><FaLinkedinIn /></a>
      </div>
    </div>
  </Col>
</Row>

                </Container>
            </Container>
        </>
    )
}

export default Footer
