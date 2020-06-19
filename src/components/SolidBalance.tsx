import "./../styles/App.css";

import React, { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SolidBalance = () => {
  useEffect(() => {
    document.title = "Solid Balance: Deep insights into your health.";
  }, []);

  return (
    <div className="content solid-balance">
      <Header />
      <div className="main">
        <div className="main-content">
          <div className="description">
            <div className="app-header">
              <h1>Solid Balance</h1>
              <div className="logo">
                <img src="/imgs/solid-balance.png" alt="Solid Balance logo" />
              </div>
            </div>
            <div className="preview-mobile">
              <img
                src="/imgs/preview-solid-balance.png"
                alt="Solid Balance preview"
              />
            </div>
            <div className="text">
              <h3>Deep insights into your health.</h3>
              <div>
                <b>Activity</b>
                <br />
                Your life to be balanced needs besides <i>push mode</i> also
                have <i>relaxed mode</i>, that is why we focus on four core
                values from your daily activity:
                <br />
                - Workouts
                <br />
                - Walking + Running
                <br />
                - Mindful time
                <br />
                - Sleep.
                <br />
                <br />
                Our machine learning models based on your previous activity show
                you a prediction about your expected results for the current
                day, and times when will you start/finish each activity
                respectively.
                <br />
                <br />
                <b>Insights</b>
                <br />
                Your lifetime stats for the last 7/30/360 days are summarized on
                the Insight page to give you a better idea of what your past
                performance looks like.
                <br />
                <br />
                <b>Data Privacy</b>
                <br />
                Your data never leaves your device. Your privacy - is our
                priority.
                <br />
                <br />
                <a
                  href="https://medium.com/dots-and-spaces/solid-balance-v2-0-dbe71ab88649"
                  target="_blank"
                  rel="noopener noreferrer"
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
                id="DownloadSolidBalance"
              >
                <img src="/imgs/appstore.png" alt="AppStore logo" />
              </a>
            </div>
          </div>
          <div className="preview">
            <img
              src="/imgs/preview-solid-balance.png"
              alt="Solid Balance preview"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
