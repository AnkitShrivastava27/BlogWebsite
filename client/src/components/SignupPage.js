import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Import the CSS file for custom styling

const SignupPage = () => {
  const navigate = useNavigate();
  const API_BASE_URL = process.env.BACKENDLINK;
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://wrightist-backend.vercel.app/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data); // Log response from the backend
      // Optionally handle response messages here

      // Reset form and navigate to login page
      setFormData({
        username: '',
        fullname: '',
        email: '',
        password: ''
      });
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <Container className="signup-container mt-5">
      <h1 className="text-center">Sign Up</h1>
      <Form onSubmit={handleSubmit} className="signup-form">
        <Form.Group controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your user name"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="fullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
};

export default SignupPage;
