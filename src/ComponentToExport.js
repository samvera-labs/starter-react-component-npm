import React, { useState } from "react";
import PropTypes from "prop-types";
import ChildComponent from "./ChildComponent";
import "./ComponentToExport.scss";

const ComponentToExport = ({
  message = "I'm a default message from props",
  handleButtonClick
}) => {
  const [foo, setFoo] = useState();

  return (
    <div className="component-box">
      <h3>Imported component</h3>
      <h4>Message</h4>
      <p>{message}</p>
      <button onClick={handleButtonClick}>Click me</button>
      <ChildComponent />
    </div>
  );
};

ComponentToExport.propTypes = {
  message: PropTypes.string,
  handleButtonClick: PropTypes.func
};

export default ComponentToExport;
