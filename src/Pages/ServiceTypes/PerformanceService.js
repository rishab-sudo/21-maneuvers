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
  <h1>Performance Marketing</h1>
  <p>YOUR BRAND DESERVES MORE THAN VISIBILITY, IT DESERVES VELOCITY.</p>
<p>We don’t just take you online. We position you precisely where your audience scrolls, clicks, and connects. With sharp strategy and standout creativity, 21 Maneuvers navigates the digital maze, turning presence into performance.
</p>
  <p>FUELING RESULTS, NOT JUST REACH</p>
</div>
<img className='mt-2 performance-banner-img' src={require("../../assets/social-media-creative-design.png")} alt="content-service-banner"/>
</Container>
</Container>

  <Container fluid className='serviceType-images-section'>
      <Container fluid className='serviceType-content-container'>
       <Row className="serviceType-row">
  {images.map((imgSrc, index) => (
    <Col xs={12} md={6} key={index} className='p-0 g-0'>
      <div className="serviceType-image-wrapper">
        <img className="serviceType-grid-img"src={imgSrc} alt={`Post ${index + 1}`} />
      </div>
    </Col>
  ))}
</Row>
  </Container>
    </Container>

    <Container className='serviceType-descp-section'>
      <Container className='serviceType-descp-content-container'>
<p>We Unlock Digital Possibilities.
</p>
<h1>Performance That Drives Growth</h1>

<p className='mt-5'>At 21 Maneuvers, performance is more than just numbers, it’s the outcome of strategy, creativity, and flawless execution. We don’t chase vanity metrics. We focus on what truly matters: growth, engagement, and ROI.</p>
<p>Every campaign is meticulously planned, performance-tracked, and continuously optimized. From audience insights to conversion data, we leverage real-time analytics to fine-tune every move, ensuring your brand achieves measurable, sustainable results.
</p>
    <p>BECAUSE WHEN PERFORMANCE LEADS, YOUR BRAND DOESN'T JUST COMPETE; IT DOMINATES.</p>
      </Container>
    </Container>


<Container className='elevate-section'>
<Container className='elevate-content-container'>
  <div className='elevate-left-side'>
<p>Amplify YOUR</p>
<p>IMPACT</p>
<p>across </p>
<p>DIGITAL PLATFORMS.
</p>
  </div>
  <div className='elevate-right-side'>
<p>We merge strategy and creativity to fuel meaningful engagement across digital platforms. Our approach ensures your brand builds a powerful presence where your audience already lives. With data-led performance marketing, we turn insights into action and clicks into conversions. Every move is designed to drive real, measurable growth, consistently and effectively.
</p>
  </div>
</Container>
</Container>
    <LetsTalk/>
</>
  )
}

export default ContentService
