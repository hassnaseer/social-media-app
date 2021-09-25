import React, { useEffect, useState } from 'react';
import MobileLogin from './mobileview/index';
// import DesktopLogi from './desktopview';

const NewsFeed = () => {

    const [deviceSize, setDeviceSize] = useState();

    useEffect(() => {
        if (window.innerWidth > 767) {
            setDeviceSize("desktop")
        }
        else {
            setDeviceSize("mobile");
        }
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
            setDeviceSize("desktop")
        }
        else {
            setDeviceSize("mobile");
        }
    })

    return (
        <div>
            {deviceSize === "desktop" ? <h1>here is desktop vie</h1>:<MobileLogin />}
        </div>
    )
}

export default NewsFeed;
