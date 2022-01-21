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
            </div>
        </Container>
    );
};

export default Login;