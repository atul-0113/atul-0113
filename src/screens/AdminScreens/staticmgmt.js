import React from 'react'
import {View , Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import {COLORS} from '../../constants'
import Header from '../../components/header'

const StaticMgmt=({navigation})=>{
   
    return (
        <View style={styles.main}>
           <Header props="Static Pages"
           onPress={()=>navigation.toggleDrawer()}/>
            <Text>StaticMgmt Screen</Text>
        </View>
    )
}
export default StaticMgmt;

const styles=StyleSheet.create({
    main:{
    justifyContent:'center'
},

DashBoard:{
    fontSize:22,
    color:'#333',
    fontWeight:'bold',
    
},
header:{
    flexDirection:'row',
    height:60,
    width:'100%',
    backgroundColor:COLORS.primary,//'#d5adc8',
    padding:5,
    alignItems:'center'
},
hamMenu:{
    width:50,
    height:50,
    resizeMode:'contain',
}  
})