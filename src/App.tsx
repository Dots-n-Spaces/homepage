import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import "./styles/App.css";
import { Tiny2048 } from "./components/Tiny2048";
import { SolidBalance } from "./components/SolidBalance";
import { SnapAssist } from "./components/SnapAssist";
import { Loki } from "./components/Loki";
import { NoMatch } from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Tiny2048 />
          </Route>
          <Route path="/tiny2048">
            <Tiny2048 />
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
      </HashRouter>
    </div>
  );
}

export default App;
