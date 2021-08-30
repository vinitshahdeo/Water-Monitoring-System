import React, { Component } from "react";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Footer} from "./components/footer" 
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Provider>
        <Footer/>
      </Router>
    );
  }
}

export default App;
