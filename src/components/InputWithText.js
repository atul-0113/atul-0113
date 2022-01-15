import React from 'react'
import { View, Text, StyleSheet ,TextInput } from 'react-native'
import { COLORS, SIZES } from '../constants'
import Icons from '../libs/icons'
const InputWithText = ({navigation,text,placeholder,onChangeText,type,name}) => {
    return (
        <View style={styles.mainView}>
             <View style={styles.iconText}>
                 <Icons type={type} name={name} 
                style={[{color:'#003f5c',fontSize:25}]} />
            <Text style={{color:'#003f5c',fontSize:15,padding:5}}>{text}</Text>
            </View>
            <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#003f5c"
        onChangeText={onChangeText}
        
      />
        </View>
    )
}

export default InputWithText

const styles =StyleSheet.create({
    mainView:{
        marginBottom:10,
    },
    inputStyle: {
        color: '#333',
        padding:5,
        borderBottomWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor:'#fff',
        width:SIZES.width-50,
        height:45,
        marginLeft:10,
        fontSize:18,
        borderBottomColor:'#003f5c',
        borderBottomWidth:1
        
      },
      iconText:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,

        // borderBottomColor:'#003f5c',
        // borderBottomWidth:1
        
      }
})