import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Boast from './Boast'
import Roast from './Roast'
import Highest from './Highest'
import Forms from './Forms'
import Homepage from './Homepage';

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
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