import React from 'react';
import './OurWork.css';
import { Container } from 'react-bootstrap';


const workItems = [
  {
    id: 1,
  image: require("../assets/services/pm black.png"),
    hoverImage: require("../assets/services/pm color.png"),
    text: "Performance Marketing",
    link: "/performance-service",
  },
  {
    id: 2,
  image: require("../assets/services/seo black (2).png"),
    hoverImage: require("../assets/services/seo 22.png"),
    text: "SEO",
    link: "/seo-service",
  },
  {
    id: 3,
  image: require("../assets/services/creation black.png"),
    hoverImage: require("../assets/services/creation  color.png"),
    text: "Content-Creation",
    link: "/content-creation",
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
{workItems.map(({ id, image, hoverImage, text, link }) => (
  <a href={link} key={id} className="card">
    <div className="card-img-wrapper">
      <img src={image} alt={text} className="card-image default-img" />
      <img src={hoverImage} alt={text} className="card-image hover-img" />
    </div>
</a>
))}


      </Container>
    </Container>
  );
};

export default Work;
