import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Login  from "../../screens/Login";
import { COLORS, icons } from "../../constants"
import SignUp from "../../screens/Signup";

const Tab = createBottomTabNavigator();



const LoginTab = () => {
    return (
        
        <Tab.Navigator>
            

            <Tab.Screen name="Login" component={Login}   options={{
                    tabBarIcon: ({ focused }) => (
                    <Image source={icons.login} resizeMode="contain"
                    style={{width: 25,height: 25,tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen name="Signup" component={SignUp}  options={{
                
                    tabBarIcon: ({ focused }) => (
                    <Image source={icons.signup} resizeMode="contain"
                    style={{width: 25,height: 25,tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
  
            
        </Tab.Navigator>
        
    )
}


export default LoginTab;