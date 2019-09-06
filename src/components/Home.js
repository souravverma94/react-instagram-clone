import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProfileView from './profileView';
import PostView from './PostView';


export function useEndpoint(req) {
  const [res, setRes] = useState({
    data: null,
    complete: false,
    pending: false,
    error: false
  });
  useEffect(
    () => {
      setRes({
        data: null,
        pending: true,
        error: false,
        complete: false
      });
      axios(req)
        .then(res =>
          setRes({
            data: res.data,
            pending: false,
            error: false,
            complete: true
          })
        )
        .catch((e) =>
          setRes({
            data: null,
            pending: false,
            error: e,
            complete: true
          })
        );
    },
    [req.url]
  );
  return res;
}

const Home = () => {
    const userApi = {
        method: "GET",
        url: "http://localhost:3001/users/johnreese",
    }
    const user = useEndpoint(userApi).data;
    return(
        <React.Fragment>
        {user ? <ProfileView name={user.name} imgSrc={user.imgSrc} posts={user.posts.length} followers={user.followers.length} following={user.following.length} /> : null}
        <PostView />
        </React.Fragment>
    );
}

export default Home;