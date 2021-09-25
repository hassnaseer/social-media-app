import React from 'react';

// Slick Slider 
import Slider from "react-slick";

// Slick Slider Css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icons 
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';

// Css
import '../../../styles/common/style.css';


const StorySlider = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <div className="container mt-5">
            <Slider {...settings}>
                <div className="ss-mob-container">
                    <div className="ss-mob-inner bg-dark d-flex justify-content-center align-items-center">
                        <CameraAltRoundedIcon className="text-white" />
                    </div>
                    <p className="small mt-2 fw-bold text-center">Add Story</p>
                </div>
                <div className="ss-mob-container">
                    <div className="ss-mob-inner">
                        <img src="https://www.revesesearch.com/images/testi-4.jpg" alt="Slick Slider" />
                    </div>
                    <p className="small mt-2 fw-bold text-center">Javed</p>
                </div>
                <div className="ss-mob-container">
                    <div className="ss-mob-inner">
                        <img src="https://www.revesesearch.com/images/testi-4.jpg" alt="Slick Slider" />
                    </div>
                    <p className="small mt-2 fw-bold text-center">Javed</p>
                </div>
                <div className="ss-mob-container">
                    <div className="ss-mob-inner">
                        <img src="https://www.revesesearch.com/images/testi-4.jpg" alt="Slick Slider" />
                    </div>
                    <p className="small mt-2 fw-bold text-center">Javed</p>
                </div>
                <div className="ss-mob-container">
                    <div className="ss-mob-inner">
                        <img src="https://www.revesesearch.com/images/testi-4.jpg" alt="Slick Slider" />
                    </div>
                    <p className="small mt-2 fw-bold text-center">Javed</p>
                </div>
                <div className="ss-mob-container">
                    <div className="ss-mob-inner">
                        <img src="https://www.revesesearch.com/images/testi-4.jpg" alt="Slick Slider" />
                    </div>
                    <p className="small mt-2 fw-bold text-center">Javed</p>
                </div>
                <div className="ss-mob-container">
                    <div className="ss-mob-inner">
                        <img src="https://www.revesesearch.com/images/testi-4.jpg" alt="Slick Slider" />
                    </div>
                    <p className="small mt-2 fw-bold text-center">Javed</p>
                </div>

            </Slider>
        </div>
    )
}

export default StorySlider;
