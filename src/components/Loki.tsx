import "./../styles/App.css";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Loki = () => {
  useEffect(() => {
    document.title =
      "Loki: Github daemon for automating your translation pipeline.";
  }, []);

  return (
    <div className="content loki">
      <Header />
      <div className="main">
        <hr />
        <h1 className="closed">Project was shut down.</h1>
        <hr />
        <div className="main-content">
          <div className="description">
            <div className="app-header">
              <div className="logo">
                <img src="/imgs/loki-logo.png" alt="Loki logo" />
              </div>
              <h3>Github daemon for automating your translation pipeline.</h3>
            </div>
            <div className="tutorial">
              <h2>
                <b>How it works:</b>
              </h2>
              <div className="step">
                <h2>1. Add Loki as a member to your Github repo.</h2>
                <img
                  src="/imgs/step1.png"
                  alt="Github interface to add Loki to the repo"
                />
              </div>
              <div className="step">
                <h2>
                  2. Create your localization files, and leave ones that need
                  translation empty.
                </h2>
                <img src="/imgs/step2.png" alt="Files before translation" />
              </div>
              <div className="step">
                <h2>
                  3. Loki will check for updates, and create pull requests with
                  translations.
                </h2>
                <img src="/imgs/step3.png" alt="Translated filed" />
              </div>
              <div className="step">
                <h2>
                  4. Press <b>Merge</b>.
                </h2>
                <img src="/imgs/step4.png" alt="Github merge button" />
              </div>
              <div className="step">
                <h2>
                  <s>5.</s> Done 🎉🎉🎉
                </h2>
              </div>
            </div>
            <hr />
            <div className="wrapper">
              <div className="text">
                <b>Price per word:</b> $0.16.
                <br />
                <br />
                <b>Supported file formats:</b> we do not care about your file
                format.
                <br />
                <br />
                <b>Supported languages:</b>
                Arabic, Bengali, Bulgarian, Burmese, Catalan, Chinese (Hong
                Kong), Chinese (Simplified), Chinese (Traditional), Croatian,
                Czech, Danish, Dutch, English (British), Estonian, Finnish,
                Flemish, French, French (Canada), German, Greek, Hebrew, Hindi,
                Hungarian, Icelandic, Indonesian, Irish English, Italian,
                Japanese, Korean, Latvian, Lithuanian, Malay, Marathi,
                Norwegian, Pashto, Persian (Farsi), Polish, Portuguese (Brazil),
                Portuguese (Europe), Punjabi, Romanian, Russian, Serbian,
                Slovak, Slovenian, Spanish (Latin America), Spanish (Mexico),
                Spanish (Spain), Swahili, Swedish, Tagalog, Tamil, Thai,
                Turkish, Ukrainian, Urdu, Vietnamese
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
