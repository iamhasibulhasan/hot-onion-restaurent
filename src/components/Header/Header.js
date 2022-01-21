import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand href="#home">
                    <Navbar.Brand href="#home">
                        <img
                            src="https://i.ibb.co/8gnpVh0/logo-dark.png"
                            width="100%"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="link-nav gy-5">
                        <Link to="/">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Link>
                        <Link to='/'>Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;