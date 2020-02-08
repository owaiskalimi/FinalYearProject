import React, { Component } from "react";
import NumericInput from 'react-native-numeric-input';

import {
	
	View,
	Text,
	StyleSheet,
	Button,
	ImageBackground
} from "react-native";

class QuantityScreen extends Component{
	constructor(props) {
 	super(props);
   this.state = {value: 0};
  }
 
	render(){
		return (
			<ImageBackground source={require('../components/assets/login.jpg')} style={styles.container}>
			
			<Text style={{color: 'white',fontSize: 25,fontWeight: 'bold',align: 'top'}}> Add Quantity </Text>
			<NumericInput value={this.state.value} onChange={value => this.setState({value})  }   onChange={value => console.log(value)} 
				totalWidth={240} 
	            totalHeight={50} 
	            iconSize={25}
	            step={1}
	            valueType='real'
	            rounded 
	            textColor='white' 
	            iconStyle={{ color: 'white' }} 
	            rightButtonBackgroundColor='#EA3788' 
	            leftButtonBackgroundColor='#E56B70'
			/>
		<Button
			onPress={() => this.props.navigation.navigate('ScanScreen')}
		  	title="OK"
		  	color="#9370DB"
		  	totalWidth={240} 
            totalHeight={50} 
		/>

	
	
		</ImageBackground>
		
		);
	}
}
export default QuantityScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    inner: {
  	flex: 1,
  	width: '100%',
  	height: '100%',
  	backgroundColor: 'rgba(0,191,255, 0.2)',
  },
});

