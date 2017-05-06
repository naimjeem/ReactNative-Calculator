// ReactCalculator

import React, { Component } from 'react';
import Style from './Style';
import InputButton from './InputButton';

import {
  View,
  Text,
  AppRegistry
} from 'react-native';


// Multi-dimensional array represents for rows and inputs
const inputButtons = [
  ['', 'CE', '%', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '+/-', '.', '=']
]

const initialState = {
  inputValue: 0,
  previousInputValue: 0,
  currentInputValue: 0,
  selectedSymbol: null,
  connectValue: null,
  displayedCalculate: null,
  isDecimal: null
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>
            {this.state.connectValue ? this.state.connectValue : (this.state.displayedValue ? this.state.displayedValue : this.state.inputValue)}
          </Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  // For each row in inputButtons const, create a row View and add an InputButton for each input in the row.
  _renderInputButtons() {
    let views = [];

    for (var r =0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];

      for (var i = 0; i < row.length; i ++) {
        let input = row[i];

        inputRow.push(
          <InputButton
            value={input}
            key={r + '-' + i}
            onPress={this._onInputButtonPressed.bind(this, input)}
            highlight={this.state.selectedSymbol === input} />
        )
      }

      views.push(<View style={Style.inputRow} key={'row-' + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    // Detect the type of input
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }

  _handleNumberInput(num) {
    this.setState({
      inputValue: this.state.isDecimal ? eval(this.state.currentInputValue + this.state.selectedSymbol + num) : this.state.inputValue * 10 + num,
      currentInputValue: this.state.isDecimal ? 0 : this.state.inputValue * 10 + num,
      connectValue: null,
      displayedValue: null,
      isDecimal: null
    })
  }

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '-':
      case '+':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
          connectValue: str
        });
        break;
      case '%':
        this.setState({
          inputValue: this.state.inputValue / 100
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          displayedValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null,
          connectValue: null,
          inputValue: 0
        });
        break;
      case ".":
        this.setState({
          isDecimal: true,
          selectedSymbol: str,
          previousInputvalue: this.state.inputValue
        });
        break;
      case "+/-":
        this.setState({
          inputValue: -Math.abs(this.state.currentInputValue),
          currentInputValue: -Math.abs(this.state.currentInputValue)
        })
        break;
      case 'CE':
        // Clear Everything
        this.setState({
          inputValue: 0,
          connectValue: null,
          displayedValue: null
        });
        break;
    }
  }
}

AppRegistry.registerComponent('calculator', () => Calculator);

