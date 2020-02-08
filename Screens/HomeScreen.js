import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	TouchableOpacity,
	AsyncStorage,
} from "react-native";
import MenuButton from "../components/MenuButton";

class HomeScreen extends React.Component{

	render(){
		return (
			<ImageBackground source={require('../components/assets/login.jpg')} style={styles.container}>
          		<View style={{elevation:10,paddingTop:'2%',height:'8%',backgroundColor:'rgba(22, 155, 225,.8)',flexDirection:'row',justifyContent:'space-between',alignItems:'space-between'}}>
				  	<MenuButton navigation={this.props.navigation}/>
          			<Text style={{marginBottom:'0.5%',marginRight:'64%',fontSize:30,color:'white',fontWeight: 'bold'}}>Home</Text>
          		</View>
          		<View style={styles.inner}>
					<View style={styles.avatarContainer}>
						<Text style={{fontSize: 30, color: 'white', fontWeight: 'bold', marginTop:'5%'}}>USER</Text>
						<Image
						source={require('../components/assets/avatar1.gif')}
						style={{marginTop:'5%',borderWidth:2,borderRadius:80,borderColor:'white'}}/>
					</View>
				</View>
			</ImageBackground>
		)
	}
}
export default HomeScreen;
const styles = StyleSheet.create({
  	container: {
    	flex: 1,
	    
  	},
	inner: {

  		alignItems:'center',
  		justifyContent:'center',
	    flex: 1,
	    width: '100%',
	    height: '92%',
	    backgroundColor: 'rgba(22, 155, 225,.2)',
  	},
  	Start: {
  		alignItems:'center',
  		justifyContent:'center',
  		height:'15%',
  		width:'40%' ,
 		marginTop:'3%',
  		backgroundColor: 'rgb(22, 155, 225)',
  		borderRadius: 30,
  },
  avatarContainer: {
	  height:'30%',
	  width:'90%',
	  backgroundColor:'rgba(22, 155, 225,.5)',
	  marginTop: '5%',
	  alignItems:'center',
	  borderColor: 'white',
	  borderWidth:2,
	borderTopLeftRadius:10,
	borderTopRightRadius:10,
	  elevation: 15,
	  backfaceVisibility: 'visible'
	},
	avatarContainer2: {
		height:'50%',
		width:'90%' ,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor:'rgba(255,255,255,.8)',
		borderBottomRightRadius:10,
		borderBottomLeftRadius:10,
	},
	
});

