import React from "react";
import {Jumbotron, Button} from "react-bootstrap";

export const HomePage = () => {
  return (
    <div className="mt-3">
      <Jumbotron>
        <h1>Home Page</h1>
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
