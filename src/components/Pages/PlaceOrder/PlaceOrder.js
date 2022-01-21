import React from 'react';
import './PlaceOrder.css';
import { Container, Form, Button } from 'react-bootstrap';

const PlaceOrder = () => {
    return (
        <Container>
            <div className="place-order my-5">
                <div className="customer-details">
                    <h3>Edit Delivery Details</h3><hr />
                    <Form>
                        <Form.Group className="mb-3 input-place-order" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Deliver to Door" />
                        </Form.Group>
                        <Form.Group className="mb-3 input-place-order" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="107 Road No 8" />
                        </Form.Group>
                        <Form.Group className="mb-3 input-place-order" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Flat suite or Floor" />
                        </Form.Group>
                        <Form.Group className="mb-3 input-place-order" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Business Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 input-place-order" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Add Deliver Instructor" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button className='save-continue-btn' variant="secondary" size="lg">
                                Save & Continue
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="order-details">
                    <p>Form <strong>Buger King (BK)</strong></p>
                    <p>Arriving in 20-30 min</p>
                    <p>Nikunja-2 Road-20 House-12</p>

                    <div className="order-items">
                        <div className="order-item mb-3">
                            <img src="https://i.ibb.co/vc8QNS0/breakfast1.png" alt="" />
                            <div className="item-details">
                                <h3>Light Breakfast</h3>
                                <p className='item-price'>$55</p>
                                <p>Delivery Free</p>
                            </div>
                            <div className="item-quantity">
                                <p className='food-quantity'><button className='cal-cart'>-</button> <span className='px-2'>1</span> <button className='cal-cart'>+</button></p>
                            </div>
                        </div>
                        <div className="order-item mb-3">
                            <img src="https://i.ibb.co/vc8QNS0/breakfast1.png" alt="" />
                            <div className="item-details">
                                <h3>Light Breakfast</h3>
                                <p className='item-price'>$55</p>
                                <p>Delivery Free</p>
                            </div>
                            <div className="item-quantity">
                                <p className='food-quantity'><button className='cal-cart'>-</button> <span className='px-2'>1</span> <button className='cal-cart'>+</button></p>
                            </div>
                        </div>
                        <div className="payment-info">
                            <div className="pay">
                                <strong>Subtotal</strong>
                                <p>$320.00</p>
                            </div>
                            <div className="pay">
                                <strong>Tax</strong>
                                <p>$320.00</p>
                            </div>
                            <div className="pay">
                                <strong>Delivery Fee</strong>
                                <p>$320.00</p>
                            </div>
                            <hr />
                            <div className="pay">
                                <strong>Total</strong>
                                <p>$320.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default PlaceOrder;