import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./HomeServices.css";

// Images
const images = [
  require('../assets/slide21.jpg'),
  require('../assets/slide21.jpg'),
  require('../assets/slide21.jpg'),
];

const OurServices = () => {
  return (
    <>
      <Container fluid className='service-container-fluid'>
        <Container className='service-content-container'>

          <div className='service-left-section'>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className='service-image-swiper'
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt={`service-${index}`} className="service-swiper-image" />
                </SwiperSlide>
              ))}

              {/* Custom Navigation Buttons */}
              <div className="custom-swiper-button-prev">←</div>
              <div className="custom-swiper-button-next">→</div>
            </Swiper>
          </div>

          <div className='service-right-section'>
            <div className='service-heading-box'>
              <p className='page_text'>OUR SERVICES</p>
              <p className='page_main_heading'>Full-service <br />
                IT Solutions and <br />
                Studio Level Design</p>
              
            </div>

            <div className='service-services-box page_text fw-bold'>
              <div >
                <div className='underline'></div>
                <p>Software Development</p>
                <p>Web Development</p>
                <p>Mobile Apps</p>
              </div>

              <div >
                <div className='underline'></div>
                <p>SEO & Marketing</p>
                <p>Brand Identity</p>
                <p>Content Creation</p>
              </div>
            </div>
          </div>

        </Container>
      </Container>

    </>
  );
};

export default OurServices;
