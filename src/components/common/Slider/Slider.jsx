import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Slider.css";
import { SLIDER_ITEMS } from "../../Constants";

const Slider = () => {
    return (
        <Carousel fade controls={false} interval={3000} pause={false}>
            {SLIDER_ITEMS.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={item.image}
                        alt={item.imageAlt}
                    />
                    <Carousel.Caption>
                        <h3>{item.heading}</h3>
                        <p>{item.subheading}</p>
                        <Button variant="outline-light">
                            {item.buttonText}
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;
