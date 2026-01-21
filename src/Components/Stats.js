import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Counter from "./Counter";
import "./Stats.css";

const Stats = () => {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setStartCounting(true), 1000);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="coffee-fluid" ref={sectionRef}>
      <Container className="coffee-content-container">

        <div className="coffee-text-div">
          <img className="mb-2 coffee-icons-img" src={require("../assets/coffee_icon.png")} alt="" />
          <p >COFFEE CUPS</p>
          <Counter end={500} startCounting={startCounting} />
        </div>

        <div className="vertical-line" />

        <div className="coffee-text-div">
          <img className="mb-2 coffee-icons-img" src={require("../assets/projects_icon.png")} alt="" />
          <p>PROJECTS</p>
          <Counter end={1000} startCounting={startCounting} />
        </div>

        <div className="vertical-line" />

        <div className="coffee-text-div">
          <img className="mb-2 coffee-icons-img" src={require("../assets/working_days_icon.png")} alt="" />
          <p>WORKING DAYS</p>
          <Counter end={1800} startCounting={startCounting} />
        </div>

        <div className="vertical-line" />

        <div className="coffee-text-div">
          <img className="mb-2 coffee-icons-img" src={require("../assets/clients_icon.png")} alt="" />
          <p>CLIENTS</p>
          <Counter end={100} startCounting={startCounting} />
        </div>

      </Container>
    </Container>
  );
};

export default Stats;
