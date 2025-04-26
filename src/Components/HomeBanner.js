import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import './HomeBanner.css';

const slides = [
  {
    id: 1,
    image: '/slide21.jpg',
    heading: 'Digital Marketing & Advertising',
    subheading: 'Ignite Your Brand’s Potential Online',
    about: 'We craft results-driven digital journeys with precision and passion. At 21 Maneuvers, we lend creativity and performance to empower your online presence.',
    tags: [
      { number: '01.', title: 'Strategic Campaign Management' },
      { number: '02.', title: ' Engaging Content Production' },
      { number: '03.', title: ' Data-Driven Performance Analysis' }
    ]
  },
  {
    id: 2,
    image: '/slide21.jpg',
    heading: 'Branding & Identity Design',
    subheading: 'Shape a Distinctive Brand Presence',
    about: 'We help brands express their personality through bold visual identity and strategic design choices.',
    tags: [
      { number: '01.', title: 'Strategic Campaign Management' },
      { number: '02.', title: ' Engaging Content Production' },
      { number: '03.', title: ' Data-Driven Performance Analysis' }
    ]
  },
  {
    id: 3,
    image: '/slide21.jpg',
    heading: 'Content Creation & Strategy',
    subheading: 'Drive Engagement with Compelling Content',
    about: 'We strategize and craft content that resonates with your audience, delivering measurable impact.',
    tags: [
      { number: '01.', title: 'Strategic Campaign Management' },
      { number: '02.', title: ' Engaging Content Production' },
      { number: '03.', title: ' Data-Driven Performance Analysis' }
    ]
  }
];


const HeroBanner = () => {
  return (
    <div className="hero-container">
    <Swiper
  modules={[EffectFade, Autoplay, Navigation]}
  effect="fade"
  autoplay={{ delay: 4000 }}
  loop
  navigation={{
    nextEl: '.custom-swiper-next',
    prevEl: '.custom-swiper-prev',
  }}
  className="hero-swiper"
>
  {slides.map((slide) => (
    <SwiperSlide key={slide.id}>
      <div className="slide-bg" style={{ backgroundImage: `url(${slide.image})` }}>
        <div className="overlay-content">
          <div className="left-section">
            <div className="left-box">
              <h4>ABOUT</h4>
              <p>{slide.about}</p>
            </div>
          </div>

          <div className="right-section">
            <div className="top-row">
              <div className="center-box">
                <h5 className='banner-subheading'>{slide.subheading}</h5>
                <h1 style={{fontWieght:"500"}}>{slide.heading}</h1>
              </div>
              <div className="right-box">
                <p>Ignite Your Brand's Potential Online.</p>
              </div>
            </div>

            <div className="bottom-tag-box">
  {slide.tags.map((tagItem, index) => (
    <div key={index}>
      <span>{tagItem.number}</span><br />
      <span>{tagItem.title}</span>
    </div>
  ))}
</div>

            <div className="custom-nav-box">
  <div className="custom-swiper-prev">&lt;</div>
  <div className="custom-swiper-next">&gt;</div>
</div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default HeroBanner;
