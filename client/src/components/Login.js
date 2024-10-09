import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Login.css'; // Import the CSS file for custom styling

function Login() {
  const API_BASE_URL = process.env.BACKENDLINK;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://wrightist-backend.vercel.app/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        Cookies.set('username', username, { expires: 1 / 24 });
        navigate('/profile');
        console.log('Login successful');
      } else {
        console.error('Login failed');
        alert("Your username or password is incorrect");
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <Container className="login-container mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center mb-4">
            <h2>Login</h2>
          </div>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={handleUsernameChange}
                required
                className="form-input"
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="form-input"
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit" className="submit-button">
                Login
              </Button>
            </div>
          </Form>
          <div className="text-center mt-3">
            <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
