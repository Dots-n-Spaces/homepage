import "./../styles/App.css";

import React from "react";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/" id="HomePage">
          <img
            src="/imgs/logo.png"
            className="logo"
            alt="Dots and Spaces logo"
          />
        </a>
      </div>
      <div className="top-menu">
        <ul>
          <li>
            <a href="/solid-balance">Solid Balance</a>
          </li>
          <li>
            <a href="/snap-assist">Snap Assist</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
