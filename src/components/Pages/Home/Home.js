import React from 'react';
import HeroBanner from '../Layouts/HeroBanner/HeroBanner';
import ProductGrid from '../Layouts/ProductGrid/ProductGrid';
import WhyChooseUs from '../Layouts/WhyChooseUs/WhyChooseUs';
import './Home.css';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <ProductGrid></ProductGrid>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;