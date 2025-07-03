import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/admin.css';

const AdminLoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5500/api/admin/login', { name, password })
      .then(response => {
        console.log('Admin login successful:', response.data);
        toast.success("Admin login successful");
        navigate("/"); // Adjust the navigation path as needed
      })
      .catch(error => {
        console.error('Error logging in as admin:', error);
        toast.error("Error logging in as admin");
      });
  };

  return (
    <Container className="admin-login-page">
      <h2 className="text-center mb-4">Admin Login</h2>
      <Form onSubmit={handleAdminLogin}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
      <div className="options mt-4">
        <Link to="/login" className="option-link">Login as User</Link>
      </div>
    </Container>
  );
};

export default AdminLoginPage;