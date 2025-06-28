import React from 'react'
import { Link } from 'react-router-dom';
import ContactForm from '../Components/ContactForm'
import { Container} from 'react-bootstrap'
import contactBg from '../assets/slide21.jpg';
import "./Contact.css"

const Contact = () => {
  return (
    <> 
  
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
          <h3 className='page_heading'>Get in touch</h3>
        <div className='contactUs-row'>
          <div  className='left-col'>
            <div className='left-col-content'>
              <div className='heading-text-div'>
                <p>Work Inquiries</p>
                <p className='fw-bold'>+91 9311849502</p>
                <p>Assistance hours:<br /> Monday – Saturday <br />11 am to 7 pm EST</p>
              </div>

              <div className='heading-text-div'>
                <p>Careers & Press</p>
                <p className='fw-bold'>hello@assettlor.com</p>
                <p>Assistance hours:<br />Tuesday – Saturday <br />6 am to 8 pm EST</p>
              </div>
            </div>
          </div>

          <div  className='right-col'>
            <div className='right-col-content'>
              <div>
                <p className='fw-bold'>Post address</p>
                <p className='fw-bold'>Assettlor Interactive Studios.</p>
                <p>K.B. Marketing OPC Pvt. Ltd, C-12-35 Rampur Bagh,</p>
                <p>Bareilly,</p>
                <p>India </p>
              </div>
              <div>
                <p className='fw-bold'>Social media</p>
                 <a style={{textDecoration:"none,",color:"#ffffff"}} href="https://www.facebook.com/21Maneuvers" target="_blank" rel="noopener noreferrer" > <p className='fw-bold' >Facebook</p></a>
                        <a style={{textDecoration:"none,",color:"#ffffff"}} href="https://www.instagram.com/21.maneuvers/" target="_blank" rel="noopener noreferrer" >  <p className='fw-bold' style={{ marginTop: "-8px" }}>Instagram</p></a>
                        <a style={{textDecoration:"none,",color:"#ffffff"}} href="https://wa.me/919927600436" target="_blank" rel="noopener noreferrer" ></a>
                        <a style={{textDecoration:"none,",color:"#ffffff"}} href="https://www.linkedin.com/company/21-maneuvers/" target="_blank" rel="noopener noreferrer" >                <p className='fw-bold' style={{ marginTop: "-8px" }}>Linkedin</p></a>
               
              </div>
            </div>
          </div>
        </div>
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
    </>
  )
}

export default Contact