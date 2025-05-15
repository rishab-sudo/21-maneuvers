import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './ClientReview.css';
import { Container } from 'react-bootstrap';

const ClientReview = () => {
  const reviews = [
    {
      name: "Stacey Rickson",
      title: "Web Developer",
      image: require("../assets/client-21.jpg"),
      text: "From our first call to the final product launch, the team was incredibly responsive, creative, and technically sharp. They understood our business needs and transformed them into a digital experience that truly stands out."
    },
    {
      name: "Liam Carter",
      title: "CTO, TechNova",
      image: require("../assets/client-21.jpg"),
      text: "From our first call to the final product launch, the team was incredibly responsive, creative, and technically sharp. They understood our business needs and transformed them into a digital experience that truly stands out."
    },
    {
      name: "Ava Johnson",
      title: "Founder, BrightNest",
      image: require("../assets/client-21.jpg"),
      text: "From our first call to the final product launch, the team was incredibly responsive, creative, and technically sharp. They understood our business needs and transformed them into a digital experience that truly stands out."
    },
  ];

  return (
    <Container fluid className="review-overlay-container">
      <div className="review-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='review-box'>
                <img className='client-review-img' src={review.image} alt={review.name} />
                <p className="review-title">{review.title}</p>
                <p className="review-text">“{review.text}”</p>
                <p className="review-name">{review.name}</p>
                <div className="review-nav-btns">
                  <span className="custom-prev review-nav-btn">&lt;</span>
                  <span className="custom-next review-nav-btn">&gt;</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </Container>
  );
};

export default ClientReview;
