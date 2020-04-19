import React from "react";
import AppPage from "./components/pages/AppPage";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/app" component={AppPage} />
      </Switch>
    </Router>
  );
}

export default App;
