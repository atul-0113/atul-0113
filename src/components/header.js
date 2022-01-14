import React from 'react'
import { View, Text,  StyleSheet,  TouchableOpacity, Image } from 'react-native'
import { COLORS, images } from '../constants'



const Header=({navigation,text,onPress})=>{
    return(        
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={onPress}>
                    <Image source={images.hamburger}
                        style={styles.hamMenu}/>
                </TouchableOpacity>
                <Text style={styles.DashBoard}>{text}</Text>
                </View>
    )
}
export default Header;

const styles=StyleSheet.create({
    DashBoard: {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: COLORS.primary,//'#d5adc8',
        padding: 5,
        alignItems: 'center'
    },
    hamMenu: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
})