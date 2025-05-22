import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-left">
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <img className="logo logo-21" src={require("../assets/logo-21.png")} alt=""/>
        </div>
      </nav>

      <div
        className={`menu-overlay ${menuOpen ? 'active' : ''} ${
          isMobile ? 'mobile' : 'desktop'
        }`}
      >
        <ul className="menu-links">
          <li><a href="/home">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
