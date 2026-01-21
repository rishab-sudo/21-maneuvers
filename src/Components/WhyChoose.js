import React from "react";
import { Container } from "react-bootstrap";
import "./WhyChoose.css";


const WhyChoose = () => {
  return (
    <section className="whychoose">
      <Container className="whychoose-container">
        {/* Left Content */}
        <div className="whychoose-left">
          <h2 className="page_text">Why Choose Us</h2>
          <h3 className="page_heading">
            Because Every Maneuver Matters
          </h3>

          <p className="whychoose-description page_text">
            At 21 Maneuvers, we don’t just deliver campaigns, we build creative
            ecosystems that move brands forward. Our strength lies in
            understanding your vision, transforming it into meaningful stories,
            and turning creativity into measurable success.
          </p>

          <ul className="whychoose-list  page_text">
            <li>
              <strong>💡 Insight Meets Imagination</strong>
              <span>
                Every idea we create is backed by strategy, data, and emotional
                intelligence, ensuring creativity that connects and converts.
              </span>
            </li>

            <li>
              <strong>🎨 Design That Speaks</strong>
              <span>
                We combine design thinking with storytelling to build visuals
                that communicate more than words ever could.
              </span>
            </li>

            <li>
              <strong>🚀 Performance With Purpose</strong>
              <span>
                From SEO to social, every move we make is designed to drive
                engagement, growth, and ROI.
              </span>
            </li>

            <li>
              <strong>🤝 Partners, Not Vendors</strong>
              <span>
                We believe in long-term collaboration, working as an extension
                of your team, not just a service provider.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="whychoose-right">
          <img
            src={require("../assets/home/Main Banner.png")}
            alt="Why Choose Us"
            className="whychoose-image"
          />
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
