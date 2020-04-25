/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App">
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}
