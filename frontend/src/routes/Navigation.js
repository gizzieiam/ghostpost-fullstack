import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Boast from './Boast'
import Roast from './Roast'
import Highest from './Highest'
import Forms from './Form'
import Homepage from './Homepage';
import NavBar from "../components/Nav/Nav-Bar";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <NavBar />
          <Route path="/newPost">
            <Forms />
          </Route>
          <Route path="/boast">
            <Boast />
          </Route>
          <Route path="/roast">
            <Roast />
          </Route>
          <Route path="/highest">
            <Highest />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}