import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';

interface initialState {
  text: string
};

export class App extends Component<initialState> {
  state: initialState = {
    text: this.props.text
  };

  componentDidMount = () => {
    document.title = 'MacRae Software';
    console.log(this.state.text);
  };

  render() {
    return (
      <div className="App">

      </div>
    );
  };
}

export default App;
