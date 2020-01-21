import React from "react";
import { render } from "react-dom";
import ComponentToExport from "componentSourceFiles/ComponentToExport";

render(
  <div>
    <h2>React Boilerplate Component Demo</h2>
    <ComponentToExport
      message="I'm a new fancy message passed in"
      handleButtonClick={() => alert("Button clicked")}
    />
  </div>,
  document.getElementById("app")
);
