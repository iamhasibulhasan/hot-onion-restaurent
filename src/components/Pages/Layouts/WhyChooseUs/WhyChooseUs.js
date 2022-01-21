import React from 'react';
import { Container } from 'react-bootstrap';
import './WhyChooseUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusAlt, faBell, faTruck, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const WhyChooseUs = () => {
    return (
        <Container>
            <div className="why-choose-us">
                <div className='choose-details'>
                    <div>
                        <h2>Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, tempore repudiandae expedita placeat facilis doloremque?</p>
                    </div>
                </div>
                <div className='choose-grids mb-3'>

                    <div className="choose-grid">
                        <img src="https://i.ibb.co/37wHNJJ/images-2.png" alt="" />
                        <div className="grid-details">
                            <div className="grid-title mt-3">
                                <div className="grid-icon">
                                    <FontAwesomeIcon size="lg" icon={faBusAlt} />
                                </div>
                                <h3>Fast Delivery</h3>
                            </div>
                            <div className="grid-info">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quo dolore hic voluptates, repudiandae ad.</p>
                                <div className="see-more">
                                    <a href="#">See more <FontAwesomeIcon icon={faArrowCircleRight} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="choose-grid">
                        <img src="https://i.ibb.co/59d0hcj/images-9.png" alt="" />
                        <div className="grid-details">
                            <div className="grid-title mt-3">
                                <div className="grid-icon">
                                    <FontAwesomeIcon size="lg" icon={faBell} />
                                </div>
                                <h3>A Good Auto Responder</h3>
                            </div>
                            <div className="grid-info">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quo dolore hic voluptates, repudiandae ad.</p>
                                <div className="see-more">
                                    <a href="#">See more <FontAwesomeIcon icon={faArrowCircleRight} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="choose-grid">
                        <img src="https://i.ibb.co/fHGgPnZ/images-3.png" alt="" />
                        <div className="grid-details">
                            <div className="grid-title mt-3">
                                <div className="grid-icon">
                                    <FontAwesomeIcon size="lg" icon={faTruck} />
                                </div>
                                <h3>Home Delivery</h3>
                            </div>
                            <div className="grid-info">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quo dolore hic voluptates, repudiandae ad.</p>
                                <div className="see-more">
                                    <a href="#">See more <FontAwesomeIcon icon={faArrowCircleRight} /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    );
};

export default WhyChooseUs;