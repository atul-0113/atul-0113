
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from './src/store/cart';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import LinearGradient from 'react-native-linear-gradient'
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/Signup';
import Signin from './src/screens/signin';
import Activity from './src/screens/Activity';
import Tabs from './src/components/navigation/tabs';
import LoginTab from './src/components/navigation/logintab'
import Notification from './src/screens/Notification';
import Menu from './src/screens/Menu'
import Functions from './src/screens/functions'
import User from './src/screens/User'
import OrderCart from './src/screens/OrderCart'


const Stack= createStackNavigator();

//export default createAppContainer(Stack )

function App() {
  return (
  <Provider>
    <SafeAreaView style={{flex: 1}}>
  <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                  headerShown: false
                }}
                initialRouteName={'Home'}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Register" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Tabs}  />
                <Stack.Screen name="Menu" component={Menu}  />
                <Stack.Screen name="User" component={User}  />
                <Stack.Screen name="HomePage" component={Activity}/>
                <Stack.Screen name="OrderCart" component={OrderCart}/>
            </Stack.Navigator>
    </NavigationContainer> 
    </SafeAreaView>
    </Provider>
);
}

const styles = StyleSheet.create({
  back:{
    display:'flex',
    flex:1,
    backgroundColor:'#FFFFFF',  
    justifyContent:'center',
    
  },
  //'#ebf8e1'
  //'#f69d3c'  
});

export default App;
