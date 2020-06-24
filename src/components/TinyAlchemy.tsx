import "./../styles/App.css";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const TinyAlchemy = () => {
  useEffect(() => {
    document.title = "Tiny Alchemy: Apple Watch Puzzle Game.";
  }, []);

  return (
    <div className="content tinyalchemy">
      <Header />
      <div className="main">
        <div className="main-content">
          <div className="description">
            <div className="app-header">
              <h1>Tiny Alchemy</h1>
              <div className="logo">
                <img src="/imgs/tinyalchemy/icon.png" alt="Tiny Alchemy logo" />
              </div>
            </div>
            <div className="preview-mobile">
              <img
                src="/imgs/tinyalchemy/preview.png"
                alt="Tiny Alchemy preview"
              />
            </div>
            <div className="text">
              <h3>Tiny Alchemist is a tiny puzzle game for the Apple Watch.</h3>
              <div>
                <br />
                <br />
                Slide chemical elements on the grid to add them up and generate
                new elements with a higher atomic number.
                <br />
                <br />
                Get to Sodium (Na 11) and win the game, but do not stop there...
                <br />
                <br />
                <br />
                <a
                  href={`https://itunes.apple.com/us/app/solid-balance/id1449868247?ls=1&mt=8`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="ReaAboutTinyAlchemy"
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
                id="DownloadTinyAlchemy"
              >
                <img src="/imgs/appstore.png" alt="AppStore logo" />
              </a>
            </div>
          </div>
          <div className="preview">
            <img
              src="/imgs/tinyalchemy/preview.png"
              alt="Tiny Alchemy preview"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
