import React, { useRef, useState, useEffect } from 'react';
import {Container} from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './MainServicePage.css';

const circleData = [
  { label: "Performance Marketing", back: "back-1", front: "front-1" },
  { label: "SEO", back: "back-2", front: "front-2" },
  { label: "Content Creations", back: "back-3", front: "front-3" }
];

const services = [
  {
    id: 1,
    name: 'Logo Design',
    title: 'CRAFTING YOUR ONLINE IDENTITY TODAY',
    description: 'Shaping Future Digital Landscapes Today – Your Imagination, Our expertise, and Limitless Potential Waiting to Be Unveiled.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 2,
    name: 'Social Media',
    title: 'SOCIAL MEDIA PRESENCE',
    description: 'Grow your brand with creative and strategic social media campaigns.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 3,
    name: 'Website',
    title: 'WEBSITE DEVELOPMENT',
    description: 'Modern, responsive websites that convert visitors into customers.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 4,
    name: 'Packaging Design',
    title: 'PACKAGING DESIGN',
    description: 'Stand out on the shelf with unique, memorable packaging.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 5,
    name: 'Brand Design',
    title: 'BRAND DESIGN',
    description: 'Build a cohesive, powerful brand identity.',
    image: require("../assets/social-media-creative-design.png")
  },
  {
    id: 6,
    name: 'Logo Design',
    title: 'LOGO DESIGN',
    description: 'Stand out on the shelf with unique, memorable packaging.',
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
          delay: 5000,
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

      <div className="service-bar">
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
        <h1 className='demo-heading'>Everything,<br/> Made <br/> Simple</h1>
        <p>
          At SimplePlan, we pretty much do it all. From creating an unforgettable brand identity to extending your brand's reach, our comprehensive range of customized services is all you and your brand need!
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="mainservicepage-right">
      <div className="mainservicepage-service">
        <h2>Brand & Identity</h2>
        <img src={require("../assets/social-media-creative-design.png")} alt="" />
        <p>A charming personality can open many doors in life, and your brand's identity is no exception. We specialize in crafting brands that always leave an enduring impression.</p>
        <ul>
          <li>Brand Strategy & Positioning</li>
          <li>Visual Identity Design</li>
          <li>Logo & Brand Assets</li>
          <li>Guideline Documentation</li>
        </ul>
      </div>

      <div className="mainservicepage-service">
        <h2>Social Media Marketing</h2>
        <img src={require("../assets/social-media-creative-design.png")} alt="" />
        <p>Creative campaigns that connect with your audience and help grow your online presence.</p>
        <ul>
          <li>Content Creation</li>
          <li>Platform Strategy</li>
          <li>Ad Management</li>
          <li>Performance Analytics</li>
        </ul>
      </div>

      <div className="mainservicepage-service">
        <h2>Website Development</h2>
        <img src={require("../assets/social-media-creative-design.png")} alt="" />
        <p>Build modern, fast, and responsive websites designed to convert visitors into customers.</p>
        <ul>
          <li>UI/UX Design</li>
          <li>Frontend & Backend Dev</li>
          <li>E-commerce Solutions</li>
          <li>SEO Optimization</li>
        </ul>
      </div>
    </div>
  </div>
</Container>

<div className="circle-container">
  {circleData.map((item, index) => (
    <div className="circle-group" key={index}>
      {/* Overlay text comes FIRST so it stacks above */}
      <div className="circle-overlay-text">{item.label}</div>

      {/* Circles remain unchanged */}
      <div className={`circle small back ${item.back}`} />
      <div className="circle main" />
      <div className={`circle small front small2 ${item.front}`} />
    </div>
  ))}
</div>


  </>
  );
};

export default ServiceSlider;
