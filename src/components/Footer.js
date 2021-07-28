import React from "react";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <Nav className="row footer" bg="dark"  href="#about">
      <h2 className="text-center">I look forward to connecting with you.</h2>

      <div className="row">
        <Nav.Link className="col-sm-12 col-md-6 col-lg-3 text-center" href="tel:+469-358-0710" target="_blank">
          469-358-0710
        </Nav.Link>
        <Nav.Link className="col-sm-12 col-md-6 col-lg-3 text-center" href="mailto: michelle.berta@att.net" target="_blank">
          michelle.berta@att.net
        </Nav.Link>
        <Nav.Link className="col-sm-12 col-md-6 col-lg-3 text-center" href="https://github.com/michelleberta" target="_blank">
          GitHub
        </Nav.Link>
        <Nav.Link className="col-sm-12 col-md-6 col-lg-3 text-center" href="https://www.linkedin.com/in/michelle-berta" target="_blank">
          LinkedIn
        </Nav.Link>
      </div>
    </Nav>
  );
}

export default Footer;
