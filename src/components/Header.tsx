import "./../styles/App.css";

import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" id="HomePage">
          <img
            src="/imgs/logo.png"
            className="logo"
            alt="Dots and Spaces logo"
          />
        </Link>
      </div>
      <div className="top-menu">
        <ul>
          <li>
            <Link to="/tinyalchemy">Tiny Alchemy</Link>
          </li>
          <li>
            <Link to="/solid-balance">Solid Balance</Link>
          </li>
          <li>
            <Link to="/snap-assist">Snap Assist</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
