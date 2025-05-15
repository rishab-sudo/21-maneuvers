import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './MainServicePage.css';

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
    <div className="service-slider-wrapper">
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
    </div>
  );
};

export default ServiceSlider;
