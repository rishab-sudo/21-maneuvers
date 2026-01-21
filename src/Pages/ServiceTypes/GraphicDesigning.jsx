import React from "react";
import { Container } from "react-bootstrap";
import "./GraphicDesigning.css";

const images = [
  { src: require("../../assets/services/content-mock.png"), title: "Brand Identity" },
  { src: require("../../assets/services/content-mock.png"), title: "Poster Design" },
  { src: require("../../assets/services/content-mock.png"), title: "Social Media" },

  { src: require("../../assets/services/content-mock.png"), title: "Campaign Visual" },

  { src: require("../../assets/services/content-mock.png"), title: "Packaging" },
  { src: require("../../assets/services/content-mock.png"), title: "Ad Creative" },
  { src: require("../../assets/services/content-mock.png"), title: "UI Graphics" },

  { src: require("../../assets/services/content-mock.png"), title: "Website Banner" },
  { src: require("../../assets/services/content-mock.png"), title: "Marketing Design" },

   { src: require("../../assets/services/content-mock.png"), title: "Print Design" },
  { src: require("../../assets/services/content-mock.png"), title: "Motion Frames" },

 
];

const GraphicDesigning = () => {
  return (
    <>
       <Container  fluid className='serviceType-banner-section'>
   <Container className='serviceType-banner-container'>
   
     <h1 className='page_heading mb-3'> Graphic Designing</h1>
     <p className="page_text">CRAFTING VISUAL IDENTITIES THAT SPEAK BEFORE WORDS DO</p>
     <p className="page_text">In a world driven by visuals, we design stories that captivate and communicate. At 21 Maneuvers, we merge creativity, strategy, and emotion to craft timeless designs that resonate across every platform. Because great design doesn’t just look good, it makes people feel something.
   </p>
   <p className='page_text'>21 Maneuvers | DESIGNING THE VISUAL LANGUAGE OF IMPACT</p>
   <img className='mt-2 performance-banner-img' src={require("../../assets/services/Brandid.png")} alt="content-service-banner"/>
   </Container>
   </Container>
    <section className="graphic-designing">
      <Container>
        <div className="graphic-grid">
          {images.map((item, index) => (
            <div className="graphic-card" key={index}>
              <img src={item.src} alt={item.title} />
              <div className="graphic-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
     </>
  );
};

export default GraphicDesigning;
