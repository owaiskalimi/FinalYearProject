import React, { Component } from "react";
import BarcodeScanner,{Exception, FocusMode, CameraFillMode, FlashMode, BarcodeType, pauseScanner, resumeScanner} from 'react-native-barcode-scanner-google';

import {
	View,
	Text,
	StyleSheet,
	Button,
	Alert,
	ImageBackground,
  TouchableOpacity,
} from "react-native";

import MenuButton from "../components/MenuButton";

class Scanbarcode extends Component{
  constructor(props){
    super(props);
    this.state = {
      barcode:false,
    }
  }
  
	 render() {
    return (

      <View style={{flex: 1}}>
          
      <View style={{elevation:10,paddingTop:'2%',height:'8%',backgroundColor:'black',flexDirection:'row',justifyContent:'space-between',alignItems:'space-between'}}>
      <MenuButton navigation={this.props.navigation}/>
              </View>
          <BarcodeScanner
              style={{flex: 1}}
              onBarcodeRead={({data, type}) => {
                  pauseScanner()
                  Alert.alert(`Barcode '${data}' of type '${type}' was scanned.`);
                  resumeScanner()
              }}
              focusMode = {FocusMode.AUTO}
              cameraFillMode = {CameraFillMode.COVER}
          />
      </View>
    );
  }
}
export default Scanbarcode;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

