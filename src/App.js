import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ThemeToggleButton from './Components/ThemeToggleButton';
import CursorFollower from "./Components/CursorFollower/CursorFollower";
import ScrollToTopButton from "./Components/ScrollToTopButton";

import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Contact from './Pages/Contact';
import SeoService from "./Pages/ServiceTypes/SeoService";
import PerformanceService from './Pages/ServiceTypes/PerformanceService';
import SmmService from './Pages/ServiceTypes/SmmService';
import GraphicDesigning from "./Pages/ServiceTypes/GraphicDesigning";
import WebsiteService from "./Pages/ServiceTypes/WebsiteService";
import MainServicePage from './Pages/MainServicePage';
import Blog from './Components/Blog';
import BlogDetail from './Components/BlogDetail';

import './App.css';

/* Layout */
const Layout = ({ children }) => (
  <>
    <ThemeToggleButton />
    <CursorFollower />
    <Navbar />
    {children}
    <Footer />
    <ScrollToTopButton />
  </>
);

/* Routes */
const router = createBrowserRouter(
  [
    { path: '/', element: <Layout><Home /></Layout> },
    { path: '/home', element: <Layout><Home /></Layout> },
    { path: '/about', element: <Layout><About /></Layout> },
    { path: '/services', element: <Layout><MainServicePage /></Layout> },
    { path: '/contact', element: <Layout><Contact /></Layout> },
    { path: '/seo-service', element: <Layout><SeoService /></Layout> },
    { path: '/performance-service', element: <Layout><PerformanceService /></Layout> },
    { path: '/Smm-service', element: <Layout><SmmService /></Layout> },
    { path: '/Graphic-Designing', element: <Layout><GraphicDesigning /></Layout> },
    { path: '/Website-Service', element: <Layout><WebsiteService /></Layout> },
    { path: '/blog', element: <Layout><Blog /></Layout> },
    { path: '/blog/:id', element: <Layout><BlogDetail /></Layout> },
    { path: '*', element: <Layout><Home /></Layout> },
  ],
  {
    future: { v7_startTransition: true },
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
