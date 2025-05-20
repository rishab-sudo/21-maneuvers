import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LetsTalk from "../../Components/LetsTalk"
import "./PerformanceService.css"

const ContentService = () => {
   const images = [
    require('../../assets/grain-town-digital-Post-design.png'),
     require('../../assets/grain-town-digital-Post-design.png'),
         require('../../assets/grain-town-digital-Post-design.png'),
         require('../../assets/grain-town-digital-Post-design.png'),
                 require('../../assets/grain-town-digital-Post-design.png'),
                     require('../../assets/grain-town-digital-Post-design.png'),
                         require('../../assets/grain-town-digital-Post-design.png'),
                             require('../../assets/grain-town-digital-Post-design.png'),
  ];
  return (
   <>
    <Container  fluid className='serviceType-banner-section'>
<Container className='serviceType-banner-container'>
<div className='serviceType-banner-heading-div'>
  <h1> Performance marketing</h1>
  <p>WE UNLOCK DIGITAL POSSIBILITIES                         </p>
<p>Your audience is on digital platforms, so that’s exactly where we take your brand. From building presence to driving engagement and results, we maneuver your brand through the digital maze with precision and creativity.</p>
  <p>IN A WORLD WHERE EVERYONE’S ONLINE, ONLY THE BOLD STAND OUT </p>
</div>
<img className='mt-2' src={require("../../assets/social-media-creative-design.png")} alt="content-service-banner"/>
</Container>
</Container>

  <Container fluid className='serviceType-images-section'>
      <Container fluid className='serviceType-content-container'>
       <Row className="serviceType-row">
  {images.map((imgSrc, index) => (
    <Col xs={12} md={6} key={index} className='p-0 g-0'>
      <div className="serviceType-image-wrapper">
        <img src={imgSrc} alt={`Post ${index + 1}`} />
      </div>
    </Col>
  ))}
</Row>
  </Container>
    </Container>

    <Container className='serviceType-descp-section'>
      <Container className='serviceType-descp-content-container'>
<p>We Built Solid Digital Campaigns That</p>
<h1>Performance That Drives Growth</h1>

<p className='mt-5'>At 21 Maneuvers, performance is more than just numbers it’s the outcome of strategy, creativity, and flawless execution. We don’t chase vanity metrics. We focus on what truly matters: growth, engagement, and ROI.</p>
<p>Every campaign is meticulously planned, performance-tracked, and continuously optimized. From audience insights to conversion data, we leverage real-time analytics to fine-tune every move ensuring your brand achieves measurable, sustainable results.</p>
    <p>BECAUSE WHEN PERFORMANCE LEADS, YOUR BRAND DOESN'T JUST COMPETE; IT DOMINATES.</p>
      </Container>
    </Container>

    <LetsTalk/>
</>
  )
}

export default ContentService
