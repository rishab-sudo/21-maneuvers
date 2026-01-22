import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeMenu = () => {
  setMenuOpen(false);
  setServiceOpen(false);
};


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setServiceOpen(false);
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

          <Link to="/home">
            <img
              className="logo logo-21"
              src={require("../assets/logo-21.png")}
              alt="Digital Marketing"
            />
          </Link>
        </div>
      </nav>

      <div className={`menu-overlay ${menuOpen ? 'active' : ''} ${isMobile ? 'mobile' : 'desktop'}`}>
    <ul className="menu-links">
  <li>
    <Link to="/home" onClick={closeMenu}>Home</Link>
  </li>

  <li>
    <Link to="/about" onClick={closeMenu}>About</Link>
  </li>

  {/* SERVICES WITH SIDE DROPDOWN */}
<li
  className={`services-link ${serviceOpen ? 'open' : ''}`}
  onMouseEnter={() => !isMobile && setServiceOpen(true)}
  onMouseLeave={() => !isMobile && setServiceOpen(false)}
>
  <div className="services-row">
    {/* SERVICES MAIN LINK */}
    <Link to="/services" onClick={closeMenu}>
      Services
    </Link>

    {/* MOBILE DROPDOWN ARROW */}
    {isMobile && (
      <span
        className={`dropdown-arrow ${serviceOpen ? 'rotate' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setServiceOpen(!serviceOpen);
        }}
      >
        ▾
      </span>
    )}
  </div>

  <div className="services-dropdown">
    <Link to="/services" onClick={closeMenu}>Our Services</Link>
    <Link to="/Smm-service" onClick={closeMenu}>Social Media Marketing</Link>
    <Link to="/performance-service" onClick={closeMenu}>Performance Marketing</Link>
    <Link to="/Graphic-Designing" onClick={closeMenu}>Graphic Designing</Link>
       <Link to="/Seo-service" onClick={closeMenu}>Seo</Link>
  </div>
</li>


  <li>
    <Link to="/contact" onClick={closeMenu}>Contact</Link>
  </li>
</ul>

      </div>
    </>
  );
};

export default Navbar;
