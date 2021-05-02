import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  // const navlinkStyle={
    
  // }
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-class">
            <Nav.Link  className="nav-link-active">
              <Link to="/" className="text-decoration-none text-muted" >Home</Link>
            </Nav.Link>
            <Nav.Link className="nav-link-active">
              <Link to="/projects" className="text-decoration-none text-muted">Projects</Link>
            </Nav.Link>
            <Nav.Link  className="nav-link-active">
            <Link to="/testimonial" className="text-decoration-none text-muted">Testimonial</Link>
            </Nav.Link>
            <Nav.Link className="nav-link-active">
            <Link to="/blogs" className="text-decoration-none text-muted">Blogs</Link>
            </Nav.Link>
            <Nav.Link className="nav-link-active">
            <Link to="/aboutMe" className="text-decoration-none text-muted">About Me</Link>
            </Nav.Link>
            <Nav.Link className="nav-link-active">
            <Link to="/contact" className="text-decoration-none text-muted">Contact Me</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
  );
};

export default HeaderTop;
