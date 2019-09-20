import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileView from './profileView';

const Explore = () => {
    const [users, setUsers] = useState([]);
    const [owner, setOwner] = useState(null);
    const [count, setCount] =useState(0);

    useEffect(() => {
        console.log('effect called');
        axios.get('http://localhost:3001/users')
            .then(res => {
                console.log("Success");
                console.log(res.data);
                setUsers(res.data);
            });
        axios.get('http://localhost:3001/users/johnreese')
            .then(res => {
                console.log("fetched owner data: ");
                console.log(res.data);
                setOwner(res.data);
            })
    }, [count]);

    const incrementCount = () => {
        setCount(count + 1);
    }

    let profiles;
    if (users && owner) {
        profiles = users.map(user => {
            return <ProfileView key={user.username} name={user.name} username={user.username} imgSrc={user.imgSrc} posts={user.posts.length} followers={user.followers.length} following={user.following.length} isFollowing={owner.following.includes(user.username)} incrementCount={incrementCount} />
        })
}
return (
    <React.Fragment>
        {profiles ? profiles : null}
    </React.Fragment>
);
}

export default Explore;
