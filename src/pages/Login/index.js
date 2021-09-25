import React, { useEffect, useState } from 'react';
import MobileLogin from './mobileview/index';
import DesktopLogin from './desktopview/index';

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
            {deviceSize === "desktop" ? <DesktopLogin />:<MobileLogin />}
        </div>
    )
}

export default NewsFeed;
