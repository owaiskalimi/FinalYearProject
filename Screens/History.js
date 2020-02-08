import React, { Component } from "react";
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

import MenuButton from "../components/MenuButton";

class History extends Component{
  render(){
    return (
      <ImageBackground source={require('../components/assets/login.jpg')} style={styles.container}>       
        <View style={{elevation:10,paddingTop:'2%',height:'8%',backgroundColor:'rgba(22, 155, 225,.8)',flexDirection:'row',justifyContent:'space-between',alignItems:'space-between'}}>
        <MenuButton navigation={this.props.navigation}/>
          <Text style={{marginBottom:'0.5%',marginRight:'57%',fontSize:30,color:'white',fontWeight: 'bold'}}>My Bills</Text>
        </View>
        <View style={styles.inner}>
          
            <View style={styles.Bill}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BillHistoryView')}>
              <Text style={{marginTop:'3%',marginLeft:'3%',textAlign:'left',color:'white',fontWeight:'bold'}}>8:53 pm{"\n"}Wednesday, 28 November 2018</Text>
              <Text style={{marginTop:'2%',marginRight:'5%',textAlign:'right',color:'white',fontWeight:'bold'}}>24 Items</Text>
              <Text style={{marginTop:'1%',textAlign:'right',color:'white',fontSize:20,fontWeight:'bold',textShadowColor:'grey'}}>Cash    5,000 Rs </Text>
          </TouchableOpacity>
            </View>
          
        </View>
      </ImageBackground>
    );
  }
}
export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  text: {
    color: 'white',
    paddingLeft: '39%',
    paddingTop: '7%',
  },
  text1: {
    color: 'white',
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(22, 155, 225,.3)',
  },
  scroll: {
    height:'100%',
    width:'100%',
  },
  Bill: {
    marginTop: '20%',
    height: '17%',
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0,.4)',
    borderRadius: 12,
    elevation: 4,
  }
});