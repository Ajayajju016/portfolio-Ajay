import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home"><img className='logo' src='https://res.cloudinary.com/dufukqgv0/image/upload/v1719465767/profile-pic_13_pqncem.png'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#certifications">Certificates</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="https://drive.google.com/file/d/1zf4uMrbvDepf1-z_FXVawb9B0XkBYiic/view?usp=drivesdk">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  );
};

export default NavbarComponent;
