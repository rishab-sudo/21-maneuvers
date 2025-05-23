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
  <p>POWERING BRANDS WITH DATA-DRIVEN CAMPAIGNS THAT DELIVER RESULTS</p>
  <p>In a world overwhelmed by noise, we create moments that stick. At 21 Maneuvers, we fuse culture, content, and technology to shape meaningful digital impact, because in today’s world, visibility isn’t enough. Memorability wins.
</p>
<p>21 Maneuvers | ELEVATING YOU INTO A BIGGER DIGITAL UNIVERSE</p>
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
<p>21 Maneuvers | ELEVATING YOU INTO A BIGGER DIGITAL UNIVERSE</p>
<h1>We Build Strategic Digital Campaigns</h1>
<h1> That Deliver Real ROI</h1>
<p className='mt-5'>In the present era, people are more connected; success happens at the convergence of culture, content, and technology. If you smartly use the ingredients and execute in the best manner, the victory is yours then. Here at Expand Buzz, we clearly understand this intersection and develop brands out of every digital platform, now and forever.</p>
<p>In the digital world, the role of successful campaigns and knowing the strategies to implement is not everyone's cup of tea. That's why it's critical for your business to associate with the best digital marketing agency offering extensive digital marketing services & solutions. Our expert team in the digital marketing segment provides 360-degree digital marketing services for your brand.</p>
    <p>LET’S NOT JUST MARKET, LET’S MOVE YOUR BRAND FORWARD.</p>
      </Container>
    </Container>

<Container className='elevate-section'>
<Container className='elevate-content-container'>
  <div className='elevate-left-side'>
<p>Content That</p>
<p>Commands </p>
<p>ATTENTION &</p>
<p>CONVERTS</p>
  </div>
  <div className='elevate-right-side'>
<p>In the battle for attention, content is your ultimate weapon. 21 Maneuvers equips you with scroll-stopping, strategy-driven content engineered to connect and convert. We craft every piece – from dynamic visuals to persuasive copy – to elevate your brand's narrative. Whether for social feeds, ad campaigns, or your website, our content moves audiences and drives your performance.
</p>
  </div>
</Container>
</Container>

    <LetsTalk/>
</>
  )
}

export default ContentService
