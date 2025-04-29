import React from 'react'
import { Link } from 'react-router-dom';
import ContactForm from '../Components/ContactForm'
import { Container, Row, Col } from 'react-bootstrap'
import contactBg from '../assets/slide21.jpg';
import "./Contact.css"

const Contact = () => {
  return (
    <Container fluid className='g-0' >
      <div
        className="contact-banner"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <Link to="/home" className="back-arrow">
          ←
        </Link>
        <h2 className="contact-banner-heading">Contact Us</h2>
      </div>


      <Container className='contactUs-content-container'>
        <p>
          Home <span className="">{'>'}</span> Contact Us
        </p>
        <Row className='contactUs-row'>
          <h3 className='page_heading'>Get in touch</h3>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className='left-col-content'>
              <div className='heading-text-div'>
                <p>Work Inquiries</p>
                <p className='fw-bold'>+91 9311849502</p>
                <p>Assistance hours:<br /> Monday – Friday <br />6 am to 8 pm EST</p>
              </div>

              <div className='heading-text-div'>
                <p>Careers & Press</p>
                <p className='fw-bold'>hello@assettlor.com</p>
                <p>Assistance hours:<br />Tuesday – Saturday <br />6 am to 8 pm EST</p>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12} >
            <div className='left-col-content'>
              <div>
                <p className='fw-bold'>Post address</p>
                <p className='fw-bold'>Assettlor Interactive Studios.</p>
                <p>Am 113, 2nd floor, Shalimar Bagh,</p>
                <p>Bareilly,</p>
                <p>India </p>
              </div>
              <div>
                <p className='fw-bold'>Social media</p>
                <p className='fw-bold' >Facebook</p>
                <p className='fw-bold' style={{ marginTop: "-8px" }}>Instagram</p>
                <p className='fw-bold' style={{ marginTop: "-8px" }}>Linkedin</p>
                <p className='fw-bold' style={{ marginTop: "-8px" }}>Twitter</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='contactUs-underline mt-5'></Container>

      <div style={{ width: "100%", marginTop: "5%", marginBottom: "5%" }}>
        <ContactForm />
      </div>

      <Container>
        <div style={{ width: '100%', height: '400px' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019034839542!2d-122.41941568468137!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2a6abdb5%3A0x19e927681372cbd9!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1642439025611!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>

    </Container>
  )
}

export default Contact