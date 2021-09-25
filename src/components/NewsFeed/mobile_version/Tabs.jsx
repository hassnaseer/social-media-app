import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Icons 
import DragIndicatorRoundedIcon from '@material-ui/icons/DragIndicatorRounded';
import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

// Css 
import '../../../styles/news_feed.css';

const Tabs = props => {

    const [activePage, setActivePage] = useState(1);

    const handleClick = n => {
        setActivePage(n);
        props.handleTab(n);
    }

    return (
        <div className="fixed-bottom bb-container">
            <div className="row h-100">
                <div className="col-2">
                    <NavLink to="/" exact className="bb-tab" activeClassName="bb-active-tab">
                        <DragIndicatorRoundedIcon className="bb-icons" />
                    </NavLink>
                </div>
                <div className="col-2">
                    <NavLink to="/" exact className="bb-tab" activeClassName="bb-active-tab">
                        <StoreMallDirectoryRoundedIcon className="bb-icons" />
                    </NavLink>
                </div>
                <div className="col-2">
                    <NavLink to="/friends" exact className="bb-tab" activeClassName="bb-active-tab">
                        <GroupRoundedIcon className="bb-icons" />
                    </NavLink>
                </div>
                <div className="col-2">
                    <NavLink to="/notifications" exact className="bb-tab" activeClassName="bb-active-tab">
                        <NotificationsRoundedIcon className="bb-icons" />
                    </NavLink>
                </div>
                <div className="col-2">
                    <NavLink to="/" exact className="bb-tab" activeClassName="bb-active-tab">
                        <PlayCircleFilledRoundedIcon className="bb-icons" />
                    </NavLink>
                </div>
                <div className="col-2">
                    <NavLink to="/" exact className="bb-tab" activeClassName="bb-active-tab">
                        <MenuRoundedIcon className="bb-icons" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Tabs;
