import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/MBLogo.png";


function Header() {
  return (
    <Navbar className="p-2" bg="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#about">
      <img
        src={Logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="MB"
      />
    </Navbar.Brand>
   
      <Navbar.Brand href="#about">Michelle Berta</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#work">Work</Nav.Link>
          <Nav.Link href="https://drive.google.com/file/d/1lmAvYU5qVOZQEZNKDqW0E1So_mIqU4xX/view?usp=sharing" target="_blank">Resume</Nav.Link>


         <NavDropdown title="Contact" id="basic-nav-dropdown">
            <NavDropdown.Item href="tel:+4693580710" target="_blank">
              469-358-0710
            </NavDropdown.Item>
            <NavDropdown.Item href="mailto:michelle.berta@att.net" target="_blank">
              michelle.berta@att.net
            </NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/MichelleBerta" target="_blank">
              GitHub
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/michelle-berta" target="_blank">
              LinkedIn
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
  );
}

export default Header;
