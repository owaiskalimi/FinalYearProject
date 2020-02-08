import React, { Component } from "react";
import Icons  from 'react-native-vector-icons/MaterialIcons';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import { KeyboardAvoidingView } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
class LogInScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      contact: "",
      contactvalidate: true,
      password: "",
    }
  }
  handlePass = (typedText) => {
    this.setState({password: typedText});
  }
  validate(text,type){
    num=/^[0-9]+$/
    if(type=='contact')
    {
      if(num.test(text))
      {
        this.setState({
          contactvalidate:true,
          contact:text,
        })
      }
      else{
        this.setState({
          contactvalidate:false,
        })
      }
    }
  }
  render(){
    return (
      <ImageBackground source={require('../components/assets/login.jpg')} style={styles.container}>
          <View style={styles.inner}>
          <View style={{height:'40%',width:'100%',marginTop:'60%'}}>
         
          <Icons style={{marginTop:'10%',marginLeft:'15%'}} name="email" size={30} color="white"/>

          <TextInput style={[styles.textinputmail,
          !this.state.contactvalidate? styles.error:null]}  
            placeholder='Contact'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            onChangeText={(text)=>this.validate(text,'contact')}
            Contact={this.state.contact}
          />
          
          <Icons1 style={{marginTop:'10%',marginLeft:'16%',marginBottom:'-15%'}} name="lock" size={30} color="white"/>

          <TextInput style={styles.textinputpass}
            placeholder='Password'
            placeholderTextColor='white'
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={this.handlePass}
            Password={this.state.password}
          />
          
          <TouchableOpacity
            style={styles.buttonborder}
            onPress={() => this.props.navigation.navigate('DrawerNav')}>            
            <Text style={{color: 'white',fontSize: 25,fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createaccount}
            onPress={() => this.props.navigation.navigate('SignUpScreen')}>
            <Text style={styles.text}>Create Account</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    );
  }
}
export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    color: 'white',
    textAlign: 'center',
    paddingTop: '7%',
  },
  text1: {
    color: 'white',
  },
  inner: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(22, 155, 225,.3)',
  },
  textinputmail: {
    marginLeft: '10%',
    marginTop:'-10%',
    marginRight: '10%',
    paddingLeft: '15%',
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: 'rgba(255, 255, 255, .4)',
    backgroundColor: 'rgba(169,169,169, .6)',
  },
  textinputpass: {
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    paddingLeft: '15%',
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: 'rgba(255, 255, 255, .4)',
    backgroundColor: 'rgba(169,169,169, .6)',
  },
  buttonborder: {
    marginTop: '15%',
    marginLeft: '10%',
    marginRight: '10%',
    paddingLeft: '33%',
    paddingTop: '2%',
    paddingBottom: '2%',
    borderRadius: 30,
    backgroundColor: 'rgba(22, 155, 225,1.5)',
  },
  emailicon: {
    flex: 1,
  },
  createaccount:{
    justifyContent: 'center',
  },
  error:{
    borderColor:'red'
  },
});