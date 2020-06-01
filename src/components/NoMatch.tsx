import "./../styles/App.css";

import React, { useState, useEffect } from "react";

export const NoMatch = (props: any) => {
  useEffect(() => {
    document.title = "404";
  }, []);

  return (
    <div className="main">
      <div className="main-content">
        <div className="description">
          <div className="app-header">
            <h1>Page Not Found</h1>
            <p>Sorry, but the page you were trying to view does not exist.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
