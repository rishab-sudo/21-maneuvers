import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Blog.css"

const blogData = [
  { id: 1, title: 'Best Digital Marketing Agency for Schools ', description: 'Short description 1', image: 'https://via.placeholder.com/800x400' },
  { id: 2, title: 'Best Digital Marketing Agency for Colleges', description: 'Short description 2', image: 'https://via.placeholder.com/800x400' },
  { id: 3, title: 'Best Digital Marketing Agency in Bareilly', description: 'Short description 3', image: 'https://via.placeholder.com/800x400' },
  { id: 4, title: 'Top SEO Agencys in Bareilly ', description: 'Short description 4', image: 'https://via.placeholder.com/800x400' },
];

const Blog = () => {
  return (
    <Container fluid className="blog-section py-5">
      <Container className='blog-content-container'>
        <Row>
          {blogData.map((item) => (
            <Col xs={12} md={6} key={item.id} className="mb-4 blog-col">
              <Card className="blog-card h-100">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link to={`/blog/${item.id}`}>
                    <Button variant="dark" className="continue-btn">Continue →</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Blog;
