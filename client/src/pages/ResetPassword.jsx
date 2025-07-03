import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import '../css/ResetPassword.css';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5500/api/user/resetPassword', { email })
      .then(response => {
        console.log('Password reset link sent:', response.data);
        toast.success("Password reset link sent");
      })
      .catch(error => {
        console.error('Error sending reset link:', error);
        toast.error("Error sending reset link!");
      });
  };

  return (
    <Container className="reset-password-page">
      <h2 className="text-center mb-4">Reset Password</h2>
      <Form onSubmit={handleResetPassword}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Send Reset Link
        </Button>
      </Form>
    </Container>
  );
};

export default ResetPasswordPage;
