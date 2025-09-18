import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

const blogData = [
  {
    id: 1,
    title: 'Blog Title 1',
    image: 'https://via.placeholder.com/800x400',
    content: [
      { type: 'text', value: 'Welcome to blog 1. This is the introduction paragraph with insights.' },
      { type: 'image', value: 'https://via.placeholder.com/700x300' },
      { type: 'text', value: 'This paragraph comes after the image and continues the story.' },
      { type: 'image', value: 'https://via.placeholder.com/600x250' },
      { type: 'text', value: 'Finally, we wrap up this blog with a strong conclusion and next steps.' },
    ],
  },
  {
    id: 2,
    title: 'Blog Title 2',
    image: 'https://via.placeholder.com/800x400',
    content: [
      { type: 'text', value: 'Blog 2 starts here with detailed analysis.' },
      { type: 'image', value: 'https://via.placeholder.com/750x300' },
      { type: 'text', value: 'More interesting findings follow this image.' },
    ],
  },
  {
    id: 3,
    title: 'Blog Title 3',
    image: 'https://via.placeholder.com/800x400',
    content: [
      { type: 'text', value: 'Blog 3 gives some insights into creative design patterns.' },
      { type: 'image', value: 'https://via.placeholder.com/600x300' },
      { type: 'text', value: 'It continues with an example and more learning points.' },
    ],
  },
  {
    id: 4,
    title: 'Blog Title 4',
    image: 'https://via.placeholder.com/800x400',
    content: [
      { type: 'text', value: 'This is blog 4, the last one in our series.' },
      { type: 'image', value: 'https://via.placeholder.com/650x300' },
      { type: 'text', value: 'Thank you for following along!' },
    ],
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <Container fluid className="blog-section py-5">
      <Container className="blog-detail-container">
        <Card className="blog-detail-card mx-auto">
          <Card.Img variant="top" src={blog.image} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>

            {blog.content.map((block, index) =>
              block.type === 'text' ? (
                <p className="blog-text" key={index}>{block.value}</p>
              ) : (
                <img
                  key={index}
                  src={block.value}
                  alt={`blog-img-${index}`}
                  className="blog-inline-image my-4"
                />
              )
            )}

            <Link to="/">
              <Button variant="secondary" className="mt-4">← Back to Blogs</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default BlogDetail;
