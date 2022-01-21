import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Signup.css';

const Signup = () => {
    return (
        <Container>
            <div className="signup my-5">
                <div className="signup-img my-5">
                    <img src="https://i.ibb.co/8gnpVh0/logo-dark.png" alt="" />
                </div>
                <Form>
                    <Form.Group className="mb-3 input-signin" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 input-signin" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3 input-signin" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 input-signin" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Confirm Password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button className='sign-in-btn' variant="secondary" size="lg">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </div>
        </Container>
    );
};

export default Signup;