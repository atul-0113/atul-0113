import React from 'react'
import { Text ,Image, View , StyleSheet, TextInput , TouchableOpacity , useState} from 'react-native'
import { COLORS } from '../constants';
import LinearGradient from 'react-native-linear-gradient'

const Login = ({navigation})=> {

  const navigateTo=  () => {
    navigation.navigate('Home')
  }
  
  
  return(
 

      <View style={styles.container}>
        <Image source={require('../images/mama.png')} style={styles.img} />
        
      <View style={styles.SectionStyle}>
        
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Email"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>
     <View style={styles.SectionStyle}>
      
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
    <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn} onPress={navigateTo}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      </View>
 
    )
}
const styles = StyleSheet.create({
     container: {
       flex:1,
      justifyContent:'center',
      backgroundColor:'white',
     //color:'#8E0E00'#ebf8e1#3f87a6,
      alignItems:'center',
        
    },
    img:{
      marginBottom:15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor:'#108dc7',
      width:"80%",
      height:32,
      alignItems:'center',
    },
    text:{
      color:'#108dc7',
      fontSize:18,
      fontWeight:"600",
      textAlign:"left",
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {

      width: "60%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom:20,
      backgroundColor:COLORS.primary,
      borderWidth:2
    },
    SectionStyle: {
      flexDirection: 'row',
      height: 40,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    inputStyle: {
      flex: 1,
      color: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
    },
    
  });
  
export default Login;