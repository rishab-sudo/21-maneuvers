// components/ServiceSlider.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ServiceSlider.css';

const ServiceSlider = () => {
  const benefits = [
    {
      title: "Boosts Visibility",
      desc: "Improves search engine ranking and online presence.",
    },
    {
      title: "Drives Traffic",
      desc: "Brings more users to your website through organic search.",
    },
    {
      title: "Builds Trust",
      desc: "Increases credibility with optimized, quality content.",
    },
    {
      title: "Cost-Effective",
      desc: "Organic SEO is more cost-effective than paid ads long-term.",
    },
    {
      title: "Better User Experience",
      desc: "Optimized websites are easier and faster for users to navigate.",
    },
  ];

  return (
    <Container fluid className='slider-section'>
      <Container className="seo-benefit-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {benefits.map((benefit, index) => (
            <SwiperSlide key={index}>
              <div className="seo-benefit-slide">
                <p className="seo-benefit-index">
                  <span className="square-box"></span> {index + 1}
                </p>
                <p className="seo-benefit-title">{benefit.title}</p>
                <p className="seo-benefit-desc">{benefit.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
};

export default ServiceSlider;
