import React,{useEffect, useState} from "react";
import axios from 'axios';
import { Instagram } from 'react-content-loader'
import ProfileView from './profileView';
import PostView from './PostView';

const MyInstagramLoader = () => <Instagram />

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
     user ? <React.Fragment> <ProfileView name={user.name} username={user.username} imgSrc={user.imgSrc} posts={user.posts.length} followers={user.followers.length} following={user.following.length} /> <PostView /> </React.Fragment> : < MyInstagramLoader/>
    );
}

export default Home;