import React from 'react';
import './ProductGrid.css';
import { Button } from 'react-bootstrap';

const ProductGrid = () => {
    return (
        <div className='my-5'>
            <div className='food-time'>
                <ul className='d-flex'>
                    <li><a href="">Breakfast</a></li>
                    <li className='active'><a href="">Lunch</a></li>
                    <li><a href="">Dinner</a></li>
                </ul>
            </div>
            <div className='food-items'>
                <div className="item">
                    <div className='food-img'>
                        <img src="https://i.ibb.co/Bq9GNkg/lunch1.png" alt="" />
                    </div>
                    <div className='food-info'>
                        <h5>Fish Curry</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$ 26.5</p>
                    </div>
                </div>
                <div className="item">
                    <div className='food-img'>
                        <img src="https://i.ibb.co/vzXrFcL/lunch2.png" alt="" />
                    </div>
                    <div className='food-info'>
                        <h5>Fish Curry</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$ 26.5</p>
                    </div>
                </div>
                <div className="item">
                    <div className='food-img'>
                        <img src="https://i.ibb.co/SfNTYWn/lunch3.png" alt="" />
                    </div>
                    <div className='food-info'>
                        <h5>Fish Curry</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$ 26.5</p>
                    </div>
                </div>
                <div className="item">
                    <div className='food-img'>
                        <img src="https://i.ibb.co/QKk3xtk/lunch6.png" alt="" />
                    </div>
                    <div className='food-info'>
                        <h5>Fish Curry</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$ 26.5</p>
                    </div>
                </div>
                <div className="item">
                    <div className='food-img'>
                        <img src="https://i.ibb.co/pvxkFw3/lunch5.png" alt="" />
                    </div>
                    <div className='food-info'>
                        <h5>Fish Curry</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$ 26.5</p>
                    </div>
                </div>
                <div className="item">
                    <div className='food-img'>
                        <img src="https://i.ibb.co/QKk3xtk/lunch6.png" alt="" />
                    </div>
                    <div className='food-info'>
                        <h5>Fish Curry</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className="price">$ 26.5</p>
                    </div>
                </div>
            </div>
            <div className='checkout-div'>
                <Button className="checkout-btn">Checkout Your Food</Button>
            </div>

        </div>
    );
};

export default ProductGrid;