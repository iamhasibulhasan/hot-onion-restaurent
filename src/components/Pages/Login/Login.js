import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle } from '@fortawesome/free-solid-svg-icons';

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <Container>
            <div className="signup my-5">
                <div className="signup-img my-5">
                    <img src="https://i.ibb.co/8gnpVh0/logo-dark.png" alt="" />
                </div>
                <Form>
                    <Form.Group className="mb-3 input-signin" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3 input-signin" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button className='sign-in-btn' variant="secondary" size="lg">
                            Login
                        </Button>
                    </div>
                </Form>
                <div className="social-login mt-3">
                    <div className="s-login">
                        <div className='f-icon'><FaFacebookF /></div>
                        <div>
                            <a href="#">Sign in with facebook</a>
                        </div>
                    </div>
                    <div className="s-login">
                        <div className='f-icon'><FcGoogle /></div>
                        <div>
                            <a href="#">Sign in with google</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;