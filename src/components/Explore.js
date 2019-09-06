import React from 'react';
import ProfileView from './profileView';
import { useEndpoint } from './Home';


const Explore = () => {
    const userApi = {
        method: "GET",
        url: "http://localhost:3001/users"
    };
    const users = useEndpoint(userApi).data;
    console.log(users);
    let profiles;
    if(users){
        profiles = users.map(user => {
            return <ProfileView key={user.username} name={user.name} imgSrc={user.imgSrc} posts={user.posts.length} followers={user.followers.length} following={user.following.length} />
        })
    }
    return (
        <React.Fragment>
            {profiles ? profiles : null}
        </React.Fragment>
    );
}

export default Explore;
