import React, { Component } from 'react';
import Home from './pages/Home'
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css'
class App extends Component{
  render() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
  }
}

export default App;
