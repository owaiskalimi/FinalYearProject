import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
class WelcomeScreen extends Component{
	render(){
		return (
			<ImageBackground source={require('../components/assets/login.jpg')} style={styles.container}>
				<View style={styles.inner}>
					<Image style={{resizeMethod:'resize',borderRadius:10,marginBottom:'10%'}}/>
          <Text style={{fontSize:40,color:'white',fontWeight:'bold',marginBottom:'20%'}}>Smart Shop</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LogInScreen')}
            style={{backgroundColor:'rgb(22, 155, 225)',height:'10%',width:'50%',marginBottom:'10%',justifyContent:'center',alignItems:'center',borderRadius:30}}>
              
              <Text style={{fontSize:30,color:'white',paddingTop:'10%',}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUpScreen')}
            style={{backgroundColor:'rgb(22, 155, 225)',height:'10%',width:'50%',marginBottom:'10%',justifyContent:'center',alignItems:'center',borderRadius:30}}>
              <Text style={{fontSize:30,color:'white',paddingTop:'10%',}}>SignUp</Text>
          </TouchableOpacity>
				</View>
			</ImageBackground>
      );
  }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent:'center',
    alignItems:'center',
  },
  inner: {
    height: '80%',
    width: '80%',
    backgroundColor: 'rgba(22, 155, 225,.3)',
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
  },
 });