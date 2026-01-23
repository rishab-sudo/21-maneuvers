import React from "react";
import { Container } from "react-bootstrap";
import ImageSwiper from "../../Components/ImageSlider"
import LetsTalk from "../../Components/LetsTalk"
import "./WebsiteService.css";

const WebsiteService = () => {

  const slideData = [
  { image: require("../../assets/seo-img.png"), tagline: 'Boosts Visibility' },
  { image: require("../../assets/seo-img.png"), tagline: 'Drives Traffic' },
  { image: require("../../assets/seo-img.png"), tagline: 'Builds Trust' },
  { image: require("../../assets/seo-img.png"), tagline: 'Cost-Effective' },
  { image: require("../../assets/seo-img.png"), tagline: 'Better Experience' },
];

  return (
    <>
      {/* ================= BANNER ================= */}
      <Container fluid className="website-banner">
        <Container className="website-banner-inner">
          {/* LEFT CONTENT */}
          <div className="website-banner-content">
            <h1>Build a Powerful Website That Converts</h1>
            <p>
              We design and develop high-performance websites that are fast,
              responsive, SEO-friendly, and built to convert visitors into
              customers.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="website-banner-image">
            <img
            className="web-banner-img"
              src= {require("../../assets/services/web-mock.png")}
              alt="Website Development"
            />
          </div>
        </Container>
      </Container>

      {/* ================= FEATURE CARDS ================= */}
      <Container fluid className="web-feature-card-section">
        <h1 className="text-center mb-3">Core Features of Our Website Solutions</h1>
        <Container className="website-feature-cards">
        
          <div className="feature-cards-wrapper">
            <div className="feature-card">
              <h3>Responsive Design</h3>
              <p>
                Our responsive design ensures your website adapts perfectly to
                all devices including mobiles, tablets, and desktops while
                maintaining usability and brand consistency.
              </p>
            </div>

            <div className="feature-card">
              <h3>SEO Optimized</h3>
              <p>
                Built with clean code, proper heading structure, fast loading
                speed, and SEO best practices to improve rankings and organic
                visibility.
              </p>
            </div>

            <div className="feature-card">
              <h3>Fast Performance</h3>
              <p>
                Optimized assets and lightweight architecture ensure quick load
                times, reduced bounce rates, and improved user experience.
              </p>
            </div>

            <div className="feature-card">
              <h3>Custom UI/UX</h3>
              <p>
                Every interface is designed with conversion-focused layouts,
                intuitive navigation, and engaging user journeys.
              </p>
            </div>

            <div className="feature-card">
              <h3>Secure Architecture</h3>
              <p>
                Security-first development protects data, prevents
                vulnerabilities, and ensures long-term reliability.
              </p>
            </div>

            <div className="feature-card">
              <h3>Easy Management</h3>
              <p>
                Simple content management allows non-technical users to update
                content quickly and efficiently.
              </p>
            </div>
          </div>
        </Container>
      </Container>

       <ImageSwiper slides={slideData} />;

       <LetsTalk/>
    </>
  );
};

export default WebsiteService;
