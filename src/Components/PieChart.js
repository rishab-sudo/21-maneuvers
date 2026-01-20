
import React from "react";
import "./PieChart.css";

const PieChart = () => {
  return (
    <div className="container-fluid pie-main-container">
      <div className="container pie-content-container">
        <div className="row align-items-center">
          
          {/* LEFT SECTION */}
          <div className="col-lg-6 col-md-12 pie-left">
            <p className="page-text ">WHAT WE DO</p>
            <h2 className="pie-title">
              Creative Studio of <br /> Strategy, Art & Technology.
            </h2>
            <p className="pie-intro">
              We turn ideas into results through purposeful creativity.
            </p>

            <div className="pie-points">
              <div className="pie-point">
                <h4>Performance-Driven Campaigns</h4>
                <p>Data-led digital strategies that deliver growth and measurable ROI.</p>
              </div>

              <div className="pie-point">
                <h4>High-Impact SEO & Websites</h4>
                <p>SEO-optimized, conversion-driven websites designed for seamless experiences.</p>
              </div>

              <div className="pie-point">
                <h4>Growth Marketing Strategies</h4>
                <p>Smart, scalable marketing built on insight, innovation, and consistency.</p>
              </div>

              <div className="pie-point">
                <h4>Content Creation & Storytelling</h4>
                <p>Reels, campaigns, and visuals that connect emotionally and perform digitally.</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-lg-6 col-md-12 pie-right">
            <img
              src= {require("../assets/home/piechart-removebg.png")}
              alt="Creative Strategy Visual"
              className="pie-image"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default PieChart;
