import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export const DetailComp = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>{props.location.state.judul}</h1>
        <p>
          {props.location.state.tanggal}
        </p>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
