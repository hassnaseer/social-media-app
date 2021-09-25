import React, { useState } from 'react';
import Tabs from '../../components/NewsFeed/mobile_version/Tabs';
import Header from '../../components/NewsFeed/mobile_version/Header';
import StorySlider from '../../components/NewsFeed/mobile_version/StorySlider';
import Posts from '../../components/NewsFeed/mobile_version/Posts';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Requests from '../../components/NewsFeed/mobile_version/Requests';

const NewsFeedMobile = () => {

    const [tab, setTab] = useState(1);

    return (
        <div>
            <Header />

            <div style={{ marginTop: '90px' }}>
                <Scrollbars
                    style={{ height: 570 }}>
                    {tab === 3 ? <Requests /> : null}
                    <StorySlider />
                    <Posts />
                    <Posts />
                    <Posts />
                    <Posts />
                </Scrollbars>
            </div>
            <Tabs handleTab={tab => setTab(tab)} />
        </div>
    )
}

export default NewsFeedMobile;
