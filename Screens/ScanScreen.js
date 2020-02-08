'use strict';
import PopupDialog, { DefaultAnimation } from 'react-native-popup-dialog';
import Dialog from "react-native-dialog";
import DialogInput from 'react-native-dialog-input';
import React, {Component} from 'react';
import {
	Alert,
	View,
	Text,
	StyleSheet,
	Button,
	ScrollView,
	ImageBackground,
	Image,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	ListView,
} from "react-native";
import MenuButton from "../components/MenuButton";

	class ScanScreen extends Component
	{
    
     render() {

     return(
		 //<ImageBackground source={require('../components/assets/login.jpg')} style={styles.container}>
		<View style={styles.container}>
      <View style={{paddingTop:'2%',height:'8%',width:'100%',backgroundColor:'rgba(22, 155, 225,.8)',flexDirection:'row',justifyContent:'space-between',alignItems:'space-between'}}>
      <MenuButton navigation={this.props.navigation}/>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:30,color:'white',fontWeight: 'bold'}}>Recommendation</Text>
        </View>  
      </View>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  inner: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(192,197,206)',
  },
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'white',
  },
  contentContainer: {
    marginTop:'5%',
    width: '100%',
    alignItems:"center"
  },
  ScrollItems: {
    height:'6%',
    width:'100%',
  },
  AddButton: {
    backgroundColor:'rgba(22, 155, 225,1.5)',

    borderRadius: 15,
  },
  Addtext: {
    textAlign:'center',
    color:'white',

  },
  Scanbutton: {
    backgroundColor:'rgba(22, 155, 225,1.5)',
    height:'8%',
  },
  AddNew: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    paddingTop: '2%',
  }
});
export default ScanScreen;