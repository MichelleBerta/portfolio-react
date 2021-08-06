import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../assets/MBLogo.png";

function Header() {
  return (
    // <div>
    //   <nav className="navbar navbar-dark bg-dark" fixed="top">
    //     <Navbar.Brand href="#about">
    //       <img src={Logo} width="60" height="60" className="d-inline-block align-top" alt="MB" />
    //     </Navbar.Brand>
    //     <a href="#about" className="navbar-brand">
    //       Michelle Berta
    //     </a>
    //     <a href="#skills" className="navbar-brand">
    //       Skills
    //     </a>
    //     <a href="#work" className="navbar-brand">
    //       Work
    //     </a>
    //     <a href="https://drive.google.com/file/d/1lmAvYU5qVOZQEZNKDqW0E1So_mIqU4xX/view?usp=sharing" target="_blank" className="navbar-brand">
    //       Resume
    //     </a>

    //     <NavDropdown title="Contact" id="basic-nav-dropdown">
    //       <NavDropdown.Item href="tel:+4693580710" target="_blank">
    //         469-358-0710
    //       </NavDropdown.Item>
    //       <NavDropdown.Item href="mailto:michelle.berta@att.net" target="_blank">
    //         michelle.berta@att.net
    //       </NavDropdown.Item>
    //       <NavDropdown.Item href="https://github.com/MichelleBerta" target="_blank">
    //         GitHub
    //       </NavDropdown.Item>
    //       <NavDropdown.Item href="https://www.linkedin.com/in/michelle-berta" target="_blank">
    //         LinkedIn
    //       </NavDropdown.Item>
    //     </NavDropdown>

    //     <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar4">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="navbar-collapse collapse" id="collapsingNavbar4">
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>

      <Navbar className="p-2" bg="dark" expand="lg" fixed="top">
        <Navbar.Brand href="#about">
        <img
          src={Logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="MB"
        />
      </Navbar.Brand>

        <Navbar.Brand href="#about">Michelle Berta</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1DA4V3bjUV12uftMTddc4wujJQetGzVsZ/view?usp=sharing" target="_blank">Resume</Nav.Link>

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
