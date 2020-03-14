import React,{useEffect, useState} from "react";
import axios from 'axios';
import ProfileView from './profileView';
import PostView from './PostView';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('https://react-insta-backend.herokuapp.com/users/johnreese')
            .then(res => {
                console.log("Success");
                setUser(res.data);
            });
    }, []);

    return(
        <React.Fragment>
        {user ? <ProfileView name={user.name} username={user.username} imgSrc={user.imgSrc} posts={user.posts.length} followers={user.followers.length} following={user.following.length} /> : null}
        <PostView />
        </React.Fragment>
    );
}

export default Home;