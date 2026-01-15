import React,{useState,useEffect} from 'react';
// import emailjs from 'emailjs-com';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';
import HomeBanner from '../Components/HomeBanner'
import ClientReview from './ClientReview'
import Separate from "../Components/SeparateOurClient"
import Work from './OurWork'
import FAQ from './FAQ';
import faqImage from '../assets/home/FAQ (2).png';
import LetsTalk from "../Components/LetsTalk"
import Blog from '../Components/Blog';
import Stats from '../Components/Stats';

// Home services image
const images = [
  require('../assets/home/h21-1.png'),
  require('../assets/home/h21-2.png'),
    require('../assets/home/h21-3.png'),
      require('../assets/home/h21-4.png'),
        require('../assets/home/h21-5.png'),
];

// const awardsList = [
//   { img: require("../assets/award_21.png"), imgTitle: "5x Developer Award" },
//   { img: require("../assets/award_21.png"), imgTitle: "Best UI/UX 2023" },
//   { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
//   { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
//   { img: require("../assets/award_21.png"), imgTitle: "Innovation Champion" },
// ]
const faqData = [
  {
    question: "Custom-built websites that drive results",
    answer: " High-performance, scalable websites crafted with clean code, intuitive UX, and your  business goals in mind."
  },
  {
    question: "Marketing strategies that make an impact",
    answer: " From Social Media to SEO, PPC, and Meta Ads, creative meets conversion in every campaign we run."
  },
  {
    question: "Design that defines your identity",
    answer: "  Powerful visual branding, from logos to complete brand systems, that connects with your audience at every touchpoint."
  },
  {
    question: "Visual storytelling that connect and convert",
    answer: "From compelling brand videos to professional product shoots, we capture your story with style, clarity, and impact"
  },

];
const Home = () => {
    return (
    <>
    <HomeBanner />
    {/* Home-service-section */}
    <Container fluid className="service-container-fluid">
  <Container className="service-content-container">

    {/* LEFT : IMAGE SLIDER */}
    <div className="service-left-section">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="service-image-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Digital service showcase ${index + 1}`}
              className="service-swiper-image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-swiper-button-prev">←</div>
        <div className="custom-swiper-button-next">→</div>
      </Swiper>
    </div>

    {/* RIGHT : CONTENT */}
    <div className="service-right-section">

      {/* Heading */}
      <div className="service-heading-box">
        <p className="page_text">OUR SERVICES</p>

        <p className="page_main_heading">
          Complete Digital <br />
          Growth Solutions & <br />
          Creative Brand Experiences
        </p>
      </div>

      {/* Services List */}
      <div className="service-services-box page_text fw-bold">

        <div className="page_text">
          <div className="underline"></div>
          <p>Digital Growth Marketing</p>
          <p>Visual Branding & Design</p>
          <p>Professional Shoots & Media</p>
        </div>

        <div className="page_text">
          <div className="underline"></div>
          <p>Social Media & Content Strategy</p>
          <p>Print & Digital Collateral</p>
          <p>Website Development</p>
        </div>

      </div>
    </div>

  </Container>
</Container>

      <div className=''>
        <FAQ
          faqs={faqData}
          heading="We Design, Build & Market with Purpose
"
          image={faqImage}
          imagePosition="right"
        />
      </div>
      <Work />
       <Stats/>
      
      <ClientReview />
      <LetsTalk/>
     
</>
  )
}

export default Home