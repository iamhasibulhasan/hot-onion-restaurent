import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './HeroBanner.css';

const HeroBanner = () => {
    return (
        <div className="hero mb-3">
            <img src="https://i.ibb.co/LpGKhJx/bannerbackground.png" alt="" />
            <div className="search">
                <h2 className="hero-title">Best Food waiting for  your belly.</h2><br />
                <div className="position-relative">
                    <input className="form-control rounded-pill border-0" type="text" placeholder='Search your food...' />
                    <Button className="rounded-pill search-btn">Search</Button>
                </div>
            </div>

        </div>
    );
};

export default HeroBanner;