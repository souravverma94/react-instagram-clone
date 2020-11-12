import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./profileView.css";
import axios from "axios";

const propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  imgSrc: PropTypes.string,
  followers: PropTypes.number,
  following: PropTypes.number,
  posts: PropTypes.number,
  isFollowing: PropTypes.bool,
  incrementCount: PropTypes.func,
};

const ProfileView = (props) => {
  const {
    name,
    username,
    imgSrc,
    followers,
    following,
    posts,
    isFollowing,
  } = props;
  const [state, setState] = useState({ isFollowing: isFollowing });

  useEffect(() => {
    console.log(state.isFollowing);
  }, [state.isFollowing]);

  const handleClick = () => {
    if (state.isFollowing) {
      axios
        .put(
          `https://react-insta-backend.herokuapp.com/users/johnreese/removefollowing`,
          { username: username }
        )
        .then((res) => {
          // console.log(res);
          // console.log(res.data);
          props.incrementCount();
        });
      axios
        .put(
          `https://react-insta-backend.herokuapp.com/users/${username}/removefollower`,
          { username: "johnreese" }
        )
        .then((res) => {
          // console.log(res);
          // console.log(res.data);
          props.incrementCount();
        });
    } else {
      axios
        .put(
          `https://react-insta-backend.herokuapp.com/users/johnreese/addfollowing`,
          { username: username }
        )
        .then((res) => {
          // console.log(res);
          // console.log(res.data);
          props.incrementCount();
        });
      axios
        .put(
          `https://react-insta-backend.herokuapp.com/users/${username}/addfollower`,
          { username: "johnreese" }
        )
        .then((res) => {
          // console.log(res);
          // console.log(res.data);
          props.incrementCount();
        });
    }
    setState({
      isFollowing: !state.isFollowing,
    });
  };

  return (
    <div id="profileView">
      <Container>
        <Row>
          <Col xs="auto">
            <Image className="profile-image" src={imgSrc} roundedCircle />
          </Col>
          <Col>
            <Container bsPrefix="nameField">
              <Row className="bio">
                <Col>{name}</Col>
                <Col>
                  {username !== "johnreese" ? (
                    <Button
                      onClick={() => handleClick()}
                      variant="primary"
                      size="sm"
                    >
                      {state.isFollowing ? "Following" : "Follow"}
                    </Button>
                  ) : null}
                </Col>
              </Row>
              <ul className="stat-list">
                <li>{`${posts} Posts`}</li>
                <li>{`${followers} Followers`}</li>
                <li>{`${following} Following`}</li>
              </ul>
            </Container>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

ProfileView.propTypes = propTypes;
export default ProfileView;
