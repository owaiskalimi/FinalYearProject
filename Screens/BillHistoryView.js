import React, { Component } from 'react';
import { ImageBackground,Button,Dimensions } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';
import Back from 'react-native-vector-icons/Feather'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView
} from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons"
class BillHistoryView extends Component{
  
  render() {
    return (
     <ImageBackground source={require('../components/assets/login.jpg')} style={styles.container}>
        <View style={{elevation:10,paddingTop:'2%',height:'8%',backgroundColor:'rgba(22, 155, 225,.8)',flexDirection:'row',justifyContent:'space-between',alignItems:'space-between'}}>
          <TouchableOpacity
          style={{marginLeft:'3%'}}
          onPress={() => this.props.navigation.navigate('History')}>
            <Back name="arrow-left" size={40} color="white"/>
          </TouchableOpacity>
          <Text style={{marginBottom:'0.5%',marginRight:'57%',fontSize:30,color:'white',fontWeight: 'bold'}}>My Bills</Text>
        </View>  
        <View style={styles.inner}>
     <View style={{height:'20%',width:'100%',backgroundColor:'rgba(22, 155, 225,.5)'}}>
     </View>

<View style={{height:'20%',width:'80%',backgroundColor:'rgba(0,0,0,.5)',marginTop:'-15%',marginLeft:'10%',borderRadius:10,borderColor:'black'}}>
     <Text style={{fontSize:20,color:'white',marginLeft:'3%',marginTop:"3%"}}>Price: Rs 5000</Text>
<Text style={{fontSize:20,color:'white',marginLeft:'3%'}}>Number of Items: 24</Text>
<Text style={{fontSize:20,color:'white',marginLeft:'3%'}}>Date: 23/12/1996</Text>




</View>

<View style={{height:'67%',width:'80%',backgroundColor:"white",marginLeft:'10%',borderColor:'black',borderRadius:10}}>
<View style={{height:'7%',width:'100%',backgroundColor:"rgba(22, 155, 225,.9)",borderBottomWidth:1,borderBottomColor:'black',flexDirection:"row",allignItem:"space-between",justifyContent:'space-between'}}>
     <Text style={{color:"white",marginTop:'1%'}}> Name</Text>
<Text style={{color:"white",marginTop:'1%'}}> Quantity</Text>
<Text style={{color:"white",marginRight:'5%',marginTop:'1%'}}> Price</Text>
</View>
     <ScrollView style={{marginTop:"0%"}}>
<View style={{height:'100%',width:'100%',backgroundColor:"white",borderBottomWidth:1,borderBottomColor:'black',flexDirection:"row",allignItem:"space-between",justifyContent:'space-between'}}>
     <Text style={{color:"black",marginTop:'1%'}}> Milk</Text>
<Text style={{color:"black",marginTop:'1%'}}> 5</Text>
<Text style={{color:"black",marginRight:'5%',marginTop:'1%'}}> 800</Text>
</View>



</ScrollView>

</View>

    </View>
    </ImageBackground>
    );
  }
}
export default BillHistoryView;
const styles = StyleSheet.create({
container: {
    flex: 1,
    
  },
  inner: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(22, 155, 225,.3)',
  },
  
});
