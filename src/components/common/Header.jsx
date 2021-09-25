import React from 'react';
// import { Link } from 'react-router-dom';

// Chakra UI 
import { Input, InputGroup, InputLeftElement, Button, Avatar } from "@chakra-ui/react";

// Icons
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

// Images 
import logo from '../../images/logo.png';
import img from '../../images/profile.jpg';

// Css
import '../../styles/common/style.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top border-bottom">
            <div className="container">
                {/* <Avatar size="lg" name="Christian Nwamba" src="https://bit.ly/code-beast" /> */}
                <a class="navbar-brand" href="#">
                    <img src={logo} width="50" height="50" alt="IS Wakandha Spacepark" />
                </a>
                <span className="navbar-brand">Wakandha</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className="w-25">
                        <InputGroup bgColor="#f2f2f2">
                            <InputLeftElement
                                pointerEvents="none"
                                children={<SearchRoundedIcon />}
                            />
                            <Input type="text" placeholder="Search" />
                        </InputGroup>
                    </div>
                    <Button leftIcon={<AddBoxOutlinedIcon />} marginLeft="10px" color="white" colorScheme="red" backgroundColor="#998e5e" variant="solid">
                        Create
                    </Button>
                    <img src={img} alt="Javed Akhtar" className="header-pi" />
                </div>
            </div>
        </nav>
    )
}

export default Header;
