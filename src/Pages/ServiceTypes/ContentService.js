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

  <h1> Digital Marketing</h1>
  <p>WE UNLOCK THE DIGITAL SOLUTIONS</p>
  <p>The current market welcomes only if you are distinctive. How do the customers know about you? It’s through the digital platforms only, and that’s where Expand Buzz is there for you.</p>
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

    <LetsTalk/>
</>
  )
}

export default ContentService
