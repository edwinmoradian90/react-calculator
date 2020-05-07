/* eslint-disable class-methods-use-this */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculator from '../logic/calculate';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: '0',
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const data = { total, next, operation };
    const newData = calculator.calculate(data, buttonName);
    const {
      newResult, newTotal, newNext, newOperation,
    } = newData;
    this.setState({
      result: newResult, total: newTotal, next: newNext, operation: newOperation,
    });
    console.log(newData);
  }

  render() {
    const { result, total, next } = this.state;
    return (
      <div className="app">
        <div className="calculatorContainer">
          <Display total={total} next={next} result={result} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}
