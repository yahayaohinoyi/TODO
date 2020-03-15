/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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


const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <CheckBox  size = {20} tickSize = {15} tickColor = 'red' style = {{borderColor: 'red'}} opacity = {0.5}/>
      </SafeAreaView>
    </>
  );
};


export default App;
