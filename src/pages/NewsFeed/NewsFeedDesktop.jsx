import React from 'react';
import Header from '../../components/common/Header';
import LeftSection from '../../components/NewsFeed/desktop_version/LeftSection';
import FeedSection from '../../components/NewsFeed/desktop_version/FeedSection';
import RightSection from '../../components/NewsFeed/desktop_version/RightSection'

// Css 
import '../../styles/news_feed.css';

const NewsFeedDesktop = () => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: '120px' }}>
                <div className="mx-4">
                    <div className="row">
                        <LeftSection />
                        <FeedSection />
                        <RightSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeedDesktop;
