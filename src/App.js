import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/home";
import Results from "./pages/results";
import SingleView from "./pages/singleView";
import MainNavigation from "./components/mainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/results" exact>
            <Results />
          </Route>
          <Route path="/single-view" exact>
            <SingleView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
