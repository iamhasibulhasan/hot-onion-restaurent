import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './SingleFood.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const SingleFood = () => {
    return (
        <Container>
            <div className="single-food my-4">
                <div className="food-details">
                    <h2>Light Breakfast</h2>
                    <p className='lh-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea odio labore, soluta tempore in temporibus ut provident earum eos quas, minima, distinctio corporis deleniti ratione necessitatibus veritatis nesciunt quo? Ad?</p>
                    <div className="price-quantity">
                        <p className='food-price'>$55</p>
                        <p className='food-quantity'><button className='cal-cart'>-</button> <span className='px-2'>1</span> <button className='cal-cart'>+</button></p>
                    </div>
                    <Button className='add-cart' variant='secondary'> <FontAwesomeIcon icon={faCartPlus} /> Add</Button>
                </div>
                <div className="food-img">
                    <img src="https://i.ibb.co/vc8QNS0/breakfast1.png" alt="" />
                </div>
            </div>
        </Container>
    );
};

export default SingleFood;