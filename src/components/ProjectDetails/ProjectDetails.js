import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import github from "../../icons/github.svg";
import liveLink from "../../icons/live.svg";
import "./ProjectDetails.css";
const ProjectDetails = (props) => {
  const { img, title, live, code } = props.data;
  console.log(live);
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="mb-5 project-details border-0 p-2 shadow-lg p-3">
        <Card.Img variant="top" src={img} height={200}/>
        {/* <Image src={img} height={230}></Image> */}
        <Card.Body>
          <Card.Title
            className="font-weight-bolder"
            style={{ color: "#FF4C60" }}
          >
            {title}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex pr-3 justify-content-between align-items-center">
         <div className="d-flex">
         <h6 style={{ color: "#73DFC9" }} className="mr-2">Preview</h6>
          <a href={live} target="__blank" className="d-flex">
            <Image src={liveLink} height={25}></Image>
          </a>
         </div>
        <div className="d-flex">
        <h6 style={{ color: "#FDD778" }} className="mr-2">Code</h6>
          <a href={code} target="__blank" className="d-flex">
            <Image src={github} height={25}></Image>
          </a>
        </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectDetails;
