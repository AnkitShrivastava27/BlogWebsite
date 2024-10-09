import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import './home2.css';
import DateTimeDisplay from "./DateTimeDisplay";

const Home = () => {
  return (
    <Container>
      {/* Navigation Bar */}
      <Row>
        <Col>
          <ul className='subnavar d-flex justify-content-around p-3'>
            <li><Link to='/'>All</Link></li>
            <li><Link to='/scifi'>Scifi</Link></li>
            <li><Link to='/science'>Science & Tech</Link></li>
            <li><Link to='/political'>Political</Link></li>
            <li><Link to='/sport'>Sport</Link></li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col md={8} className="mb-4">
          <Outlet />
        </Col>
        <Col md={4} className="sidecol">
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>New Blog</Card.Title>
              <Card.Text>
                <Link to='/new'>Create a New Blog Post</Link>
                <hr />
                <DateTimeDisplay />
                <hr />
                <div>
                  <h5>Quick Links</h5>
                  <ul>
                    <li><Link to='/profile'>Your Profile</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                  </ul>
                </div>
                <hr />
                <div>
                  <h5>Follow Us</h5>
                  <ul className="social-links list-unstyled">
                    <li><a href="https://github.com/AnkitShrivastava27" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com/3dcosm?igsh=MTZrNjZ3OTNmYTBhaw==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  </ul>
                </div>
                <hr />
                <p>Welcome to wRIGHTISTs! Here you can express your thoughts, share your stories, and connect with others. Enjoy your stay!</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer */}
      <Row>
        <Col>
          <ul className="footer list-unstyled">
            <li>
              <h3>Contact Us</h3>
              <p>+91 000000000</p>
              <p>someone@example.com</p>
            </li>
            <li>
              <h3>About Us</h3>
              <p>Hi there! Welcome to wRIGHTISTs, a platform where you can express your thoughts, share your stories, and connect with others.</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
