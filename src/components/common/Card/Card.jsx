import { Component } from 'react';
import "./Card.css";

const Card = () => {
    return (
        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 mb-3 text-center overflow-hidden">
            <div className="my-3 p-3">
                <h2 className="display-5">Another headline</h2>
                <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark box-shadow mx-auto"></div>
        </div>
    );
}

export default Card;