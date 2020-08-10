import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

type initialState = {};

export class App extends Component<{}, initialState> {
  state: initialState = {};

  componentDidMount = () => {
    document.title = 'MacRae Software';
  };

  render() {
    return (
      <div className="App">

      </div>
    );
  };
}

export default App;
