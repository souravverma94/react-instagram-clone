import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Container>
      <div id="nav_row" className="nav_row">
        <Row>
          <Col xs>
            <a href="/" target="_self">
              <Image
                src="insta.svg"
                fluid
                style={{ height: "35px", width: "35px" }}
              />
              <Image
                src="insta_text.svg"
                fluid
                style={{ height: "35px", width: "100px" }}
              />
            </a>
          </Col>
          <Col xs>
            <Form>
              <Form.Row>
                <Form.Control placeholder="Search" />
              </Form.Row>
            </Form>
          </Col>
          <Col xs>
            <div id="thirdSection" className="thirdSection">
              <a href="/explore" target="_self">
                <Image
                  src="compass.svg"
                  fluid
                  style={{ height: "24px", width: "24px" }}
                />
              </a>
              <Image
                src="love.svg"
                fluid
                style={{ height: "24px", width: "24px" }}
              />
              <a href="/" target="_self">
                <Image
                  src="user.svg"
                  fluid
                  style={{ height: "24px", width: "24px" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default NavBar;
