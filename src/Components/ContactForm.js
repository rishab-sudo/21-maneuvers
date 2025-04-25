import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Container } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    budget: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    )
    .then((response) => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        text: 'Your message has been sent successfully!',
      });
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        subject: '',
        budget: '',
      });
    })
    .catch((error) => {
      console.error('FAILED...', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
      });
    });
  };

  return (
    <Container className='form-container'>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Name*</label>
          <input type="text" name="name" placeholder='Your name' value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Company*</label>
          <input type="text" name="company" placeholder='Your company name' value={formData.company} onChange={handleChange} />
          {errors.company && <p className="error">{errors.company}</p>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email*</label>
          <input type="email" name="email" placeholder='Your working email' value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Phone No*</label>
          <input type="text" name="phone" placeholder='Your phon number' value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" placeholder='choose a subject' value={formData.subject} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Budget</label>
          <input type="text" name="budget" placeholder='Your budget' value={formData.budget} onChange={handleChange} />
        </div>
      </div>

      <button type="submit" className="submit-btn">Submit</button>
    </form>
    </Container>
  );
};

export default ContactForm;
