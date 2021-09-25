import React from 'react';
import { Link } from "react-router-dom";

// Images 
import img from '../../../images/profile.jpg';
// import img2 from '../../../images/demo1.jpg';

// Chakra Ui 
import { Button } from "@chakra-ui/react"

// Icons 
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import PhotoRoundedIcon from '@material-ui/icons/PhotoRounded';
import RadioRoundedIcon from '@material-ui/icons/RadioRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const LeftSection = () => {
    return (
        <div className="col-3">
            <div className="container">
                <div className="bg-white py-4 px-3 shadow-sm" style={{ borderRadius: '10px' }}>
                    <div className="d-flex">
                        <div>
                            <img src={img} alt="Javed Akhtar" className="ls-pi" />
                        </div>
                        <div className="ms-3">
                            <p className="small fw-bold">Javed Akhtar</p>
                            <p className="small text-muted">@javedakhtar1220</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-4 px-3 shadow-sm mt-4" style={{ borderRadius: '10px' }}>
                    <ul className="list-unstyled">
                        <li className="ls-menu">
                            <Link to="/" className="d-flex justify-content-between align-items-center">
                                <div>
                                    <HomeRoundedIcon className="ls-menu-icons" />
                                    <span className="small fw-bold ms-2">Home</span>
                                </div>
                                <div>
                                    <span className="ls-not-badge">0</span>
                                </div>
                            </Link>
                        </li>
                        <li className="ls-menu">
                            <Link to="/" className="d-flex justify-content-between align-items-center">
                                <div>
                                    <PermContactCalendarRoundedIcon className="ls-menu-icons" />
                                    <span className="small fw-bold ms-2">Amis</span>
                                </div>
                                <div>
                                    <span className="ls-not-badge">0</span>
                                </div>
                            </Link>
                        </li>
                        <li className="ls-menu">
                            <Link to="/" className="d-flex justify-content-between align-items-center">
                                <div>
                                    <PhotoRoundedIcon className="ls-menu-icons" />
                                    <span className="small fw-bold ms-2">Hangars</span>
                                </div>
                                <div>
                                    <span className="ls-not-badge">0</span>
                                </div>
                            </Link>
                        </li>
                        <li className="ls-menu">
                            <Link to="/" className="d-flex justify-content-between align-items-center">
                                <div>
                                    <RadioRoundedIcon className="ls-menu-icons" />
                                    <span className="small fw-bold ms-2">Villages</span>
                                </div>
                                <div>
                                    <span className="ls-not-badge">0</span>
                                </div>
                            </Link>
                        </li>
                        <li className="ls-menu">
                            <Link to="/" className="d-flex justify-content-between align-items-center">
                                <div>
                                    <PersonRoundedIcon className="ls-menu-icons" />
                                    <span className="small fw-bold ms-2">Movies</span>
                                </div>
                                <div>
                                    <span className="ls-not-badge">0</span>
                                </div>
                            </Link>
                        </li>
                        <li className="ls-menu">
                            <Link to="/" className="d-flex justify-content-between align-items-center">
                                <div>
                                    <PersonRoundedIcon className="ls-menu-icons" />
                                    <span className="small fw-bold ms-2">Business Ads</span>
                                </div>
                                <div>
                                    <span className="ls-not-badge">0</span>
                                </div>
                            </Link>
                        </li>
                        <li className="ls-menu">
                            <Link to="/" className="d-flex justify-content-between align-items-center">
                                <div>
                                    <SettingsIcon className="ls-menu-icons" />
                                    <span className="small fw-bold ms-2">Settings</span>
                                </div>
                                <div>
                                    <span className="ls-not-badge">0</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                        <h2 className="small fw-bold">INVITATIONS</h2>
                    </div>
                    <div>
                        <span className="ls-not-badge">4</span>
                    </div>
                </div>
                <div className="bg-white py-4 px-3 shadow-sm mt-3 mb-5" style={{ borderRadius: '10px' }}>
                    <div className="mt-4 position-relative">
                        <img src={img2} alt="Javed Akhtar" className="ls-invitation-img" />
                        <p className="ls-img-text">How To Build A <br />Strong Company</p>
                    </div>
                    <div className="mt-4 d-flex">
                        <Button colorScheme="blue" className="me-2">Accept Invitations</Button>
                        <Button colorScheme="teal" variant="outline"><CloseRoundedIcon /></Button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default LeftSection;
