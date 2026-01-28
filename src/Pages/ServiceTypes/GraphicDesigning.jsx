import React from "react";
import { Container } from "react-bootstrap";
import LetsTalk from "../../Components/LetsTalk"
import "./GraphicDesigning.css";

const images = [
  { src: require("../../assets/services/gd-bdrand-Identity.png"), title: "Brand Identity" },
  { src: require("../../assets/services/gd-Print-design.png"), title: "Poster Design" },
  { src: require("../../assets/services/gd-logo.png"), title: "Logo Design" },

  { src: require("../../assets/services/gd-social-media.png"), title: "Social Media " },
  
  { src: require("../../assets/services/gd-Packging.png"), title: "Packaging" },
  { src: require("../../assets/services/gd-Ecard.png"), title: "E Cards" },
  { src: require("../../assets/services/gd-Web3.png"), title: "Websites" },
  
  // { src: require("../../assets/services/gd-web-design2.png"), title: "Website Design" },
  // { src: require("../../assets/services/content-mock.png"), title: "Marketing Design" },

  //  { src: require("../../assets/services/content-mock.png"), title: "Print Design" },
  // { src: require("../../assets/services/content-mock.png"), title: "Motion Frames" },

 
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
   <img
  className='mt-2 performance-banner-img gd-banner-img ok light-img'
  src={require("../../assets/services/gd-banner-white.png")}
  alt="Graphic Designing Light"
/>

<img
  className='mt-2 performance-banner-img gd-banner-img ok dark-img'
  src={require("../../assets/services/gd-banner-dark.png")}
  alt="Graphic Designing Dark"
/>

   </Container>
   </Container>
    <section className="graphic-designing">
      <Container className="graphic-container">
        {/* <h1>Services We Offer</h1> */}
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

        <Container className='serviceType-descp-section'>
          <Container className='serviceType-descp-content-container'>
    <p className='page_text'>21 Maneuvers | DESIGNING VISUAL IDENTITIES THAT COMMAND ATTENTION</p>
    <h1>We Build Strategic Digital Campaigns</h1>
    <h1> That Deliver Real ROI</h1>
    <p className='mt-5 page_text'>At 21 Maneuvers, graphic design is where strategy meets storytelling. Every color, layout, and pixel is crafted to create impact, evoke emotion, and leave a lasting impression. Because good design is seen great design is remembered.</p>
    <p className='page_text'>
    </p>
        <p className="page_text">21 Maneuvers | ELEVATING YOU INTO A BIGGER DIGITAL UNIVERSE</p>
          </Container>
        </Container>

        <Container className='elevate-section'>
        <Container className='elevate-content-container'>   
          <div className='elevate-left-side'>
        <p className='fancy-txt'>Design <span style={{fontFamily:"arial"}}> That Engages & </span></p>
        <p className='extrabold-fancy-text'></p>
        <p className='fancy-txt'></p>
        <p className='extrabold-fancy-text'style={{color:"#F5A522"}}>Endures</p>
        <p className='extrabold-fancy-text'style={{color:"#F5A522"}}> Fast!</p>
          </div>
          <div className='elevate-right-side'>
        <p className='page_text'>
     In the fight for attention, design is your strongest advantage.
At 21 Maneuvers, we create scroll-stopping graphic design that blends visual impact with strategic intent. 
Every layout, color choice, and composition is engineered to communicate clearly, connect emotionally, and convert instantly.
From high-impact social creatives and ad visuals to brand identities and web graphics, our designs don’t just look good 
they guide the eye, reinforce your message, and move audiences to act. Because when design is done right, performance follows.
        </p>
          </div>
        </Container>
        </Container>
        
            <LetsTalk/>
     </>
  );
};

export default GraphicDesigning;
