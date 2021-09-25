import React from 'react';
import Photogrid from "react-facebook-photo-grid";

// Material UI 
import IconButton from '@material-ui/core/IconButton';

// Icons 
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// Images 
import img from '../../../images/profile.jpg';

const Posts = () => {

    const data = ["https://www.rwongphoto.com/images/xl/RW8461.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"];

    return (
        <div className="mt-5 bg-white p-3 shadow-sm" style={{ borderRadius: '10px' }}>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <img src={img} alt="Javed Akhtar" className="fs-pi" />
                    <div className="ms-3">
                        <p className="small fw-bold">Javed Akhtar</p>
                        <p className="small text-muted">1 hour ago</p>
                    </div>
                </div>
                <div>
                    <IconButton aria-label="more">
                        <MoreHorizRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mt-3">
                <p style={{ fontSize: '12px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse possimus magnam. Soluta ea atque voluptates impedit magnam optio ipsam dolor ullam. Esse labore magnam ut asperiores, dolorum architecto temporibus!</p>
            </div>
            <div className="mt-3">
                <Photogrid
                    images={data}
                    width="100%"
                ></Photogrid>
            </div>
            <div className="mt-3">
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
    )
}

export default Posts;
