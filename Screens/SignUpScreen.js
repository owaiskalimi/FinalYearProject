import React, { Component } from "react";
import Icons  from 'react-native-vector-icons/Entypo';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import Icons2  from 'react-native-vector-icons/MaterialIcons';
import Icons3  from 'react-native-vector-icons/Entypo';
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
} from "react-native";
class SignUpScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      password:"",
      contact:"",
      contactvalidate: true,
      namevalidate: true,
    }
  }
  handleEmail = (typedText) => {
    this.setState({email: typedText});
  }
  handlePassword = (typedText) => {
    this.setState({password: typedText});
  }
  validate(text,type)
  {
    num=/^[0-9]+$/
    alpha=/^[a-zA-Z]+$/
    if(type=='contact')
    {
      if(num.test(text))
      {
        this.setState({
          contactvalidate:true,
          contact:text,
        })
      }
      else
      {
        this.setState({
          contactvalidate:false,
        })
      }
    }
    else if(type=='name')
    {
      if(alpha.test(text))
      {
        this.setState({
          namevalidate:true,
          name:text,
        })
      }
      else
      {
        this.setState({
          namevalidate:false,
        })
      }
    }
  }
  render(){
    return (
      <ImageBackground source={require('../components/assets/login.jpg')} style={styles.container}>
          <View style={styles.inner}>
          <View style={{height:'40%',width:'100%',marginTop:'60%'}}>
             <Icons style={{marginBottom:'-10%' ,marginLeft:'15%'}}  name="user" size={30} color="white"/>
             <TextInput style={[styles.textinputUsername,
             !this.state.namevalidate? styles.error:null]}
                placeholder='Name'
                autoCapitalize="none"
                placeholderTextColor='white'
                underlineColorAndroid='transparent'
                onChangeText={(text)=>this.validate(text,'name')}
                Name = {this.state.name}
             />

       <Icons1 style={{marginTop:'8%',marginLeft:'16%',marginBottom:'-15%'}} name="lock" size={30} color="white"/>
        <TextInput style={styles.textinputPassword}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
          onChangeText={this.handlePassword}
          Password = {this.state.password}
        />

        <Icons2 style={{marginTop:'8%',marginLeft:'15%',marginBottom:'-15%'}} name="mail" size={30} color="white"/>
        <TextInput style={styles.textinputEmail}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          keyboardType='email-address'
          underlineColorAndroid='transparent'
          onChangeText={this.handleEmail}
          Email = {this.state.email}
        />

        <Icons2 style={{marginTop:'8%',marginLeft:'15%',marginBottom:'-15%'}} name="phone" size={30} color="white"/>
        <TextInput style={[styles.textinputphone_number,
        !this.state.contactvalidate? styles.error:null]}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
          onChangeText={(text)=>this.validate(text,'contact')}
          Contact = {this.state.contact}
        />
        
          <TouchableOpacity
            style={styles.buttonborder}
            onPress={() => this.props.navigation.navigate('LogInScreen')}>
            <Text style={{marginLeft: -10, color: 'white',fontSize: 25,fontWeight: 'bold',align: 'center'}}>SignUp</Text>
            
          </TouchableOpacity>
          </View>        
           </View>
           </ImageBackground> 

    );
  }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    color: 'white',
    paddingLeft: '39%',
    paddingTop: '7%',
  },


  inner: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(22, 155, 225,.3)',
  },
  textinputUsername: {
    marginLeft: '10%',
    marginTop:'0%',
    marginRight: '10%',
    paddingLeft: '15%',
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: 'rgba(255, 255, 255, .4)',
    backgroundColor: 'rgba(169,169,169, .6)',
  },

  textinputPassword: {
    marginLeft: '10%',
    marginTop:'5%',
    marginRight: '10%',
    paddingLeft: '15%',
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: 'rgba(255, 255, 255, .4)',
    backgroundColor: 'rgba(169,169,169, .6)',
  },

  textinputEmail: {
    marginLeft: '10%',
    marginTop:'5%',
    marginRight: '10%',
    paddingLeft: '15%',
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: 'rgba(255, 255, 255, .4)',
    backgroundColor: 'rgba(169,169,169, .6)',
  },

    textinputphone_number: {
    marginLeft: '10%',
    marginTop:'5%',
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
  error:{
    borderColor:'red'
  },
});