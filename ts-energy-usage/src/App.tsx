import * as React from "react";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Task } from "./pages/Task";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Task} />
        </Switch>
      </BrowserRouter>
    );
  }
}
