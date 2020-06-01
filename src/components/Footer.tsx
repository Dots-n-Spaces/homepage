import "./../styles/App.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Footer = (props: any) => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a
            href="https://github.com/Dots-n-Spaces/Policies/blob/master/PrivacyPolicy.md"
            target="_blank"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="mailto:dots.n.spaces@gmail.com" target="_blank">
            Write us
          </a>
        </li>
        <li>
          <a href="https://twitter.com/dots_and_spaces" target="_blank">
            Tweet us
          </a>
        </li>
        <li>
          <a href="http://eepurl.com/gk6-A9" target="_blank">
            Subscribe for updates
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <s>
            <Link to="/loki">Loki</Link>
          </s>
        </li>
        <li>
          <s>
            <a
              href="https://medium.com/dots-and-spaces/nomnom-rise-and-death-of-the-startup-during-covid-19-pandemic-e754d72c6998"
              target="_blank"
            >
              NomNom
            </a>
          </s>
        </li>
      </ul>
    </div>
  );
};
