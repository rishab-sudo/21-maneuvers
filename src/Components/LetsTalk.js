import React, { useState,useEffect,useMemo } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import "./LetsTalk.css";

export default function ContactPage() {
      const [description, setDescription] = useState("Buisness");
  const descriptions = useMemo(() => [
    "Creative",
    "Ideas",
    "Digital",
    "Strategy"
  ], []);

  useEffect(() => {
  const interval = setInterval(() => {
    const nextDescription =
      descriptions[Math.floor(Math.random() * descriptions.length)];
    setDescription(nextDescription);
  }, 2000);

  return () => clearInterval(interval);
}, [descriptions]);

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
    { icon: <FaFacebookF />, name: 'Facebook',link:'  https://www.facebook.com/21Maneuvers' },
    { icon: <FaInstagram />, name: 'Instagram',link:' https://www.instagram.com/21.maneuvers/' },
    { icon: <FaWhatsapp />, name: 'WhatsApp',link:'https://wa.me/9927600436' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn',link:'https://www.linkedin.com/company/21-maneuvers/' }
  ];

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row>
          {/* Left Column: Headings + Desktop Icons */}
     {/* LEFT COLUMN */}
<Col xs={12} md={6} className="contact-info mb-4 mb-md-0">

  <div className="contact-heading-block">

    <h2 className="fancy-text main-heading">
      <span className="lets">Let’s Talk</span>
      <span className="dynamic-word">{description}</span>
    </h2>

    <p className="page_text full-width-text">
      Let's discuss your project at Twentyone@21maneuvers.in
    </p>

  </div>

  {/* DESKTOP SOCIAL ICONS */}
  <div className="social-icons">
    {socialIcons.map((item) => (
      <a
        key={item.name}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        title={item.name}
        style={{
          fontSize: '1.5rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <div className='let-icon'>{item.icon}</div>
      </a>
    ))}
  </div>

</Col>


          {/* Right Column: Form + Mobile Icons */}
      {/* Right Column: Form */}
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
      <Button
        variant=""
        type="submit"
        style={{ background: "#F2A836", fontWeight: "600" }}
      >
        Submit
      </Button>
    </div>
  </Form>
</Col>

        </Row>
      </Container>
    </Container>
  );
}
