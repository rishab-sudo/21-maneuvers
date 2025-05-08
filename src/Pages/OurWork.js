import React from 'react';
import './OurWork.css';
import { Container } from 'react-bootstrap';

const workItems = [
  {
    id: 1,
    image: require("../assets/slide21.jpg"),
    text: 'Performance Marketing',
    link: '/performance-service',
  },
  {
    id: 2,
    image: require("../assets/slide21.jpg"),
    text: 'Seo',
    link: '/seo-service',
  },
  {
    id: 3,
    image: require("../assets/slide21.jpg"),
    text: 'Content-Creation',
    link: '/content-creation',
  },


];

const Work = () => {
  return (
    <Container fluid className='work-continer-fluid'>
      <Container>
        <p className='page_text'>SHOWCASE</p>
        <p className='page_heading'>Selected works</p>
      </Container>
      <Container className="work-content-container">

        {workItems.map(({ id, image, text, link }) => (
          <a href={link} key={id} className="card">
            <img src={image} alt={text} className="card-image" />
            <div className="overlay">
              <div className="overlay-text">{text}</div>
            </div>
          </a>
        ))}
      </Container>
    </Container>
  );
};

export default Work;
