import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FAQ from './FAQ';
import faqImage from "../assets/21-creative2.jpg"
import bannerImg from "../assets/21-about2.jpg"
import "./AboutUs.css"

const faqData = [
  {
    question: "One Stop for Performance-Driven Digital Campaigns",
    answer: "We turn traffic into conversions with sharp creatives, smart targeting, and campaign optimization."
  },
  {
    question: "One Stop for SEO that Delivers Results",
    answer: "Boost rankings, drive traffic, and generate leads with proven, data-backed SEO strategies."
  },
  {
    question: "One Stop for Growth Marketing That Scales",
    answer: "Fuel business growth with full-funnel strategies, performance media, and data-driven execution."
  },
  {
    question: "One Stop for Content Creation That Connects",
    answer: "Engaging content that stops the scroll and sparks action across all digital platforms."
  },

];
const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = Math.ceil(end / 80); // Adjust speed
    const interval = setInterval(() => {
      start += speed;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 50); // Delay between steps

    return () => clearInterval(interval);
  }, [end]);

  return <h3>{count}+</h3>;
};
const About = () => {
  // const [activeIndex, setActiveIndex] = useState(null);
  // const toggleFAQ = (index) => {
  //   setActiveIndex(index === activeIndex ? null : index);
  // };
  return (
    <>
      {/* <Container fluid className='aboutus-banner-section'>
        <Container className='aboutus-banner-heading-div' >
          <p className='page_main_heading'>About Studio </p>
        </Container>
      </Container> */}
      <Container
  fluid
  className='aboutus-banner-section'
  style={{
   backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center"
  }}
>
  <Container className='aboutus-banner-heading-div'>
    {/* <p className='page_main_heading'>About Studio</p> */}
  </Container>
</Container>


      <Container fluid className='about-container-fluid'>
        <Container className='about-content-container'>

          <div className='about-left-section'>
            <p className='page_text fw-bold'> ABOUT US</p>
            <p className='page_heading'>            
          "People do not buy goods and services. They buy relations, stories and magic." <br/>
Bharat Aggarwal
</p>
          </div>

          <div className='about-right-section'>
            <p className='page_text'>
We’re a crew of curious minds and bold creators, always chasing the next big idea and unforgettable collaborations.
</p>
 <div className=' page_text fw-bold'>
    <h2 className='page_heading'>We’re 21 Maneuvers, a multidisciplinary force of strategy, story, and style.
</h2>
<p>From scrappy startups to seasoned giants, we craft bold brands, magnetic designs, and digital experiences that don’t just compete, they captivate.
</p>
<p>In a world of noise, we help you speak louder, clearer, and more creatively. Welcome to your next leap forward.</p>
              {/* <div >
                <div className='underline'></div>
                <p>Social Media Management</p>
                <p>Graphic Designing</p>
                <p>Website Designing</p>
                <p>Ad Campaigns</p>
              </div>

              <div >
                <div className='underline'></div>
                <p>SEO & Marketing</p>
                <p>Brand Development</p>
                <p>Performance Marketing</p>
                <p>Content Creation</p>
              </div> */}
            </div>
          </div>
        </Container>
      </Container>

      {/* About-bg-img */}
      <div className="about-bg">
        <div className="stats-wrapper">
          <div className="stat-card">
            <Counter end={21} />
            <p className="fw-bold">Awards</p>
          </div>
          <div className="stat-card stat-card2">
            <Counter end={100} />
            <p className="fw-bold">Clients</p>
          </div>
        </div>
      </div>
      {/* About-FAQ-section */}
      <div className='w-auto'>
        <Container style={{ marginTop: "5%", marginBottom: "5%" }}>
          <p className='page_text'> CAPABILITIES</p>
          <p className='page_heading'> Creative studio with<br />art & technologies.</p>
        </Container>
        <FAQ
          faqs={faqData}
          heading="We work in the fields of art direction."
          image={faqImage}
          imagePosition="left"
        />
      </div>
      {/* About us award section starts */}
      <Container fluid className='about-awards-container-fluid'>
        <Container className='text-center'>
          <p className='page_heading'>21 Steps. One Vision. The Journey Begins.</p><br/>
       <p className='page_text'>
        Our story began not in a boardroom, but amidst the vibrant energy of Italy. During their Masters, our founders, fueled by late-night conversations and the timeless pursuit of growth, stumbled upon a profound question over drinks: What are the 21 essential things a brand truly needs to scale? That pivotal discussion sparked a vision. It was in that moment, distilling years of insights into actionable strategies, that the foundation of 21 Maneuvers was laid – 
        built on the ambition to empower and scale brands through precise, impactful strategies.
        </p>
        </Container>
      </Container>
      {/* About us award section ends */}

      {/* About-us testimonials section starts */}
      <Container fluid className='about-testimonial-container-fluid'>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12} xs={12}>
              <p className='page_text fw-bold'>TESTIMONIALS</p>
              <p className='page_heading'>What our clients say about our studio.</p>
            </Col>

            <Col lg={8} md={4} sm={12} xs={12} className='position-relative'>
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={30}
                navigation={{
                  prevEl: '.testimonial-prev',
                  nextEl: '.testimonial-next',
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                  breakpoints={{
  
    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
 
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = '.testimonial-prev';
                  swiper.params.navigation.nextEl = '.testimonial-next';
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                className='testimonial-swiper'
              >
                <SwiperSlide>
                  <div className='about-testimonial-text-div'>
                    <p className='fw-bold'>IT Solutions</p>
                    <p className='page_text'>Within our company, we are a fully independent team of developers, designers, programmers and project managers that work hard to provide our clients with the best technology services and support they need to help them get the best business results they can.</p>
                    <p>Alex Regelman</p>
                    <p>Co-founder, Colabrio</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='about-testimonial-text-div'>
                    <p className='fw-bold'>IT Solutions</p>
                    <p className='page_text'>Within our company, we are a fully independent team of developers, designers, programmers and project managers that work hard to provide our clients with the best technology services and support they need to help them get the best business results they can.</p>
                    <p>Alex Regelman</p>
                    <p>Co-founder, Colabrio</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='about-testimonial-text-div'>
                    <p className='fw-bold'>IT Solutions</p>
                    <p className='page_text'>Within our company, we are a fully independent team of developers, designers, programmers and project managers that work hard to provide our clients with the best technology services and support they need to help them get the best business results they can.</p>
                    <p>Alex Regelman</p>
                    <p>Co-founder, Colabrio</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='about-testimonial-text-div'>
                    <p className='fw-bold'>IT Solutions</p>
                    <p className='page_text'>Within our company, we are a fully independent team of developers, designers, programmers and project managers that work hard to provide our clients with the best technology services and support they need to help them get the best business results they can.</p>
                    <p>Alex Regelman</p>
                    <p>Co-founder, Colabrio</p>
                  </div>
                </SwiperSlide>

                {/* Arrows */}
                <div className="testimonial-arrows">
                  <button className="testimonial-prev arrow-circle">{'<'}</button>
                  <button className="testimonial-next arrow-circle">{'>'}</button>
                </div>
              </Swiper>
            </Col>

          </Row>
        </Container>
      </Container>
      {/* About-us testimonials section ends */}
    </>
  )
}

export default About