import React from 'react';

// Chakra UI
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from "@chakra-ui/react";

// Images 
import logo from '../../../images/logo.png';

// Icons 
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

const Header = () => {

    return (
        <nav className="fixed-top bg-white py-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Avatar size="lg" name="Christian Nwamba" src="https://bit.ly/code-beast" />
                    </div>
                    <div>
                        <h1 className="navbar-brand">Wakandha</h1>
                    </div>
                    <div className="d-flex">
                        <IconButton aria-label="more">
                            <SearchRoundedIcon fontSize="large" />
                        </IconButton>
                        <div className="ms-2">
                            <img src={logo} width="50" height="50" alt="IS Wakandha Spacepark" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Header
