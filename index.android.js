import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Calculator from './src/Calculator';

export default class calculator extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 2, backgroundColor: '#193441'}}></View>
            <View style={{flex: 8, backgroundColor: '#3E606F'}}></View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('calculator', () => calculator);
