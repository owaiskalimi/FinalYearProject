import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createDrawerNavigator} from 'react-navigation';
import LogInScreen from './Screens/LogInScreen'
import SignUpScreen from './Screens/SignUpScreen'
import QuantityScreen from './Screens/QuantityScreen'
import BillHistoryView from './Screens/BillHistoryView'
import DrawerNav from './Screens/DrawerNav'
import HomeScreen from './Screens/HomeScreen'
import WelcomeScreen from './Screens/WelcomeScreen'

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = new createStackNavigator({
    WelcomeScreen:{ screen : WelcomeScreen},
    LogInScreen:{ screen : LogInScreen},
    SignUpScreen:{ screen : SignUpScreen},
    QuantityScreen: { screen : QuantityScreen},
    BillHistoryView: { screen : BillHistoryView},
    DrawerNav: { screen : DrawerNav},
},{headerMode: 'none'})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
