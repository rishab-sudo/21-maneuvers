import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Contact from './Pages/Contact';
import SeoService from "./Pages/ServiceTypes/SeoService"
import Footer from './Components/Footer';
import './App.css';
import ThemeToggleButton from './Components/ThemeToggleButton';
import PerformanceService from './Pages/ServiceTypes/PerformanceService';
import ContentService from './Pages/ServiceTypes/ContentService';

// Layout component for wrapping all routes with Navbar, Footer, etc.
const Layout = ({ children }) => (
  <>
    <ThemeToggleButton />
    <Navbar />
    {children}
    <Footer />
  </>
);

// Define routes
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout><Home /></Layout>,
    },
    {
      path: '/home',
      element: <Layout><Home /></Layout>,
    },
    {
      path: '/about',
      element: <Layout><About /></Layout>,
    },
    {
      path: '/contact',
      element: <Layout><Contact /></Layout>,
    },
    {
      path: '/seo-service',
      element: <Layout><SeoService /></Layout>,
    },
    {
      path: '/performance-service',
      element: <Layout><PerformanceService /></Layout>,
    },
    {
      path: '/content-creation',
      element: <Layout><ContentService /></Layout>,
    },
    {
      path: '*',
      element: <Layout><Home /></Layout>, // fallback route
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from './context/ThemeContext'; // import ThemeProvider
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
// import About from './Pages/AboutUs';
// import Contact from './Pages/Contact';
// import SeoService from "./Pages/SeoService"
// import Footer from './Components/Footer';
// import './App.css';
// import ThemeToggleButton from './Components/ThemeToggleButton'; // import Toggle Button

// function App() {
//   return (
//     <ThemeProvider>
//       <div className="App">
//         <Router>
//           <ThemeToggleButton /> {/* Toggle Button */}
//           <Navbar />
//           <Routes>
//             <Route path="*" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/seo-service" element={<SeoService />} />
//           </Routes>
//           <Footer />
//         </Router>
//       </div>
//     </ThemeProvider>
//   );
// } 

// export default App;
// App.js

