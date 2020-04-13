import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'


class App extends Component {
  render () {
    return (
      <Fragment>
        <div className= 'App'>
          <h1>React App</h1>
          <Membre />
        </div>
      </Fragment>
    )
  }
}

export default App;
