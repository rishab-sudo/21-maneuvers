import React from "react";
import "./OurWork.css";
import { Container } from "react-bootstrap";
/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const workItems = [
  {
    id: 1,
    image: require("../assets/services/pm black.png"),
    hoverImage: require("../assets/services/pm color.png"),
    text: "Performance Marketing",
    link: "/performance-service",
  },
  {
    id: 2,
    image: require("../assets/services/seo black (2).png"),
    hoverImage: require("../assets/services/seo 22.png"),
    text: "SEO",
    link: "/seo-service",
  },
  {
    id: 3,
    image: require("../assets/services/creation black.png"),
    hoverImage: require("../assets/services/creation  color.png"),
    text: "Content-Creation",
    link: "/content-creation",
  },
  {
    id: 4,
    image: require("../assets/services/web black.png"),
    hoverImage: require("../assets/services/web color 2.png"),
    text: "Website Development",
    link: "/website-development",
  },
];

const Work = () => {
  return (
    <Container fluid className="work-continer-fluid">
      <Container style={{marginBottom:"0px"}}>
        <p className="page_text">SHOWCASE</p>
        <p className="page_heading">Selected works</p>
      </Container>

      {/* 🔥 DESKTOP SLIDER */}
      <Container className="work-content-container desktop-only">
        <div className="slider-nav-wrapper">
          <button className="work-nav prev-btn">←</button>
          <button className="work-nav next-btn">→</button>
        </div>

      <Swiper
  modules={[Navigation]}
  slidesPerView={3}
  spaceBetween={30}
  loop={true}   // keep or set false if you want
  navigation={{
    prevEl: ".prev-btn",
    nextEl: ".next-btn",
  }}
>

          {workItems.map(({ id, image, hoverImage, text, link }) => (
            <SwiperSlide key={id}>
              <a href={link} className="card">
                <div className="card-img-wrapper">
                  <img src={image} alt={text} className="card-image default-img" />
                  <img src={hoverImage} alt={text} className="card-image hover-img" />
                </div>
                <p className="card-title">{text}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>

      {/* 📱 MOBILE – SAME AS YOUR EXISTING LAYOUT */}
      <Container className="work-content-container mobile-only">
        {workItems.map(({ id, image, hoverImage, text, link }) => (
          <a href={link} key={id} className="card">
            <div className="card-img-wrapper">
              <img src={image} alt={text} className="card-image default-img" />
              <img src={hoverImage} alt={text} className="card-image hover-img" />
            </div>
            <p className="card-title">{text}</p>
          </a>
        ))}
      </Container>
    </Container>
  );
};

export default Work;
