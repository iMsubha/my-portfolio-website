import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import profileImage from "../../images/bg-remove.png";
import HeaderTop from "../HeaderTop/HeaderTop";
import ProgressBar from "../progressBar/progressBar";
const AboutMe = () => {
  const testData = [
    { bgcolor: "#73DFC9", completed: 95, title: "Web-Design" },
    { bgcolor: "#FDD778", completed: 86, title: "Javascript" },
    { bgcolor: "#FF4C60", completed: 83, title: "ReactJs" },
    { bgcolor: "#6C6CE5", completed: 90, title: "NodeJs" },
  ];
  return (
    <div>
      <HeaderTop />
      <Container>
        <Row className="mt-5">
          <Col
            xs={12}
            lg={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <Image
              className="mb-3"
              src={profileImage}
              width={150}
              roundedCircle
            />
            <Card className="p-4 rounded-lg w-75">
              A self-motivated and passionate web-developer seeking a position
              in a well-established organization where I would be able to
              utilize my knowledge as well as get the opportunity to learn and
              grow, while serving the community for the better.
              <a
                className="text-decoration-none mt-1"
                href="https://drive.google.com/uc?export=download&id=1ZA7yVnTlwwV4zV8mavRxSHmAz1kGDKky"
                download
              >
                <Button
                  className="font-weight-light text-uppercase btn-main"
                  style={{
                    backgroundColor: "var(--main-button)",
                    borderStyle: "hidden",
                  }}
                >
                  <small>Download CV</small>{" "}
                </Button>
              </a>
            </Card>
          </Col>
          <Col xs={12} lg={6}>
            {testData.map((item, idx) => (
              <ProgressBar
                key={idx}
                bgcolor={item.bgcolor}
                completed={item.completed}
                title={item.title}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
