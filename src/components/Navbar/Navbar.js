import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navitems-wrapper">
    <div className="list-item-wrapper">
      <ul>
        <li className="brand animated lightSpeedIn main-title">
          <a href="/pelmanism-game/">{props.title}</a>
        </li>
        <li id="rw">{props.correctIncorrect}</li>

        <li className="main-title">
          Score - Best: {props.bestScore} | Current: {props.score}
        </li>
      </ul>
    </div>
    <div className="lecture-wrap">
      <p className="lecture">{props.lecture}</p>
    </div>
  </nav>
);

export default Navbar;
