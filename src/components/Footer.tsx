import "./../styles/App.css";

import React, { useState, useEffect } from "react";

export const Footer = (props: any) => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://github.com/Dots-n-Spaces/Policies/blob/master/PrivacyPolicy.md">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="mailto:dots.n.spaces@gmail.com">Write us</a>
        </li>
        <li>
          <a href="https://twitter.com/dots_and_spaces">Tweet us</a>
        </li>
        <li>
          <a href="http://eepurl.com/gk6-A9">Subscribe for updates</a>
        </li>
      </ul>
      <ul>
        <li>
          <s>
            <a href="/loki">Loki</a>
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
