import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TabOption.css";

export const TabOption = () => {
  return (
    <div className="tab_container">
      <h1>this is tab option</h1>
      <nav>
        <Link to="delivery">
          <Button>Delivery</Button>
        </Link>
        <Link to="dining_out">
          <Button>Dining Out</Button>
        </Link>
        <Link to="nightlife">
          <Button>Nightlife</Button>
        </Link>
      </nav>
    </div>
  );
};
