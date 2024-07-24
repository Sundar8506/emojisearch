import React from "react";
import ReactDOM from "react-dom";
import App from "./Emoji";
import { Transition } from 'react-transition-group'

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});