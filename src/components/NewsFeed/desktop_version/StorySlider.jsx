import React from 'react';

// Chakra UI
import IconButton from '@material-ui/core/IconButton';

// Slick Slider 
import Slider from "react-slick";

// Slick Slider Css 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images 
import img from '../../../images/demo1.jpg';
import img2 from '../../../images/profile.jpg';

// Icons 
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

// Css 
import '../../../styles/common/style.css';


function StorySlider() {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Slider {...settings}>
                <div className="ss-container">
                    <div className="ss-inner">
                        <img src={img} alt="Slick Slider" />
                        <div className="add-story">
                            <IconButton aria-label="Add" size="large">
                                <AddBoxRoundedIcon className="text-white" fontSize="large" />
                            </IconButton>
                            <p className="small text-white fw-bold">Add Story</p>
                        </div>
                    </div>
                </div>
                <div className="ss-container">
                    <div className="ss-inner">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="Slick Slider" />
                        <img src={img2} alt="Javed Akhtar" className="ss-pi" />
                        <p className="small ss-pn">Javed Akhtar</p>
                    </div>
                </div>
                <div className="ss-container">
                    <div className="ss-inner">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="Slick Slider" />
                        <img src={img2} alt="Javed Akhtar" className="ss-pi" />
                        <p className="small ss-pn">Javed Akhtar</p>
                    </div>
                </div>
                <div className="ss-container">
                    <div className="ss-inner">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="Slick Slider" />
                        <img src={img2} alt="Javed Akhtar" className="ss-pi" />
                        <p className="small ss-pn">Javed Akhtar</p>
                    </div>
                </div>
                <div className="ss-container">
                    <div className="ss-inner">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="Slick Slider" />
                        <img src={img2} alt="Javed Akhtar" className="ss-pi" />
                        <p className="small ss-pn">Javed Akhtar</p>
                    </div>
                </div>
                <div className="ss-container">
                    <div className="ss-inner">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="Slick Slider" />
                        <img src={img2} alt="Javed Akhtar" className="ss-pi" />
                        <p className="small ss-pn">Javed Akhtar</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default StorySlider;
