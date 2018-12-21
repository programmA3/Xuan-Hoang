import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Product from './Product';

export default class App extends Component{
  render() {
    return (
      <View>
        <Product productID={1} productName={"Keyboard 1"}/>
        <Product productID={2} productName={"Keyboard 2"}/>
        <Product productID={3} productName={"Keyboard 3"}/>
        <Product productID={4} productName={"Keyboard 4"}/>
        <Product productID={5} productName={"Keyboard 5"}/>
      </View>
    );
  }
}