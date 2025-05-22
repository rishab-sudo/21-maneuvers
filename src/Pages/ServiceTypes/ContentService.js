import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LetsTalk from "../../Components/LetsTalk"
import "./ContentService.css"

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

  <h1> Content Creation</h1>
  <p>We Build Strategic Digital Campaigns That Deliver Real ROI</p>
  <p>In today’s hyper-connected world, success lies at the intersection of culture, content, and technology. At 21 Maneuvers, we understand that it's not just about being seen—it's about being remembered and driving results.
</p>
<p>Digital Marketing AGENCY | TAKE YOU TO THE WIDER SPACE</p>
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
<h1>Converts into Better</h1>
<h1>Return on investment</h1>
<p className='mt-5'>In the present era, people are more connected; success happens at the convergence of culture, content, and technology. If you smartly use the ingredients and execute in the best manner, the victory is yours then. Here at Expand Buzz, we clearly understand this intersection and develop brands out of every digital platform, now and forever.</p>
<p>In the digital world, the role of successful campaigns and knowing the strategies to implement is not everyone's cup of tea. That's why it's critical for your business to associate with the best digital marketing agency offering extensive digital marketing services & solutions. Our expert team in the digital marketing segment provides 360-degree digital marketing services for your brand.</p>
      </Container>
    </Container>

<Container className='elevate-section'>
<Container className='elevate-content-container'>
  <div className='elevate-left-side'>
<p>Elevate Your</p>
<p>Brand in</p>
<p>the  Digital</p>
<p>Realm</p>
  </div>
  <div className='elevate-right-side'>
<p>In today's digital landscape, leveraging social buzz and optimizing Google rankings are essential for business success. Our established agency excels at tailored social media marketing across platforms, driving traffic and attention.</p>
  </div>
</Container>
</Container>

    <LetsTalk/>
</>
  )
}

export default ContentService
