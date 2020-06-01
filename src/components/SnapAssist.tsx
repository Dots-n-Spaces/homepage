import "./../styles/App.css";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SnapAssist = () => {
  useEffect(() => {
    document.title =
      "Snap Assist: MacOS toolbar utility application that makes window management easier.";
  }, []);

  return (
    <div className="content snap-assist">
      <Header />
      <div className="main">
        <div className="main-content">
          <div className="preview device device-macbook-pro device-spacegray">
            <div className="device-frame">
              <img
                className="device-content"
                src="/imgs/preview-snap-assist.gif"
                alt="Snap Assist preview"
              />
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
          <div className="description">
            <div className="app-header">
              <div className="logo">
                <img src="/imgs/snap-assist.png" alt="Snap Assist logo" />
              </div>
              <h1>Snap Assist</h1>
            </div>
            <div className="preview-mobile">
              <div className="device device-macbook-pro device-spacegray">
                <div className="device-frame">
                  <img
                    className="device-content"
                    src="/imgs/preview-snap-assist.gif"
                    alt="Snap Assist preview"
                  />
                </div>
                <div className="device-stripe"></div>
                <div className="device-header"></div>
                <div className="device-sensors"></div>
                <div className="device-btns"></div>
                <div className="device-power"></div>
              </div>
            </div>
            <div className="text">
              <h3>
                MacOS toolbar utility application that makes window management
                easier.
              </h3>
              <div>
                <b>Usage</b>
                <br />
                <ul>
                  <li>Press ^ ctrl + ⌘ cmd + W to make a fullscreen window.</li>
                  <li>
                    Press ^ ctrl + ⌘ cmd + S to make a normal size window.
                  </li>
                  <li>
                    Press ^ ctrl + ⌘ cmd + A to resize window to half screen and
                    move it to the left.
                  </li>
                  <li>
                    Press ^ ctrl + ⌘ cmd + D to resize window to half screen and
                    move it to the right.
                  </li>
                </ul>
                <br />
                <br />
                Currently, application supports fullscreen, halves, and
                conversation to normal size. Use either keyboard shortcuts or
                drag&drop window to top/left/right of your screen.
              </div>
            </div>
            <div className="download">
              <a
                href="https://github.com/Dots-n-Spaces/Snap-Assist/releases"
                target="_blank"
                id="DownloadSnapAssist"
              >
                <img src="/imgs/github.png" />
                <span>Download</span>
              </a>
            </div>
            <br />
            <br />
            <div>
              If you like to buy us coffee ☕️ with a croissant 🥐, you can
              donate to{" "}
              <a
                href={`https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VT7GVV2DR3LZS&source=url`}
                id="DonateSnapAssist"
                className="donate"
              >
                here
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
