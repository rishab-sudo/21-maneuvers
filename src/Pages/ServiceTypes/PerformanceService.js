import React,{useEffect,useState,useRef} from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import CountUp from 'react-countup';
import ImageSwiper from '../../Components/ImageSlider';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./PerformanceService.css";
import ServiceSlider from "../../Components/ServiceSlider";

const benefits = [
  {
    title: "Focus on what matters",
    desc: "Every org has its limits, whether that’s budget, resources, time, or all 3. We know how to identify the 5% of SEO work that generates 95% of the results so you only focus on what matters.",
  },
  {
    title: "Streamlined Strategy",
    desc: "We develop SEO plans that align with your business goals and focus only on tactics that deliver real growth.",
  },
  {
    title: "Scalable Execution",
    desc: "From audits to implementation, we handle SEO at scale, letting your team focus on big-picture growth.",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Our insights and reporting help prioritize SEO actions based on impact, not assumptions.",
  },
  {
    title: "Data-Driven Decisions",
    desc: "Our insights and reporting help prioritize SEO actions based on impact, not assumptions.",
  },
];
const slideData = [
  { image: require("../../assets/seo-img.png"), tagline: 'Boosts Visibility' },
  { image: require("../../assets/seo-img.png"), tagline: 'Drives Traffic' },
  { image: require("../../assets/seo-img.png"), tagline: 'Builds Trust' },
  { image:require("../../assets/seo-img.png"), tagline: 'Cost-Effective' },
  { image: require("../../assets/seo-img.png"), tagline: 'Better Experience' },
];
const PerformanceService = () => {


  return (
    <>
    {/* seo-banner-starts */}
    <div className="performance-section">
   
      <Carousel fade controls={false} indicators={false} interval={3000} className="seo-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Slide+1"
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1920x1080/111111/FFFFFF?text=Slide+2"
            alt="Slide 2"
          />
        </Carousel.Item>
      </Carousel>

      {/* Foreground Content */}
      <Container  className="performance-content">
        <div className="top-left">
          <p className="performance-subtitle">Everything you need</p>
          <p className="performance-title">to outshine with SEO</p>
        </div>
        <div className="bottom-right">
          <p className="performance-description">Unlock repeatable SEO revenue growth with Graphite’s experience, services and tools.</p>
          <button className="performance-button">Click</button>
        </div>
      </Container>
    </div>
{/* seo-banner-ends */}

{/* seo-benefits */}
    <ServiceSlider benefits={benefits} />
{/*  */}

{/* seo-growth-sec */}
    <Container fluid className="growth-section">
<Container className="growth-content-container">
  <div className="underline "></div>
  <p className="page_text">Graphite Growth boosted Webflow’s SEO with a targeted editorial strategy, strategic optimizations, and new page types like glossaries, listicles, and free tools.</p>

  <Row>
<Col lg={4} md={4} sm={12}>
<div>
  <p className="page_text"> IMpressions</p>
  <div className="dotted-line"></div>
  <p className="growth-number">
                + <CountUp start={1} end={17} duration={3} separator="," suffix=" M" decimals={1} />
              </p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div>
              <p className="page_text">Clicks</p>
              <div className="dotted-line"></div>
              <p className="growth-number">
                + <CountUp start={1} end={1.2} duration={3} separator="," suffix=" M" decimals={1} />
              </p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div>
              <p className="page_text">Conversions</p>
              <div className="dotted-line"></div>
              <p className="growth-number">
                + <CountUp start={1} end={7 } duration={3} separator="," suffix=" K" decimals={1} />
              </p>
</div>
</Col>
  </Row>
  <img src={require("../../assets/chart.png")} style={{maxHeight:"100%",maxWidth:"100%"}} alt=""/>
</Container>
    </Container>
{/*  */}
{/* seo-graphite-sec */}
    <Container fluid className="graphite-section">
<Container className="graphite-content-container">
  <div className="graphite-text-div">
  <p>Graphite</p>
  <p className="page_heading">We are a full-service SEO agency dedicated to driving impact</p> <br/>
  <p className="page_text">Our team integrates with your team to make sure the most important work gets done. It’s a collaborative, transparent approach that generates velocity across SEO (technical, programmatic and editorial) and CRO.</p>
  <button>Let's Connect </button>
  </div>
  <div style={{width:"45%"}}>
  <img src={require("../../assets/chart.png")} style={{maxHeight:"100%",maxWidth:"100%"}} alt=""/>
  </div>
</Container>
    </Container>
{/*  */}

{/* seo-img-slider */}
    {/* <ServiceSlider benefits={benefits} /> */}
 
    <ImageSwiper slides={slideData} />;
    
{/*  */}

{/* seo - research -sec */}
<Container fluid className="research-section">
      <Container className="research-content-container">
        <div className="research-left">
          <p className="research-title">Our research shows</p>
          <p className="research-number">
              <CountUp start={1} end={95 } duration={2} separator="," suffix=" %" decimals={0} />
              </p>
        </div>

        <div className="research-right">
          <p className="research-highlight">of SEO work is wasted effort</p>
          <p className="research-desc page_text">
            We analyzed the blogs of 3,000 sites and found that it’s common for 95% of pages
            to drive less than 5% of traffic.
          </p>
        </div>
      </Container>
    </Container>

    {/* seo-focus-sec */}
    <Container fluid className="focus-section">
<Container className="graphite-content-container">
  <div className="graphite-text-div">
  <p></p>
  <p className="page_heading">How to focus on the 5% that matters</p> <br/>
  <div className="bullet-paragraphs">
  <div className="bullet-paragraphs">
  <p className="square-bullet">Prioritize only high-impact work to generate results faster and more consistently</p>
  <p className="square-bullet">Prioritize only high-impact work to generate results faster and more consistently</p>
  <p className="square-bullet">Prioritize only high-impact work to generate results faster and more consistently</p>
</div>

</div>
<button>Let's Connect </button>
  </div>

  <div style={{width:"45%"}}>
  <img src={require("../../assets/chart.png")} style={{maxHeight:"100%",maxWidth:"100%"}} alt=""/>
  </div>
</Container>
</Container>

<Container>
  <div className="graphite-bottom-text-div">
        <p className="page_heading " style={{fontWeight:"400"}}>
          Graphite has proven that SEO isn’t a mysterious black box. They take a
          systematic, guided approach to get repeatable results across many, many
          clients. Very, very impressive results.
        </p>
      </div>
    </Container>
 
{/* seo-contact */}
    <Container style={{paddingTop:"7%",paddingBottom:"7%"}}>
<div className="underline"></div>
<p>How much impact will SEO have on your growth?</p>
<Link to="/contact">
  <button>Contact Us</button>
</Link>
    </Container>
{/*  */}
    </>
  );
};

export default PerformanceService;




