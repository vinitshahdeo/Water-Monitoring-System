import React from 'react';
import './App.css';
import {BrowserRouter as Router,  Switch} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Route from 'react-router-dom/Route'


function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </Switch>

</Router>
    </>
  );
}

export default App;
