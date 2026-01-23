import React from 'react'
import { Container} from 'react-bootstrap';
import LetsTalk from "../../Components/LetsTalk"
import "./PerformanceService.css"

const ContentService = () => {




  return (
    <>
      <Container fluid className='serviceType-banner-section'>
        <Container className='serviceType-banner-container'>
          <div className='serviceType-banner-hebannering-div'>
            <h1>Performance Marketing</h1>
            <p className='page_text'>YOUR BRAND DESERVES MORE THAN VISIBILITY, IT DESERVES VELOCITY.</p>
            <p className='page_text'>We don’t just take you online. We position you precisely where your audience scrolls, clicks, and connects. With sharp strategy and standout creativity, 21 Maneuvers navigates the digital maze, turning presence into performance.
            </p>
            <p className='page_text'>FUELING RESULTS, NOT JUST REACH</p>
            <div className='pm-banner-img-div'>
              <img src={require("../../assets/services/PM-mock.png")} alt="performance-marketing"/>
            </div>
          </div>

      </Container>
      </Container>

      <Container fluid className='pm-box-fluid1'>
        <div className="section-heading text-center ">
    <h1>Platforms That Power High-Impact Campaigns</h1>
  <p className="page_text">Where Performance Meets Precision</p>
</div>
        <Container className='performance-platform-container'>

          <div className='performance-platform-box'>
          <div className='img-heading-div'>
              <img className='ads-icon' src={require("../../assets/google.png")} alt="" />
              <p>Google Ads</p>
            </div>
            <div className='ads-text-div'>
              <p>
               Targeted, high-intent
              campaigns driving quality
             traffic and conversions.</p>
            </div>
          </div>

          <div className='performance-platform-box'>
          <div className='img-heading-div'>
              <img className='ads-icon' src={require("../../assets/meta.png")} alt="" />
              <p>Meta Ads</p>
            </div>
            <div className='ads-text-div'>
              <p>
            Precision-targeted ads across
           1Facebook and Instagram
            maximizing your ROAS.</p>
            </div>
          </div>

          <div className='performance-platform-box'>
            <div className='img-heading-div'>
              <img className='ads-icon' src={require("../../assets/linkedin.png")} alt="" />
              <p>Linkedin Ads</p>
            </div>
            <div className='ads-text-div'>
              <p>
             Targeted B2B campaigns
            connecting with key 
            nakers professionally</p>
            </div>
          </div>

          <div className='performance-platform-box'>
            <div className='img-heading-div'>
              <img className='ads-icon' src={require("../../assets/whatsapp.png")} alt="" />
              <p>Whatsapp Marketing</p>
            </div>
            <div className='ads-text-div'>
              <p>
               Engaging campaigns
              through WhatsApp to
              capture and convert leads.</p>
            </div>
          </div>
        </Container>
      </Container>

<div className='pm-graph-img-div'>
<img className='pm-graph-img' src={require("../../assets/services/pm-graph3.png")}alt="performance-marketing"/>
</div>

{/* conector-boxes */}
   <Container fluid className='pm-box-fluid2'>
    <div className="section-heading text-center ">
  <h1>From Clicks to Conversions Across Every Platform</h1>
  <p className="page_text">A Connected Performance Ecosystem</p>
</div>
      <Container className='performance-platform-container '>

          <div className='performance-platform-box'>
          <div className='img-heading-div'>
              <img className='ads-icon' src={require("../../assets/google.png")} alt="" />
              <p>Instant Search Visibility</p> 
            </div>
            <div className='ads-text-div'>
        <p> Appear exactly when users are actively searching for your products or services. </p>
            </div>
          </div>

               <div className='performance-platform-box'>
          <div className='img-heading-div'>
              <img className='ads-icon' src={require("../../assets/google.png")} alt="" />
              <p>Measurable ROI</p> 
            </div>
            <div className='ads-text-div'>
        <p> Track every click, lead, and conversion with complete performance transparency.</p>
            </div>
          </div>

              <div className='performance-platform-box'>
          <div className='img-heading-div'>
              <img className='ads-icon' src={require("../../assets/google.png")} alt="" />
              <p>Precision Targeting</p> 
            </div>
            <div className='ads-text-div'>
        <p> Reach high-intent audiences using smart data, keywords, and behavior insights. </p>
            </div>
          </div>

          <div className='performance-platform-box'>
            <div className='img-heading-div'>
              <img className='ads-icon' src={require("../../assets/whatsapp.png")} alt="" />
              <p>Optimized Ad Spend</p>
            </div>
            <div className='ads-text-div'>
              <p>
Budgets are continuously refined to maximize conversions and reduce waste.</p>
            </div>
          </div>
        </Container>

      </Container>
{/*  */}
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

{/*  */}
      <Container className='amplify-section'>
        <Container className='amplify-content-container'>
          <div className='amplify-left-side'>
            <p className='fancy-txt'>Amplify <span className='extrabold-fancy-text' style={{ fontFamily: "arial" }}>YOUR</span></p>
            <p className='extrabold-fancy-text'>IMPACT</p>
            <p className='fancy-txt'>across <span className='extrabold-fancy-text' style={{ color: "#F5A522", fontFamily: "arial" }}>DIGITAL</span></p>
            <p className='extrabold-fancy-text' style={{ color: "#F5A522", fontFamily: "arial" }}>PLATFORMS</p>

          </div>
          <div className='amplify-right-side'>
            <p className='page_text'>We merge strategy and creativity to fuel meaningful engagement across digital platforms. Our approach ensures your brand builds a powerful presence where your audience alrebannery lives. With data-led performance marketing, we turn insights into action and clicks into conversions. Every move is designed to drive real, measurable growth, consistently and effectively.
            </p>
          </div>
        </Container>
      </Container>
      <LetsTalk />
    </>
  )
}

export default ContentService
