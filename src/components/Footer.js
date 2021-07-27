import React from "react";
import Nav from 'react-bootstrap/Nav'



function Footer() {
  return (

          <Nav fill justify className="justify-content-center footer" activeKey="/about">
          <h2 className="col-12 col-lg-6 text-center">I look forward to connecting with you.</h2>
              <Nav.Item>
                  <Nav.Link className="link col-12 col-lg-4 text-center" href="tel:+469-358-0710" target="_blank">469-358-0710</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link className="link" href="mailto:michelle.berta@att.net" target="_blank">michelle.berta@att.net</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link className="link col-12 col-lg-2 text-center" href="https://github.com/michelleberta" target="_blank">GitHub</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link className="link" href="https://www.linkedin.com/in/michelle-berta" target="_blank">LinkedIn</Nav.Link>
              </Nav.Item>
          </Nav>

  );
}


export default Footer;
