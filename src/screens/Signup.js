import React from 'react'
import { Text ,Image, View ,  StyleSheet, TextInput , TouchableOpacity , useState} from 'react-native'
import { COLORS } from '../constants';

 

const SignUp= ({navigation})=> {

  const navigateTo=  () => {
    navigation.navigate('Login')
  }
    
  
  return(
      <View style={styles.container}>
        <Image source={require('../images/mama.png')} style={styles.img} />
        
      <View style={styles.SectionStyle}>
        
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter First NameName"
        placeholderTextColor="#003f5c"
        onChangeText={(fname) => setEmail(fname)}
      />
    </View>
      <View style={styles.SectionStyle}>
        
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Last Name"
        placeholderTextColor="#003f5c"
        onChangeText={(lname) => setEmail(lname)}
      />
    </View>
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
        placeholder="Mobile Number"
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
    <View style={styles.SectionStyle}>
      
      <TextInput
        style={styles.inputStyle}
        placeholder="Confirm Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(cpassword) => setPassword(cpassword)}
      />
    </View>
    <TouchableOpacity style={styles.loginBtn} onPress={navigateTo}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
      </View>
    )
}
const styles = StyleSheet.create({
     container: {
      flex:1,
     //color:'#8E0E00'#ebf8e1#3f87a6,
      alignItems:'center',
      backgroundColor:'#FFF',
      justifyContent:'center'},
    img:{
      marginBottom:15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor:'#108dc7',
      width:"80%",
      height:32,
      alignItems:'center',
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      marginTop:20,
      width: "80%",
      borderRadius: 25,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginBottom:20,
      backgroundColor:COLORS.primary,
      
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
  
export default SignUp;