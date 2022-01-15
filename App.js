import React, { useEffect , useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ActivityIndicator,
  View
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { AuthContext } from './src/screens/context/AuthContext';
import RootStackScreen from './src/screens/LoginStack/RootStackScreen';
import AdminStack  from './src/screens/AdminScreens/AdminStack';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserStack from './src/screens/UsersScreens/UserStack';

const Stack = createStackNavigator();
const Ham= createDrawerNavigator();

const App = ({navigation}) => {

  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

  // const initialLoginState = {
  //   isLoading: true,
  //   userName : null,
  //   userToken : null,
  //   mode: null,
  // };

  // const loginReducer = (prevState ,action)=>{
    
  //   switch (action.type) {
      
  //     case 'RETRIEVE_TOKEN':
  //       return{
  //         ...prevState,
  //         userToken: action.token,
  //         isLoading: false,
  //         mode: action.mode
  //       };   
  //     case 'LOGIN':
  //       return{
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false,
  //         mode: action.mode
  //       };   
  //     case 'LOGOUT':
  //       return{
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //         isLoading: false
  //       };   
  //     case 'REGISTER':
  //       return{
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //         isLoading: false
  //       };   
  //     }
  // }
  //const [loginState,dispatch] =React.useReducer(loginReducer,initialLoginState)
  
  // const authContext = React.useMemo(() => ({
  //   signIn: async(foundUser) => {
  //     //  console.warn('SignIn called',userToken)
  //     // setUserToken('ggg');
  //     // setIsLoading(false);
  //     const userToken = String(foundUser[0].userToken);
  //     const userName = foundUser[0].username;
  //     const mode = foundUser[0].mode;

  //      try {
  //       await AsyncStorage.setItem('userToken', userToken );
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     console.warn('userToken',foundUser)
    
  //     // console.log('user token: ', userToken);
  //     dispatch({ type: 'LOGIN', id: userName, token: userToken ,mode: mode });
  //   },
  //   signOut: async() => {
  //     // setUserToken(null);
  //     // setIsLoading(false);
  //     try {
  //       await AsyncStorage.removeItem('id.userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({type: 'LOGOUT'});
  //   },
  //   signUp: () => {
  //      //setIsLoading(false);
  //     // setUserToken('asda')
  //   },
  // }),[]);

  // useEffect(() => {
  //     setTimeout(async() => {
  //     // setIsLoading(false)
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //       dispatch({type: 'RETRIEVE_TOKEN' ,token: loginState.token});
  //     }
  //       catch(e) {
  //       console.log(e);
  //      }
  //      console.warn(userToken)
  //   }, 1000);
  // }, [])
  // if (loginState.isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="pink" />
  //     </View>
  //   )
  // }

  return (

    // <AuthContext.Provider value={authContext}>
    <Provider store={Store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          {/* { 
          (loginState.userToken !== null ?
             loginState.mode !=='Admin' ?  
          <UserStack/> : <AdminStack/>
          :
          <RootStackScreen />)} */}
  {/* {loginState.userToken !== null? <UserStack/> : <RootStackScreen/>} */}
          <RootStackScreen/>
        </NavigationContainer>
      </SafeAreaView>
      </Provider>
  // </AuthContext.Provider>
 
  );
}

const styles = StyleSheet.create({
  back: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',

  },
  //'#ebf8e1'
  //'#f69d3c'  
});

export default App;