import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import Login from './Login';
import SignUp from './Signup';


const Stack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={SignUp}/>

    </Stack.Navigator>
);

export default RootStackScreen;