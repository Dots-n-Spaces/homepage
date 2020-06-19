import "./../styles/App.css";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Tiny2048 = () => {
  useEffect(() => {
    document.title = "Tiny 2048: Apple Watch Puzzle Game.";
  }, []);

  return (
    <div className="content tiny2048">
      <Header />
      <div className="main">
        <div className="main-content">
          <div className="description">
            <div className="app-header">
              <h1>Tiny 2048</h1>
              <div className="logo">
                <img src="/imgs/tiny2048/icon.png" alt="Tiny 2048 logo" />
              </div>
            </div>
            <div className="preview-mobile">
              <img src="/imgs/tiny2048/preview.png" alt="Tiny 2048 preview" />
            </div>
            <div className="text">
              <h3>2048 puzzle game for the Apple Watch.</h3>
              <div>
                Slide numbered tiles on a grid to combine them to create a tile
                with the number 2048.
                <br />
                <br />
                <br />
                <a
                  href={`https://itunes.apple.com/us/app/solid-balance/id1449868247?ls=1&mt=8`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="ReaAboutTiny2048"
                >
                  Read more
                </a>
                <br />
              </div>
            </div>
            <div className="download">
              <a
                href={`https://itunes.apple.com/us/app/solid-balance/id1449868247?ls=1&mt=8`}
                target="_blank"
                rel="noopener noreferrer"
                id="DownloadTiny2048"
              >
                <img src="/imgs/appstore.png" alt="AppStore logo" />
              </a>
            </div>
          </div>
          <div className="preview">
            <img src="/imgs/tiny2048/preview.png" alt="Tiny 2048 preview" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
