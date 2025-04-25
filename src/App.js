import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; // import ThemeProvider
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Contact from './Pages/Contact';
import SeoService from "./Pages/SeoService"
import Footer from './Components/Footer';
import './App.css';
import ThemeToggleButton from './Components/ThemeToggleButton'; // import Toggle Button

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <ThemeToggleButton /> {/* Toggle Button */}
          <Navbar />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/seo-service" element={<SeoService />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
