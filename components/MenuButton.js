import React from 'react'
import { StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo'

export default class MenuButton extends React.Component {
    render() {
        return(
            <Icons
                name="menu"
                color='white'
                size={40}
                style={styles.menuIcon}
                onPress={() => this.props.navigation.toggleDrawer()}
            />
        )
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        marginLeft:'3%',
        alignItems:'center',
        justifyContent:'center',
    }
})