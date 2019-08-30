import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const PostView = () => {
    return (
        <React.Fragment className="postView">
            <Container>
                <Row>
                    <Col>
                        <Image src="https://picsum.photos/210"/>
                    </Col>
                    <Col>
                        <Image src="https://picsum.photos/210"/>
                    </Col>
                    <Col>
                        <Image src="https://picsum.photos/210"/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default PostView;