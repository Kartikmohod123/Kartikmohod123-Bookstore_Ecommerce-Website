import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import '../css/footer.css';

const Footer = () => {
  // Function to send a sample request to the backend
  const sendRequest = async () => {
    try {
      const response = await axios.get('http://localhost:5500/sample'); // Replace with your actual backend endpoint
      console.log('Backend Response:', response.data); // Logging the response data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <footer className="footer bg-dark text-white">
      <Container>
        <Row className="py-4">
     
        <Col></Col>
          <Col md={3} className="footer-section">
            <h5>Terms and Policy</h5>
            <ul className="list-unstyled">
              <li>
                Terms & Service
              </li>
              <li>
                Privacy Policy
              </li>
            </ul>
          </Col><Col></Col>
          <Col md={3} className="footer-section"><br />
            <h5>Bookish Bliss</h5>
            <p>&copy; {new Date().getFullYear()} Bookish Bliss. All rights reserved.</p>
          </Col>
          <Col></Col>
          <Col md={3} className="footer-section">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <FaFacebook className="text-white mr-2" />
              <FaTwitter className="text-white mr-2" />
              <FaLinkedin className="text-white mr-2" />
              <FaInstagram className="text-white" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;