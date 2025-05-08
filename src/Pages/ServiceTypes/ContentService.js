import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import FAQ from '../FAQ'
import faqImage from '../../assets/slide21.jpg';
import "./ContentService.css"

const images = [
    { id: 1, src: require("../../assets/slide21.jpg"), type: "large", tagline: "Stunning Mountains" },
    { id: 2, src: require("../../assets/slide21.jpg"), type: "small", tagline: "Sunny Beach" },
    { id: 3, src: require("../../assets/slide21.jpg"), type: "large", tagline: "Forest Trail" },
    { id: 4, src: require("../../assets/slide21.jpg"), type: "small", tagline: "City Lights" },
    { id: 5, src: require("../../assets/slide21.jpg"), type: "large", tagline: "Desert Dunes" },
    { id: 6, src: require("../../assets/slide21.jpg"), type: "small", tagline: "Ocean Waves" },
  ];

const faqData = [
    {
      question: "Cost-effective offshore delivery of design, development, testing and support services",
      answer: "Offshore development and test services enable businesses to reduce costs and speed up innovation cycles..."
    },
    {
      question: "One stop shop for product development, maintenance, and support",
      answer: "Having the right team can streamline business processes, boost efficiency..."
    },
    {
      question: "One stop shop for product development, maintenance, and support",
      answer: "Having the right team can streamline business processes, boost efficiency..."
    },
    {
      question: "One stop shop for product development, maintenance, and support",
      answer: "Having the right team can streamline business processes, boost efficiency..."
    },
  
  ];
const ContentService = () => {
  return (
    <>
    <Container fluid className='content-fluid'>
<Container>
    <div className='content-banner'>
<p className='page_main_heading'>OUR WORK </p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    </div>
</Container>
</Container>

<Container className='gallery-container'>

  <Row className="">
  <Col lg={4} md={3} sm={12} xs={12}>
    <img className='gallery-img vertical_img' src={require("../../assets/slide21.jpg")}alt=""/>
    <p>DASHBOARD KIT</p>
  </Col>
    <Col className='square_img' lg={4} md={3} sm={1} xs={12} style={{background:""}}>
    <img className='gallery-img square_img' src={require("../../assets/slide21.jpg")}alt=""/>
    <p>DASHBOARD KIT</p>
    </Col>
    <Col lg={4} md={3} sm={12} xs={12}>
    <img className='gallery-img vertical_img' src={require("../../assets/slide21.jpg")}alt=""/>
    <p>DASHBOARD KIT</p>
    </Col>
  </Row>
  <Row className="mt-3">
    <Col lg={4} md={3} sm={12} xs={12}>
    <img className='gallery-img square_img' src={require("../../assets/slide21.jpg")}alt=""/>
    <p>DASHBOARD KIT</p>
    </Col>
    <Col className='row2-colum2' lg={4} md={3} sm={12} xs={12}  >
    <img className='gallery-img vertical_img' src={require("../../assets/slide21.jpg")}alt=""/>
    <p>DASHBOARD KIT</p>
    </Col>
    <Col lg={4} md={3} sm={12} xs={12}>
    <img className='gallery-img square_img' src={require("../../assets/slide21.jpg")}alt=""/>
    <p>DASHBOARD KIT</p>
    </Col>
  </Row>

</Container>

<div className='content-work-container'>

<FAQ
          faqs={faqData}
          heading="We work in the fields of  art direction."
          image={faqImage}
          imagePosition="right"
        />

</div>
 </>
  )
}

export default ContentService
