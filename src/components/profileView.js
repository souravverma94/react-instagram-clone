import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './profileView.css';

 const propTypes = {
     name: PropTypes.string,
     imgSrc: PropTypes.string,
     followers: PropTypes.number,
     following: PropTypes.number,
     posts: PropTypes.number,
 };


const ProfileView = (props) => {
    const [ state, setState ] = useState({ isFollowing: false })

    useEffect(() => {
        console.log(state.isFollowing)
    },[state.isFollowing])

    const handleClick = () => {
        setState({
            isFollowing: !state.isFollowing
        });
    }

        const {name, imgSrc, followers, following, posts} = props
        return (
            <div id="profileView">
                <Container>
                    <Row>
                        <Col xs="auto">
                            <Image src={imgSrc} roundedCircle style={{ height: '150px', width: '150px' }} />
                        </Col>
                        <Col>
                            <Container bsPrefix="nameField">
                                <Row className="bio">
                                    <Col>{name}</Col>
                                    <Col>
                                        <Button onClick={() => handleClick()} variant="primary" size="sm">{state.isFollowing ? "Following" : "Follow"}</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>{`${posts} Posts`}</Col>
                                    <Col>{`${followers} Followers`}</Col>
                                    <Col>{`${following} Following`}</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <hr/>
            </div>
        );
}

ProfileView.propTypes = propTypes;
export default ProfileView;
