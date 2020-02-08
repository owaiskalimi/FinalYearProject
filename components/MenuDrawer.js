import React from 'react';
import {
    Platform,
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component {
    navLink(nav, text) {
        return(
            <TouchableOpacity style={{height:'10%'}} onPress={() => this.props.navigation.navigate(nav)}> 
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.topLinks}>
                <ImageBackground source={require('../components/assets/drawer_image.jpg')} style={{height:'100%'}}> 
                    <View style={styles.profile}> 
                        <View style={styles.imgView}>
                            <Image 
                            source={require('../components/assets/avatar.png')} 
                            style={styles.img}
                            />
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{fontSize:20,color:'white',marginLeft:'-50%'}}>Owais Kalimi</Text>
                        </View>
                    </View>
                </ImageBackground>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink('Home', 'Home')}
                    {this.navLink('Recommendation','Recommendation')}
                    {this.navLink('Shop', 'Shop')}
                    {this.navLink('Bills', 'Bills')}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile:{
        flex:1,
        flexDirection: 'row',
        alignItems:'center',
        height:'100%',
        width:'100%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    imgView:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft:'5%'
    },
    img:{
        height: '50%',
        width: '30%',
        borderRadius: 80,
    },
    topLinks:{
        height: '25%',
    },
    bottomLinks:{
        flex:1,
        backgroundColor:'white',
        paddingLeft:'5%',
        paddingTop:'5%',
    },
    link: {
        flex:1,
        fontSize: 20,
    }
})