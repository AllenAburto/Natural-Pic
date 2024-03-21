import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { PhotoContext } from "../context/PhotoContext.jsx";

const CustomNavbar = () => {
  const { favPhotos } = useContext(PhotoContext);

  return (
    <Navbar bg="green" variant="dark" expand="lg" className="mb-3">
      <Navbar.Brand as={Link} to="/" className="ms-3">
        <i className="bi bi-image-fill me-2"></i> NaturalPics
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <React.Fragment>
            <Nav.Link as={Link} to="/" className="mx-3">
              <i className="bi bi-house-fill me-1"></i> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/favoritos" className="mx-3">
              <i className="bi bi-heart-fill me-1"></i> Favoritos ({favPhotos.length})
            </Nav.Link>
          </React.Fragment>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;