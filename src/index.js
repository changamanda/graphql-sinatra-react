import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";

window.onload = () => {
  ReactDOM.render(<List />, document.getElementById("container"));
};