import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { COLORS, icons } from "../../constants"
import Activity from '../UsersScreens/Activity';
import Notification from '../UsersScreens/Notification';

import Menu from '../UsersScreens/Menu';
import User from '../UsersScreens/User';
import Orders from '../UsersScreens/orders';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName={"Home"}>
            
            <Tab.Screen name="Order" component={Orders} options={{
                    tabBarIcon: ({ focused }) => (
                    <Image source={icons.order} resizeMode="contain"
                    style={{width: 27,height: 27,tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            
            <Tab.Screen name="My Account" component={User} options={{
                    tabBarIcon: ({ focused }) => (
                    <Image source={icons.user} resizeMode="contain"
                    style={{width: 25,height: 25,tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    )
                }}
            />
            
            <Tab.Screen name="Home" component={Activity} 
            options={{
                    tabBarIcon: ({ focused }) => (
                    <Image source={icons.home} resizeMode="contain"
                    style={{width:25,height:25,tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}/>)  
                }}
            />

            <Tab.Screen name="Notification" component={Notification} options={{
                    tabBarIcon: ({ focused }) => (
                    <Image source={icons.bell} resizeMode="contain"
                    style={{width: 25,height: 25,tintColor: focused ? COLORS.primary : COLORS.secondary
                           }}
                        />
                       
                    )
                }}
            />
            
            <Tab.Screen name="Menu" component={Menu} options={{
                    tabBarIcon: ({ focused }) => (
                    <Image source={icons.cutlery} resizeMode="contain"
                    style={{width: 25,height: 25,tintColor: focused ? COLORS.primary : COLORS.secondary
                           }}
                        />
                       
                    )
                }}
            />
            
            
            
        </Tab.Navigator>
    )
}

export default Tabs;