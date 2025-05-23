import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import "./LetsTalk.css";

export default function ContactPage() {
      const [description, setDescription] = useState("Buisness");
      const descriptions = [
"Creative",
"Ideas",
"Digital",
"Strategy"
  ];
      useEffect(() => {
    const interval = setInterval(() => {
      const nextDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
      setDescription(nextDescription);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const socialIcons = [
    { icon: <FaFacebookF />, name: 'Facebook' },
    { icon: <FaInstagram />, name: 'Instagram' },
    { icon: <FaWhatsapp />, name: 'WhatsApp' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn' }
  ];

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row>
          {/* Left Column: Headings + Desktop Icons */}
          <Col xs={12} md={6} className="contact-info mb-4 mb-md-0">
            <h2 className='fancy-text'> Let's Talk</h2>
            <h4  className="fade-text">{description}</h4>
            <p>Let's discuss your project at ideas@digitallatte.in</p>

            {/* Desktop-only Social Icons */}
            <div className="social-icons desktop-only">
              {socialIcons.map((item) => (
                <div key={item.name} title={item.name} style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
                  {item.icon}
                </div>
              ))}
            </div>
          </Col>

          {/* Right Column: Form + Mobile Icons */}
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                   className="custom-placeholder"
                />
              </Form.Group>

              <Row className="g-3">
                <Col xs={12} sm={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                         className="custom-placeholder"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} sm={6}>
                  <Form.Group controlId="formContact">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Contact No."
                         className="custom-placeholder"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formMessage" className="my-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                     className="custom-placeholder"
                />
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>

            {/* Mobile-only Social Icons */}
            <div className="social-icons mobile-only">
              {socialIcons.map((item) => (
                <div key={item.name} title={item.name} style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
                  {item.icon}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
