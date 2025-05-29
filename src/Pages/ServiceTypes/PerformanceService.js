import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import LetsTalk from "../../Components/LetsTalk"
import "./PerformanceService.css"

const ContentService = () => {

    const data = [
    { amount: '₹2,50,000', label: 'Total banner Spend' },
    { amount: '₹1,80,000', label: 'Facebook banners' },
    { amount: '₹70,000', label: 'Google banners' },
    { amount: '₹40,000', label: 'Instagram banners' },
    { amount: '₹30,000', label: 'YouTube banners' },
    { amount: '₹1,20,000', label: 'Affiliate Marketing' },
  ];


  return (
   <>
    <Container  fluid className='serviceType-banner-section'>
<Container className='serviceType-banner-container'>
<div className='serviceType-banner-hebannering-div'>
  <h1>Performance Marketing</h1>
  <p className='page_text'>YOUR BRAND DESERVES MORE THAN VISIBILITY, IT DESERVES VELOCITY.</p>
<p className='page_text'>We don’t just take you online. We position you precisely where your audience scrolls, clicks, and connects. With sharp strategy and standout creativity, 21 Maneuvers navigates the digital maze, turning presence into performance.
</p>
  <p className='page_text'>FUELING RESULTS, NOT JUST REACH</p>
</div>


 <div className="performance-boxes-container">
      {data.map((item, index) => (
        <div key={index} className="performance-banner-box">
          <div className="performance-amount">{item.amount}</div>
          <div className="performance-label">{item.label}</div>
        </div>
      ))}
    </div>
</Container>
</Container>

<Container fluid>
  <Container className='performance-platform-container'>
   
<div className='performance-platform-box'>
<div className=''>
  <img className='ads-icon' src={require("../../assets/google.png")} alt=""/>
</div>
<div>
  <p>Google Ads</p>
    <p> rs 10,0000</p>
      <p>1800 Leads</p>
        <p> 520 Connections</p>
</div>
</div>

 <div className='performance-platform-box'>
<div className=''>
  <img className='ads-icon' src={require("../../assets/meta.png")} alt=""/>
</div>
<div>
  <p>Meta Ads</p>
    <p> rs 10,0000</p>
      <p>1800 Leads</p>
        <p> 520 Connections</p>
</div>
</div>

 <div className='performance-platform-box'>
<div className=''>
  <img className='ads-icon' src={require("../../assets/linkedin.png")} alt=""/>
</div>
<div>
  <p>Linkedin Ads</p>
    <p> rs 10,0000</p>
      <p>1800 Leads</p>
        <p> 520 Connections</p>
</div>
</div>

 <div className='performance-platform-box'>
<div className=''>
  <img className='ads-icon' src={require("../../assets/whatsapp.png")} alt=""/>
</div>
<div>
  <p>Whatsapp Marketing</p>
    <p> rs 10,0000</p>
      <p>1800 Leads</p>
        <p> 520 Connections</p>
</div>
</div>
  </Container>
   
</Container>

    <Container className='serviceType-descp-section'>
      <Container className='serviceType-descp-content-container'>
<p className='page_text' >We Unlock Digital Possibilities.
</p>
<h1>Performance That Drives Growth</h1>

<p className='mt-5 page_text'>At 21 Maneuvers, performance is more than just numbers, it’s the outcome of strategy, creativity, and flawless execution. We don’t chase vanity metrics. We focus on what truly matters: growth, engagement, and ROI.</p>
<p className='page_text'>Every campaign is meticulously planned, performance-tracked, and continuously optimized. From audience insights to conversion data, we leverage real-time analytics to fine-tune every move, ensuring your brand achieves measurable, sustainable results.
</p>
    <p className='page_text'>BECAUSE WHEN PERFORMANCE LEADS, YOUR BRAND DOESN'T JUST COMPETE; IT DOMINATES.</p>
      </Container>
    </Container>


<Container className='amplify-section'>
<Container className='amplify-content-container'>
  <div className='amplify-left-side'>
<p className='fancy-txt'>Amplify <span className='extrabold-fancy-text'>YOUR</span></p>
<p  className='extrabold-fancy-text'>IMPACT</p>
<p className='fancy-txt'>across <span  className='extrabold-fancy-text' style={{color:"#F5A522"}}>DIGITAL</span></p>
  <p  className='extrabold-fancy-text' style={{color:"#F5A522"}}>PLATFORMS</p>

  </div>
  <div className='amplify-right-side'>
<p className='page_text'>We merge strategy and creativity to fuel meaningful engagement across digital platforms. Our approach ensures your brand builds a powerful presence where your audience alrebannery lives. With data-led performance marketing, we turn insights into action and clicks into conversions. Every move is designed to drive real, measurable growth, consistently and effectively.
</p>
  </div>
</Container>
</Container>
    <LetsTalk/>
</>
  )
}

export default ContentService
