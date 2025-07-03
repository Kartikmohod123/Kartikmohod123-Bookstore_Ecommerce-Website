import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';
import '../css/contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/contact', formData); // Replace with your actual backend endpoint
      console.log('Backend Response:', response.data); // Logging the response data
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      alert('Your message has been sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <Container className="contact-us">
        <br /><br /><br />
      <Row className="py-4">
        <Col md={6}>
          <h3>Contact Us</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={5} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contact-details">
          <h3>Get in Touch</h3>
          <ul className="list-unstyled">
            <li>
              <FaPhone /> 9359281871
            </li>
            <li>
              <FaEnvelope /> patilbhuvan27@gmail.com
            </li>
            <li>
              <FaMapMarkerAlt /> SBJITMR College, City, Country
            </li>
          </ul>
          <div className="map-placeholder">
            {/* You can replace this with an actual map embedding */}
            <img src="https://th.bing.com/th/id/OIP.dhsjr_u_awq8I7yYHtPDBgHaEp?rs=1&pid=ImgDetMain" alt="Map" />
          </div>
        </Col>
      </Row> <br /><br /><br />
    </Container>
  );
};

export default ContactUs;