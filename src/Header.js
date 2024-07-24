import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <img
          src="https://cdn.jsdelivr.net/emojione/assets/png/1f30e.png"
          width="64"
          height="32"
          alt=""
        />
        Find the emoji
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="62"
          height="32"
          alt=""
        />
      </header>
    );
  }
}