import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Typewriter from "typewriter-effect";
import codepen from "../../icons/codepen.svg";
import facebook from "../../icons/facebook.svg";
import github from "../../icons/github.svg";
import linkedIn from "../../icons/linkedin-in.svg";
import profileImage from "../../images/bg-remove.png";
import bgImage from "../../images/portfolio-bg.png";
const HeaderBottom = () => {
  const headerBottomStyles = {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "90vh",
  };

  return (
    <Container style={headerBottomStyles}>
      <div className="mb-5 d-flex justify-content-center align-items-center pt-5">
        <Card className="d-flex justify-content-center align-items-center flex-column pt-5 border-0">
          <div className="mb-3">
            <Image src={profileImage} width={90} roundedCircle />
          </div>
          <h2
            className="font-weight-normal"
            style={{
              color: "var(--main-color)",
              fontFamily: "var(--main-font)",
              letterSpacing: "2px",
            }}
          >
            Hello! I'm
          </h2>
          <h2
           style={{
              color: "#73DFC9",
              fontFamily: "var(--main-font)",
              letterSpacing: "2px",
              fontWeight:'bold'
            }}
          >          
          <Typewriter
              options={{
                strings: ["Subha Fairuz","A Front-End developer", "A Full-stack web developer"],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            />
            </h2>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <a href={"https://github.com/iMsubha"} target="__blank">
              <Image className="pr-3" src={github} height={30}></Image>
            </a>
            <a href={"https://www.linkedin.com/in/subhafairuz/"} target="__blank">
              <Image className="pr-3" src={linkedIn} height={30}></Image>
            </a>
            <a href={"https://codepen.io/subhafairuz"} target="__blank">
              <Image className="pr-3" src={codepen} height={30}></Image>
            </a>
            <a href={"https://www.facebook.com/subss.subha/"} target="__blank">
              <Image className="pr-2" src={facebook} height={30}></Image>
            </a>
          </div>

          <a
            className="text-decoration-none mt-3"
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
      </div>
    </Container>
  );
};

export default HeaderBottom;
