import React from 'react';
import ProfileView from './profileView';


const Explore = () => {
    return (
        <React.Fragment>
            <ProfileView name="Elizabeth Olsen" imgSrc="Elizabeth_Olsen.jpg" posts={10} followers={100} following={200} />
            <ProfileView name="Dwayne johnson" imgSrc="rock.jpg" posts={10} followers={100} following={200} />
            <ProfileView name="Spider Man" imgSrc="spidy.jpg" posts={10} followers={100} following={200} />
            <ProfileView name="Thor" imgSrc="thor.jpg" posts={10} followers={100} following={200} />
            <ProfileView name="Captain America" imgSrc="cap.jpg" posts={10} followers={100} following={200} />
            <ProfileView name="Iron Man" imgSrc="ironman.jpg" posts={10} followers={100} following={200} />
        </React.Fragment>
    );
}

export default Explore;
