import React from "react";
import workFull from "../workFull.json";
import workBack from "../workBack.json";
import worksFront from "../workFront.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

function Work() {
  // console.log(work)------need tech and image;
  return (
    <div className="container pt-5" id="work">
      <div className="row justify-content-center">
        <h3 className="col-12">
          Please feel free to look at some of my work.
        </h3>
        <div className="row justify-content-center">
          {workFull.map((workFull) => (
            <Card className="col-12" style={{ width: "25rem" }}>
              <Card.Img variant="top" className="testimonialImages d-block p-5 w-75 img-fluid rounded" src={workFull.img} alt={workFull.alt} />
              <Card.Body>
                <Card.Title>{workFull.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Full Stack Application</Card.Subtitle>
                <Card.Text>{workFull.description}</Card.Text>
                <Card.Text>TECHNOLOGIES USED:  {workFull.technology}</Card.Text>
                <Button target="_blank" href={workFull.deployed}>See the App</Button>
        
                <Button target="_blank" href={workFull.repo}>See the Repo</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="row justify-content-center">
          {workBack.map((workBack) => (
            <Card className="col-12" style={{ width: "25rem" }}>
              <Card.Img variant="top" className="testimonialImages d-block p-5 w-75 img-fluid rounded" src={workBack.img} alt={workBack.alt} />
              <Card.Body>
                <Card.Title>{workBack.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Backend Application</Card.Subtitle>
                <Card.Text>{workBack.description}</Card.Text>
                <Card.Text>TECHNOLOGIES USED:  {workBack.technology}</Card.Text>
                <Button target="_blank" href={workBack.repo}>See the Repo</Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="row justify-content-center">
          {worksFront.map((workFront) => (
            <Card className="col-12" style={{ width: "25rem" }}>
              <Card.Img variant="top" className="testimonialImages d-block p-5 w-75 img-fluid rounded" src={workFront.img} alt={workFront.alt} />
              <Card.Body>
                <Card.Title>{workFront.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Frontend Application</Card.Subtitle>
                <Card.Text>{workFront.description}</Card.Text>
                <Card.Text>TECHNOLOGIES USED:  {workFront.technology}</Card.Text>
                <Button target="_blank" href={workFront.repo}>See the Repo</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
