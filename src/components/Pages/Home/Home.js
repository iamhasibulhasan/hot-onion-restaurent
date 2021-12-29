import React from 'react';
import HeroBanner from '../Layouts/HeroBanner/HeroBanner';
import ProductGrid from '../Layouts/ProductGrid/ProductGrid';
import './Home.css';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <ProductGrid></ProductGrid>
        </div>
    );
};

export default Home;