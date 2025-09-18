import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./Stats.css";

const Stats = () => {
  const sectionRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  // Detect when the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // wait 1 second after it becomes visible
          const timer = setTimeout(() => setStartCounting(true), 1000);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 } // 30% of the section must be visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCounting) return; // don’t start until allowed

      let current = 0;
      const speed = Math.ceil(end / 80); // Adjust speed as needed
      const interval = setInterval(() => {
        current += speed;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, 50);

      return () => clearInterval(interval);
    }, [end, startCounting]);

    return <h3>{count}+</h3>;
  };

  return (
    <Container fluid className="coffee-fluid" ref={sectionRef}>
      <Container className="coffee-content-container">
        <div className="coffee-text-div">
          <img
            className="coffee-icons-img"
            src={require("../assets/coffee_icon.png")}
            alt=""
          />
          <p className="page_text">COFFEE CUPS</p>
          <Counter end={500} />
        </div>

        <div className="vertical-line"></div>

        <div className="coffee-text-div">
          <img
            className="coffee-icons-img"
            src={require("../assets/projects_icon.png")}
            alt=""
          />
          <p>PROJECTS</p>
          <Counter end={100} />
        </div>

        <div className="vertical-line"></div>

        <div className="coffee-text-div">
          <img
            className="coffee-icons-img"
            src={require("../assets/working_days_icon.png")}
            alt=""
          />
          <p>WORKING DAYS</p>
          <Counter end={5000} />
        </div>

        <div className="vertical-line"></div>

        <div className="coffee-text-div">
          <img
            className="coffee-icons-img"
            src={require("../assets/clients_icon.png")}
            alt=""
          />
          <p>CLIENTS</p>
          <Counter end={100} />
        </div>
      </Container>
    </Container>
  );
};

export default Stats;
