import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

export class App extends Component {
  constructor() {
    super();
    this.state = {}
  };

  componentDidMount = () => {
    document.title = 'MacRae Software';
  };

  render = () => {
    return (
      <div className="App">

      </div>
    );
  };
}

export default withRouter(App);
