import React, { useRef, useState, useEffect } from 'react';
import {Container} from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './MainServicePage.css';

const circleData = [
  { label: "Performance Marketing", back: "back-1", front: "front-1", link: "/performance-service" },
  { label: "SEO", back: "back-2", front: "front-2", link: "/seo-service" },
  { label: "Content Creation", back: "back-3", front: "front-3", link: "/content-creation" }
];


const services = [
  {
    id: 1,
    name: 'Logo Design',
    title: ' Design a Logo That Speaks',
    description: ' Craft a visual identity that resonates. We turn your story into an unforgettable symbol. Make your first impression count.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 2,
    name: 'Packaging Design',
    title: ' Packaging That Sells & Shines',
    description: '  Stand out on every shelf with purpose.We blend form, function, and emotion.Packaging that tells your brand story.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 3,
    name: 'E-Invites',
    title: 'Digital Invites That Impress Instantly',
    description: ' Stylish, seamless, and ready to share. We design for both elegance and ease. Make every invite feel personal and memorable.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 4,
    name: 'Performance Marketing',
    title: 'Fueling Growth with Data-Driven Ads',
    description: ' From clicks to conversions, we optimize every step. Get real results with ROI-focused strategies.Performance marketing that drives smart growth.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 5,
    name: 'Social Media Branding',
    title: 'Crafting Your Brand Identity Today',
    description: 'Your imagination, our expertise. Build trust with scroll-stopping visuals. Limitless growth through powerful presence.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 6,
    name: 'SEO',
    title: 'Be Found. Stay Relevant. Win.',
    description: ' Boost visibility with proven SEO strategies.We bring traffic that actually converts.Rank higher, grow faster, stay ahead.',
    image: require("../assets/social-media-creative-design.png")
  },
];

const repeatedServices = Array(3).fill(services).flat(); // Repeat a few times for scrollable overflow

const ServiceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const boxRefs = useRef([]);
  const boxesContainerRef = useRef(null);

  const handleBoxClick = (idx) => {
    const serviceIdx = idx % services.length;
    swiperRef.current?.slideToLoop(serviceIdx);

    boxRefs.current[idx]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  };

  return (
      <>
    <Container fluid className="service-slider-wrapper">
      <Swiper
        className="service-swiper"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="slide">
              <div className="slide-content">
                <div className="left-text">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <div className="right-image">
                  <img src={service.image} alt={service.name} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="service-bar-section">
        <div className="service-bar-line"></div>
        <div
          className="service-boxes"
          ref={boxesContainerRef}
        >
          {repeatedServices.map((service, idx) => {
            const isActive = idx % services.length === activeIndex % services.length;
            return (
              <div
                key={idx}
                className={`service-box${isActive ? ' active' : ''}`}
                onClick={() => handleBoxClick(idx)}
                ref={(el) => (boxRefs.current[idx] = el)}
              
              >
                {service.name}
             
              </div>
            );
          })}
        </div>
      </div>
    </Container>

  <Container fluid className="mainservicepage-section">
  <div className="mainservicepage-content">
    {/* Left Side */}
    <div className="mainservicepage-left">
      <div className="mainservicepage-left-inner">
        <h1 className='demo-heading'>Move Bold,<br/> Matter More!</h1>
        <p className='page_text'>
        At 21 Maneuvers, we don’t just do digital we master it. From iconic brand identities to 
        high-impact campaigns, we help businesses stand out in a crowded world. Whether a startup or an established brand, our bold creativity and precise strategies give your brand the power to move and matter!
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="mainservicepage-right">
      <div className="mainservicepage-service">
        <h2 className='mb-2'>Brand & Identity</h2>
        <img className=" mainservicepage-service-img" src={require("../assets/social-media-creative-design.png")} alt="" />
        <p className='page_text'>From logos to packaging, we craft cohesive brand ecosystems that resonate deeply and leave a lasting impression. Every visual element reflects your brand’s story, values, and vision with clarity and consistency.</p>
        <ul className='page_text'>
          <li>Logo Design</li>
          <li> Packaging Design </li>
          <li> Social Media Branding</li>
          <li>E-Invites & E-Brochures</li>
          <li>Hoardings & Banners</li>
        </ul>
      </div>


      <div className="mainservicepage-service">
        <h2 className='mb-2'>Growth Marketing</h2>
        <img src={require("../assets/social-media-creative-design.png")} alt="" />
        <p className='page_text'>Accelerate your brand’s expansion with a full-funnel approach that combines data, creativity, and automation. We integrate performance, retention, and engagement strategies to drive measurable growth.</p>
        <ul className='page_text'>
          <li>Performance Marketing</li>
          <li>Social Media Strategy & Content Marketing</li>
          <li>Email Marketing & Automation Workflows</li>
          <li>WhatsApp Marketing & CRM Integration</li>
          <li> Influencer & Community Marketing </li>
          <li> Conversion Rate Optimization (CRO) </li>
          <li> Funnel Strategy & Campaign Setup </li>
        </ul>
      </div>

      <div className="mainservicepage-service">
        <h2 className='mb-2'>Website Development</h2>
        <img src={require("../assets/social-media-creative-design.png")} alt="" />
        <p className='page_text'> We craft responsive, user-centric websites that embody your brand’s identity—while helping you rank for your industry's top keywords through smart, integrated SEO.</p>
        <ul className='page_text'>
          <li>UI/UX Design</li>
          <li>Frontend & Backend Development</li>
          <li>E-commerce Solutions</li>
          <li>SEO & PPC Campaigns</li>
          <li>SEO Optimization</li>
        </ul>
      </div>
    </div>
  </div>
</Container>

{/* <div className="circle-container" style={{ marginTop: "7%" }}>
  {circleData.map((item, index) => (
    <a
      href={item.link}
      className="circle-link"
      key={index}
      style={{ textDecoration: "none" }}
    >
      <div className="circle-group">
        <div className="circle-overlay-text">{item.label}</div>
        <div className={`circle small back ${item.back}`} />
        <div className="circle main" />
        <div className={`circle small front small2 ${item.front}`} />
      </div>
    </a>
  ))}
</div> */}
<div className="circle-container" style={{ marginTop: "7%" }}>
  {/* Circle Group 1 */}
  <a
    href="/performance-service"
    className="circle-link"
    style={{ textDecoration: "none" }}
  >
    <div className="circle-group">
      <div className="circle-overlay-text">Performance Marketing</div>
      <div className="circle small back back-1" />
      <div className="circle main" />
      <div className="circle small front small2 front-1" />
    </div>
  </a>

  {/* Circle Group 2 */}
  <a
    href="/seo-service"
    className="circle-link"
    style={{ textDecoration: "none" }}
  >
    <div className="circle-group">
      <div className="circle-overlay-text">SEO</div>
      <div className="circle small back back-2" />
      <div className="circle main" />
      <div className="circle small front small2 front-2" />
    </div>
  </a>

  {/* Circle Group 3 */}
  <a
    href="/content-creation"
    className="circle-link"
    style={{ textDecoration: "none" }}
  >
    <div className="circle-group">
      <div className="circle-overlay-text">Content Creation</div>
      <div className="circle small back back-3" />
      <div className="circle main" />
      <div className="circle small front small2 front-3" />
    </div>
  </a>
</div>




  </>
  );
};

export default ServiceSlider;
