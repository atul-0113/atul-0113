import React, { useState } from 'react'
import {
  Text, Image, View, StyleSheet, TextInput,
  TouchableOpacity 
} from 'react-native'
import { COLORS , images } from '../../constants';
import Icons from '../../libs/icons';
import DismissKeyboard from '../../components/Dismisskeyboard';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('Name')
  const [email, setEmail] = useState('Email')
  const [number, setNumber] = useState('Contact Number')
  const [password, setPassword] = useState('password')
  const [showPassword, setShowPassword] = useState(true)
  
  const navigateTo = () => {
    navigation.navigate('Login')
  }

  return (
    <DismissKeyboard>
    <View style={styles.container}>
      <Image source={images.mama} style={styles.img} />

      <View style={styles.SectionStyle}>
        <Icons type="AntDesign" name="user" style={{
          fontSize: 20, color: 'red', padding: 10
        }} />

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Name"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View style={styles.SectionStyle}>
        <Icons type="AntDesign" name="mail" style={{
          fontSize: 20, color: 'red', padding: 10
        }} />

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}

        />
      </View>

      <View style={styles.SectionStyle}>
        <Icons type="AntDesign" name="phone" style={{
          fontSize: 20, color: 'red', padding: 10
        }} />

        <TextInput
          style={styles.inputStyle}
          placeholder="Mobile Number"
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          onChangeText={(number) => setNumber(number)}
        />
      </View>
      <View style={styles.SectionStyle}>
        <Icons type="Ionicons" name="key-outline" style={{
          fontSize: 20, color: 'red', padding: 10
        }} />

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={showPassword}
          onChangeText={(password) => setPassword(password)}
        />
        <Icons type="Entypo"
          name={showPassword === true ? "eye-with-line" : "eye"}
          style={{
            fontSize: 20, color: 'red', paddingTop: 10
          }}
          onPress={() => { setShowPassword(!showPassword) }}
        />
      </View>
      <View style={styles.SectionStyle}>
        <Icons type="Ionicons" name="key-outline" style={{
          fontSize: 20, color: 'red', padding: 10
        }} />

        <TextInput
          style={styles.inputStyle}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={showPassword}
          onChangeText={(cpassword) => setPassword(cpassword)}
        />

      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={navigateTo}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
    </View>
    </DismissKeyboard>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //color:'#8E0E00'#ebf8e1#3f87a6,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  img: {
    marginBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#108dc7',
    width: "80%",
    height: 32,
    alignItems: 'center',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    marginTop: 20,
    width: "80%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: COLORS.primary,

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
    color: '#003f5c',
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 2,
    borderRadius: 30,
    borderColor: '#dadae8',
    fontSize:16
  },


});

export default SignUp;