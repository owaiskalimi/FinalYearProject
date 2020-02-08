import React, { Component } from "react";
import {Platform, Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen'
import ScanScreen from './ScanScreen'
import scanbarcode from './scanbarcode'
import History from './History'

import MenuDrawer from "../components/MenuDrawer";

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation}/>)
	}
	
}

const AppDrawerNavigator = createDrawerNavigator({
	Home: { screen : HomeScreen},
  	Recommendation: { screen : ScanScreen},
  	Shop: { screen : scanbarcode},
  	Bills: { screen : History}
},DrawerConfig
);

export default AppDrawerNavigator;