import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import "./HeroImage.css";

const HeroImage = () => {
    return (
        <div className="hero-image position-relative overflow-hidden text-center bg-light">
            <div className="hero-image-info col-md-5 p-lg-5 mx-auto my-5 py-3">
            <h1 className="display-4 font-weight-normal">Headline</h1>
            <p className="lead font-weight-normal">Add Subheading here. Jumpstart your marketing efforts with this example.</p>
            <Button variant="info">
                Shop Now
            </Button>
            </div>
        </div>
    );
}

export default HeroImage;