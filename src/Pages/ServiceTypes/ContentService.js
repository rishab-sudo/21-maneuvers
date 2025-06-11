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
  <p className="page_text">POWERING BRANDS WITH DATA-DRIVEN CAMPAIGNS THAT DELIVER RESULTS</p>
  <p className="page_text">In a world overwhelmed by noise, we create moments that stick. At 21 Maneuvers, we fuse culture, content, and technology to shape meaningful digital impact, because in today’s world, visibility isn’t enough. Memorability wins.
</p>
<p className='page_text'>21 Maneuvers | ELEVATING YOU INTO A BIGGER DIGITAL UNIVERSE</p>
<img className='mt-2 performance-banner-img' src={require("../../assets/social-media-creative-design.png")} alt="content-service-banner"/>
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
<p className='page_text'>21 Maneuvers | ELEVATING YOU INTO A BIGGER DIGITAL UNIVERSE</p>
<h1>We Build Strategic Digital Campaigns</h1>
<h1> That Deliver Real ROI</h1>
<p className='mt-5 page_text'>IWe don’t believe in one-size-fits-all marketing. Instead, we craft data-driven, creatively charged campaigns that align with your brand goals and audience behavior. From increasing visibility to boosting conversions, every campaign we build is designed to perform.</p>
<p className='page_text'>Digital success takes more than just presence, it takes precision. That’s why businesses partner with 21 Maneuvers, a digital marketing agency known for its full-spectrum solutions, sharp strategies, and a team that maneuvers your brand through the ever-evolving digital landscape.
</p>
    <p className="page_text">LET’S NOT JUST MARKET, LET’S MOVE YOUR BRAND FORWARD.</p>
      </Container>
    </Container>

<Container className='elevate-section'>
<Container className='elevate-content-container'>   
  <div className='elevate-left-side'>
<p className='fancy-txt'>Content <span style={{fontFamily:"arial"}}>That</span></p>
<p className='extrabold-fancy-text'>Grabs & </p>
<p className='fancy-txt'></p>
<p className='extrabold-fancy-text'style={{color:"#F5A522"}}>Converts</p>
<p className='extrabold-fancy-text'style={{color:"#F5A522"}}> Fast!</p>
  </div>
  <div className='elevate-right-side'>
<p className='page_text'>In the battle for attention, content is your ultimate weapon. 21 Maneuvers equips you with scroll stopping, 
  strategy driven content engineered to connect and convert. We craft every piece, from dynamic visuals to persuasive copy, to elevate your brand's narrative. Whether for social feeds, ad campaigns, or your website, our content moves audiences and drives your performance.
</p>
  </div>
</Container>
</Container>

    <LetsTalk/>
</>
  )
}

export default ContentService
