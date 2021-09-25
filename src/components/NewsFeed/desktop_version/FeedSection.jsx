import React from 'react';
import StorySlider from './StorySlider';
import Posts from './Posts';


// Images 
import img from '../../../images/profile.jpg';

// Chakra UI 
import { Button } from "@chakra-ui/react";

function FeedSection() {
    const data = ["https://www.rwongphoto.com/images/xl/RW8461.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"];
    return (
        <div className="col-6">
            <div className="container">
                <StorySlider />
                <div className="mt-5 bg-white p-3 shadow-sm d-flex justify-content-between" style={{ borderRadius: '10px' }}>
                    <div className="d-flex">
                        <img src={img} alt="Javed Akhtar" className="fs-pi" />
                        <input type="text" className="fs-input" placeholder="What's new, Javed?" />
                    </div>
                    <div>
                        <Button colorScheme="blue">Post It!</Button>
                    </div>
                </div>
                <Posts />
                <Posts />
                <Posts />
            </div>
        </div>
    )
}

export default FeedSection;
