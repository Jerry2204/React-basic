import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardComp = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://placeimg.com/400/400/any" />
        <Card.Body>
          <Card.Title>{props.judul}</Card.Title>
          <Card.Subtitle className="mb-3">{props.tanggal}</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link
              to={{
                pathname: `/detail/${props.id}`,
                state: {
                  judul: props.judul,
                  tanggal: props.tanggal,
                },
              }}
            >
              Detail
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
