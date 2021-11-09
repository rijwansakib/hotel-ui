import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <img src="https://highseastudio.com/demo/bauhaus/wp-content/themes/bauhaus/images/placeholders/unithumb-testimonialhomebg.jpg" className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item">
                        <img src="https://cache.marriott.com/marriottassets/marriott/SCLSI/sclsi-exterior-0398-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" className="d-block w-100" alt="..." />

                    </div>
                    <div className="carousel-item active">
                        <img src="https://digital.ihg.com/is/image/ihg/intercontinental-tegucigalpa-5412339880-2x1?fit=fit,1&wid=2880&hei=1440&qlt=85,0&resMode=sharp2&op_usm=1.75,0.9,2,0" className="d-block w-100" alt="..." />

                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;