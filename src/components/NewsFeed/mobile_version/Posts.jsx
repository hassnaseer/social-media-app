import React from 'react';

// Chakra UI 
import { Avatar } from "@chakra-ui/react"

// Icons 
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Posts = () => {
    return (
        <div className="container mb-5">
            <div className="mp-container py-2">
                <div className="container">
                    <div className="d-flex align-items-center my-2">
                        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                        <div className="ms-3">
                            <p className="small fw-bold">Javed Akhtar</p>
                            <p className="small text-muted">20 h ago</p>
                        </div>
                    </div>
                </div>
                <div className="mp-img-container">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Javed Akhtar" />
                </div>
                <div className="container">
                    <div className="d-flex justify-content-between mt-2">
                        <div className="d-flex">
                            <FavoriteBorderIcon className="text-primary" fontSize="small" />
                            <p className="small ms-1">8</p>
                        </div>
                        <div className="d-flex">
                            <div className="d-flex">
                                <ChatBubbleOutlineRoundedIcon className="text-primary" fontSize="small" />
                                <p className="small ms-1">3</p>
                            </div>
                            <div className="d-flex ms-2">
                                <ShareRoundedIcon className="text-primary" fontSize="small" />
                                <p className="small ms-1">7</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="row">
                            <div className="col-4">
                                <button className="btn-social">
                                    <FavoriteBorderIcon />
                                    <p className="small ms-2">Like</p>
                                </button>
                            </div>
                            <div className="col-4">
                                <button className="btn-social">
                                    <ChatBubbleOutlineRoundedIcon />
                                    <p className="small ms-2">Comment</p>
                                </button>
                            </div>
                            <div className="col-4">
                                <button className="btn-social">
                                    <ShareRoundedIcon />
                                    <p className="small ms-2">Share</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mp-container">
                <div className="mp-img-container">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Javed Akhtar" />
                </div>
                <div className="container mt-3">
                    <p className="small fw-bold mb-0">On Another Road</p>
                    <div className="d-flex align-items-center my-2">
                        <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                        <p className="small ms-3">Javed Akhtar</p>
                    </div>
                </div>
            </div> */}

        </div>

    )
}

export default Posts;
