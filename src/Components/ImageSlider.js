// components/ImageSlider.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
  return (
    <div className="image-swiper-wrapper">
        <Container>
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="image-swiper-slide">
              <img src={require("../assets/seo-img.png")} alt={`slide-${index}`} className="image-swiper-img" />
              <p className="image-swiper-tagline">{slide.tagline}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </Container>
    </div>
  );
};

export default ImageSlider;
