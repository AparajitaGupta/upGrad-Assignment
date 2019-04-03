import React from "react";
import "./Heading.css";

const Heading = function(props) {
  return <div className="header">{props.heading}</div>;
};

export default Heading;
