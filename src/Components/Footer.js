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
                    <Row className='w-100'>

                        <Col lg={3} md={3} sm={12} xs={12}>
                            <div className='footer-left-section'>
                                <h3>Assettlor <br/>
                                    Interactive <br/>
                                    Studios</h3>
                            </div>
                        </Col>

                        <Col lg={3} md={3} sm={12} xs={12}>
                            <div className='footer-center1-section'>
                                <p>Bareilly</p>
                                <p>Assettlor Interactive Studios.
                                    C-35, ground floor, Rampur Bagh,
                                    Bareilly 243001,
                                    India</p>
                            </div>
                        </Col>

                        <Col lg={3} md={3} sm={12} xs={12}>
                            <div className='footer-center2-section'>
                                <div>
                                    <p>Work inquiries</p>
                                    <p>Interested in working with us?
                                        hello@assettlor.com</p>
                                </div>

                                <div>
                                    <p>Career</p>
                                    <p>Looking for a job opportunity?
                                        See open positions</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg={3} md={3} sm={12} xs={12} >
                            {/* <div className='footer-right-section'>
                                <p>Sign up for the newsletter</p>
                                <form className="footer-newsletter-form" onSubmit={handleSubmit}>
                                    <div className="footer-input-wrapper">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            className="footer-email-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button type="submit" className="footer-signup-button">Sign up</button>
                                    </div>
                                    <div className="footer-checkbox-container">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            name="consent"
                                            className="footer-checkbox"
                                            checked={consent}
                                            onChange={(e) => setConsent(e.target.checked)}
                                        />
                                        <label htmlFor="consent">
                                            I'm okay with getting emails and having that activity tracked to improve my experience.
                                        </label>
                                    </div>
                                    {error && (
                                        <div className='error-box'>
                                            <p className="footer-error-text">{error}</p>
                                        </div>
                                    )}
                                </form>
                            </div> */}
                            <div className=''>
                                  <h3>Follow Us </h3>
                            </div>
                              
                            <div className="footer-social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon footer-facebook">
    <FaFacebookF />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon footer-insta">
    <FaInstagram />
  </a>
  <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" className="footer-social-icon footer-whatsapp">
    <FaWhatsapp />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon footer-linkedin">
    <FaLinkedinIn />
  </a>
</div>

                        </Col>

                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Footer
