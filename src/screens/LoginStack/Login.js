import React ,{useState , useContext}from 'react'
import { Text ,Image, View , StyleSheet, TextInput , 
  TouchableOpacity,Alert } from 'react-native'
import { COLORS, images } from '../../constants';
import Icons from '../../libs/icons';
import DismissKeyboard from '../../components/Dismisskeyboard';
// import { AuthContext } from '../context/AuthContext';
import {useSelector, useDispatch} from 'react-redux'
import {setLogin, setToken,  setRegister} from '../../redux/actions'
import loginReducer from '../../redux/reducers'
const Login = ({navigation})=> {

  const {userName,userToken, mode,password} = useSelector(state=>state.loginReducer);
  const dispatch = useDispatch();
  // const [userName,setUserName] = useState('userName')
  // const [password,setPassword] = useState('password')
  // const [mode,setMode] = useState(null)
  const [showPassword,setShowPassword]= useState(true)
  // const {signIn} = useContext(AuthContext);
  
  const Users = [
    {
        id: 1, 
        email: 'user1@email.com',
        username: 'user1', 
        password: 'password', 
        userToken: 'token123',
        mode: 'Admin'
    },
    {
        id: 2, 
        email: 'user2@email.com',
        username: 'user2', 
        password: 'pass1234', 
        userToken: 'token12345',
        mode: 'user'
    },
    {
        id: 3, 
        email: 'testuser@email.com',
        username: 'testuser', 
        password: 'testpass', 
        userToken: 'testtoken',
        mode: 'user'
    },
];
  const loginHandle=  (userName , password ,mode) => {
    
    const foundUser = Users.filter( item => {
      return userName == item.username && password == item.password && mode == setMode(item.mode) 
        
      });
  if ( userName.length == 0 || password.length == 0 ) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
          {text: 'Okay'}
      ]);
      return;
  }

  if ( foundUser.length == 0 ) {
      Alert.alert('Invalid User!', 'Username or password is incorrect.', [
          {text: 'Okay'}
      ]);
      return;
  }
  LOGIN(foundUser);  
}

  const navigateToSignup=  () => {
    navigation.navigate("Register")
  }
      
  return(
    <DismissKeyboard>

      <View style={styles.container}>
        <Image source={images.mama} style={styles.img} />
        
      <View style={styles.SectionStyle}>
      <Icons type="MaterialCommunityIcons" name="email" style={{ 
            fontSize: 20, color: 'red', padding:10 }} />

      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Email"
        placeholderTextColor="#003f5c"
        onChangeText={(userName) => dispatch(userName)}
      />
    </View>
     <View style={styles.SectionStyle}>
     <Icons type="Ionicons" name="key" style={{ 
            fontSize: 20, color: 'red', padding:10 }} />

      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Password."
        placeholderTextColor="#003f5c"
        secureTextEntry={showPassword}
        onChangeText={(password) => dispatch(password)}
      />
      <Icons type="Entypo" 
      name={showPassword === true? "eye-with-line" : "eye"} 
      style={{ 
          fontSize: 20, color: 'red', paddingTop:10 }}
          onPress={()=>{setShowPassword(!showPassword)}} 
           />
      
      
    </View>
    <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn} onPress={()=>{loginHandle(userName , password ,mode)}}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn} onPress={navigateToSignup}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      </View>
      </DismissKeyboard>
 
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
      borderRadius: 10,
      height: 45,
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
      color: '#333',
      paddingLeft: 15,
      paddingRight: 15,
      borderBottomWidth: 2,
      borderRadius: 10,
      borderColor: '#dadae8',
    },
    
  });
  
export default Login;