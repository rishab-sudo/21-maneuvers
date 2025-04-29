import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

// imagePosition: Optional string ('left' or 'right'), defaults to 'right' if not passed
const FAQ = ({ faqs, heading, image, imagePosition = 'right' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Container fluid className='faq-container-fluid'>
      <div className='faq-content-container'>
        {/* Conditionally render image first if position is left */}
        {image && imagePosition === 'left' && (
          <div className='faq-right-section'>
            <img src={image} alt="FAQ visual" />
          </div>
        )}

        <div className='faq-left-section fq-section-padding'>
          {heading && <p className='faq-heading page_heading'>{heading}</p>}
          <div className='faq-items-wrapper'>
            {faqs.map((faq, index) => (
              <div className='faq-item' key={index}>
                <div className='faq-question' onClick={() => toggleFAQ(index)}>
                  <h5 className='page_text question'>{faq.question}</h5>
                  {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} style={{ color: "", backgroundColor: "" }} />}
                </div>
                <div className={`faq-answer-wrapper ${activeIndex === index ? 'open' : ''}`}>
                  <p className='faq-answer'>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conditionally render image last if position is right */}
        {image && imagePosition === 'right' && (
          <div className='faq-right-section'>
            <img src={image} alt="FAQ visual" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default FAQ;
