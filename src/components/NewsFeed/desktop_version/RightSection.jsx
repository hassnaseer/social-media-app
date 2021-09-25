import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

// Chakra Ui 
import { Button } from "@chakra-ui/react";
import IconButton from '@material-ui/core/IconButton';

// Images 
import img from '../../../images/profile.jpg';

// Icons 
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';



const RightSection = () => {
    return (
        <div className="col-3">
            <div className="container">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="small fw-bold">REQUESTS</h2>
                        </div>
                        <div>
                            <span className="ls-not-badge">4</span>
                        </div>
                    </div>
                    <Scrollbars
                        style={{ height: 320 }}>

                        <div className="bg-white py-4 px-3 mt-3 shadow-sm" style={{ borderRadius: '10px' }}>
                            <div className="d-flex">
                                <img src={img} alt="Javed Akhtar" className="rs-fri" />
                                <div className="ms-3">
                                    <p className="small"><span className="fw-bold">Javed Akhtar</span> wants to add you to friends</p>
                                </div>
                            </div>
                            <div className="mt-3 d-flex">
                                <Button colorScheme="blue" className="me-2 w-100" size="sm">Accept</Button>
                                <Button colorScheme="teal" variant="outline" className="w-100" size="sm">Decline</Button>
                            </div>
                        </div>
                        <div className="bg-white py-4 px-3 mt-3 shadow-sm" style={{ borderRadius: '10px' }}>
                            <div className="d-flex">
                                <img src={img} alt="Javed Akhtar" className="rs-fri" />
                                <div className="ms-3">
                                    <p className="small"><span className="fw-bold">Javed Akhtar</span> wants to add you to friends</p>
                                </div>
                            </div>
                            <div className="mt-3 d-flex">
                                <Button colorScheme="blue" className="me-2 w-100" size="sm">Accept</Button>
                                <Button colorScheme="teal" variant="outline" className="w-100" size="sm">Decline</Button>
                            </div>
                        </div>
                    </Scrollbars>
                </div>
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="small fw-bold">CONTACTS</h2>
                        </div>
                        <div>
                            <span className="ls-not-badge">4</span>
                        </div>
                    </div>
                    <div className="bg-white py-4 px-3 mt-3 shadow-sm" style={{ borderRadius: '10px' }}>
                        <Scrollbars
                            style={{ height: 320 }}>

                            <ul>
                                <li className="rs-contacts-li">
                                    <div className="d-flex align-items-center">
                                        <img src={img} alt="Javed Akhtar" className="rs-fri" />
                                        <p className="fw-bold small ms-2">Javed Akhtar</p>
                                    </div>
                                    <div>
                                        <IconButton aria-label="more">
                                            <MoreHorizRoundedIcon />
                                        </IconButton>
                                    </div>
                                </li>
                                <li className="rs-contacts-li">
                                    <div className="d-flex align-items-center">
                                        <img src={img} alt="Javed Akhtar" className="rs-fri" />
                                        <p className="fw-bold small ms-2">Javed Akhtar</p>
                                    </div>
                                    <div>
                                        <IconButton aria-label="more">
                                            <MoreHorizRoundedIcon />
                                        </IconButton>
                                    </div>
                                </li>
                                <li className="rs-contacts-li">
                                    <div className="d-flex align-items-center">
                                        <img src={img} alt="Javed Akhtar" className="rs-fri" />
                                        <p className="fw-bold small ms-2">Javed Akhtar</p>
                                    </div>
                                    <div>
                                        <IconButton aria-label="more">
                                            <MoreHorizRoundedIcon />
                                        </IconButton>
                                    </div>
                                </li>
                                <li className="rs-contacts-li">
                                    <div className="d-flex align-items-center">
                                        <img src={img} alt="Javed Akhtar" className="rs-fri" />
                                        <p className="fw-bold small ms-2">Javed Akhtar</p>
                                    </div>
                                    <div>
                                        <IconButton aria-label="more">
                                            <MoreHorizRoundedIcon />
                                        </IconButton>
                                    </div>
                                </li>
                            </ul>
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSection;
