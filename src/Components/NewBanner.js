import React from "react";
import "./NewBanner.css";
import bannerVideo from "../assets/video/artistic-video.mp4"; 


const NewBanner = () => {
  return (
    <section className="newbanner">
      {/* Background Video */}
      <video
        className="newbanner-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="newbanner-overlay">
        <div className="newbanner-content">
          <h1 className="newbanner-title">
            Creative Digital Agency
            <span>21Maneuvers</span>
          </h1>

          <div className="newbanner-image-wrapper">
            <img
              src={require("../assets/home/Main Banner.png")}
              alt="Banner Graphic"
              className="newbanner-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBanner;
