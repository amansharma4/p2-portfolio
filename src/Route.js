import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Learning from "./components/Learning";
import Project from "./components/Project";
function Routes() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/learning">Learning</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/learning">
            <Learning />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Routes;
