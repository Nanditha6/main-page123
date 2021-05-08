import { Component } from "react";
import Navbar from "../../common/Navbar/Navbar";
import Slider from "../../common/Slider/Slider";
import HeroImage from "../../common/HeroImage/HeroImage";
import Card from "../../common/Card/Card";
import Footer from "../../common/Footer/Footer";

const Home = () => {
    return (
        <>
            <HeroImage />

            <div className="d-md-flex flex-md-equal m-5">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <Slider />

            <div className="d-md-flex flex-md-equal m-5">
                <Card />
                <Card />
            </div>

            <div className="m-5">
                <div className="row">
                    <div className="col-md-5 order-md-1">
                        <img
                            className="img-fluid mx-auto"
                            src="https://www.whiskaffair.com/wp-content/uploads/2018/12/Pineapple-Juice-1-3.jpg"
                            style={{ width: "500px", height: "500px" }}
                        />
                    </div>
                    <div className="col-md-7 order-md-2 text-center d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <h1>
                                It's that good.
                                <span className="text-muted">
                                    {" "}
                                    See for yourself.
                                </span>
                            </h1>
                            <p className="lead">
                                Donec ullamcorper nulla non metus auctor
                                fringilla. Vestibulum id ligula porta felis
                                euismod semper. Praesent commodo cursus magna,
                                vel scelerisque nisl consectetur. Fusce dapibus,
                                tellus ac cursus commodo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
