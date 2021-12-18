import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer p-4'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <img src="https://i.ibb.co/VxhbWPX/logo-light.png" width="30%" />
                    </Col>
                    <Col sm={3}>
                        <ul className="footer-nav">
                            <li><a href="#home">About Online Food</a></li>
                            <li><a href="#home">Read Our Blog</a></li>
                            <li><a href="#home">Sign up to deliver</a></li>
                            <li><a href="#home">Add your restaurant</a></li>
                        </ul>
                    </Col>
                    <Col sm={3}>
                        <ul className="footer-nav">
                            <li><a href="#home">Get help</a></li>
                            <li><a href="#home">Read FAQs</a></li>
                            <li><a href="#home">View all cities</a></li>
                            <li><a href="#home">Restaurant near me</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm>
                        <small>Copyright &copy; 2021. Hasibul Hasan</small>
                    </Col>
                    <Col sm>
                        <ul className="last-footer-nav">
                            <li><a href="#home">Privacy & Policy</a></li>
                            <li><a href="#home">Terms & Conditions</a></li>
                            <li><a href="#home">Pricing</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;