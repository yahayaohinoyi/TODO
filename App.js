/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import CheckBox from './Components/checkbox'


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isChecked : false
    }
  }
  render(){

  return (

        <CheckBox
            onPress = {()=>{ this.setState({isChecked:!this.state.isChecked})}}
            isChecked = {this.state.isChecked}
            size = {20}
            tickSize = {15}
            tickColor = 'black'
            style = {{borderColor: 'black'}}
            opacity = {0}/>

  );
};
}

