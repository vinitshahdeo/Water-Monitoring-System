import React, { Component } from "react";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
