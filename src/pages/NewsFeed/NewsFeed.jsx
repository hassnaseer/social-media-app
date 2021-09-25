import React, { useEffect, useState } from 'react';
import NewsFeedDesktop from './NewsFeedDesktop';
import NewsFeedMobile from './NewsFeedMobile';

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
            {deviceSize === "desktop" ? <NewsFeedDesktop /> : <NewsFeedMobile />}
        </div>
    )
}

export default NewsFeed;
