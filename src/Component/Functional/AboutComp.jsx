import React from "react";
import { Jumbotron, Button, Row, Container, Col } from "react-bootstrap";
import { CardComp } from "./CardComp";

export const AboutComp = () => {
  return (
    <div className="mt-3">
      <Jumbotron>
        <h1>About Page</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <CardComp 
            id= "1"
            judul= "Belajar React"
            tanggal= "22 April 2020"
            />
          </Col>
          <Col>
            <CardComp 
            id= "2"
            judul= "Belajar Javascript"
            tanggal= "19 Mei 2019"
            />
          </Col>
          <Col>
            <CardComp 
            id= "3"
            judul= "Belajar Node Js"
            tanggal= "13 June 2020"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
