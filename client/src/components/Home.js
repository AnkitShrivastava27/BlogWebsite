import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import './home2.css';
import DateTimeDisplay from "./DateTimeDisplay";

const Home = () => {
  return (
    <Container>
      {/* Sub Navbar for Categories and New Post */}
      <ul className='subnavar nav nav-pills justify-content-center my-3'>
        <li className='nav-item'><Link to='/' className='nav-link'>All</Link></li>
        <li className='nav-item'><Link to='/scifi' className='nav-link'>Scifi</Link></li>
        <li className='nav-item'><Link to='/science' className='nav-link'>Science & Tech</Link></li>
        <li className='nav-item'><Link to='/political' className='nav-link'>Political</Link></li>
        <li className='nav-item'><Link to='/sport' className='nav-link'>Sport</Link></li>
        <li className='nav-item'><Link to='/new' className='nav-link newpost-link'>New Blog</Link></li>
      </ul>

      <Row>
        {/* Main content area */}
        <Col lg={8} md={7}>
          <Outlet />
        </Col>

        {/* Sidebar */}
        <Col lg={4} md={5} className="sidebar d-none d-md-block">
          <Card className="mb-4">
            <Card.Body>
              <Card.Text>
                <DateTimeDisplay />
                <hr />
                <div>
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li><Link to='/profile'>Your Profile</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                  </ul>
                </div>
                <hr />
                <div>
                  <h5>Follow Us</h5>
                  <ul className="list-inline">
                    <li className="list-inline-item"><a href="https://github.com/AnkitShrivastava27" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li className="list-inline-item"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li className="list-inline-item"><a href="https://www.instagram.com/3dcosm?igsh=MTZrNjZ3OTNmYTBhaw==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  </ul>
                </div>
                <hr />
                <p>Welcome to wRIGHTISTs! Here you can express your thoughts, share your stories, and connect with others. Enjoy your stay!</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer Section */}
      <Row className="mt-4">
        <Col>
          <ul className="footer list-unstyled text-center">
            <li className="mb-3">
              <h5>Contact Us</h5>
              <p>+91 000000000</p>
              <p>someone@example.com</p>
            </li>
            <li>
              <h5>About Us</h5>
              <p>Hi there! Welcome to wRIGHTISTs, a platform where you can express your thoughts, share your stories, and connect with others.</p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
