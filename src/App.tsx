import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";
import { SolidBalance } from "./components/SolidBalance";
import { SnapAssist } from "./components/SnapAssist";
import { Loki } from "./components/Loki";
import { NoMatch } from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SolidBalance />
          </Route>
          <Route path="/solid-balance">
            <SolidBalance />
          </Route>
          <Route path="/snap-assist">
            <SnapAssist />
          </Route>
          <Route path="/loki">
            <Loki />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
