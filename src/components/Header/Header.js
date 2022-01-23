import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
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
                        {
                            user?.email ?
                                <Link onClick={logOut} to="/">Logout</Link> :
                                <Link to="/login">Login</Link>
                        }
                        {
                            user?.email ?
                                <Link to="/">{user.displayName}</Link> :
                                <Link to="/signup">Signup</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;