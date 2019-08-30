import React from 'react';
import ProfileView from './profileView';
import PostView from './PostView';


const Home = () => {
    return(
        <React.Fragment>
        <ProfileView name="John Reese" imgSrc="Reese.jpg" posts={15} followers={10000} following={20} />
        <PostView />
        </React.Fragment>
    );
}

export default Home;