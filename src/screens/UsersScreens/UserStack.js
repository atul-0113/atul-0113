import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Activity from './Activity';
import Tabs from '../navigation/tabs';
import Notification from './Notification';
import Menu from './Menu';
import User from './User';
import OrderCart from './OrderCart';
import Orders from './orders';

const Stack= createStackNavigator();

const UserStack=({navigation})=>(
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Tabs} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="HomePage" component={Activity} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="OrderCart" component={OrderCart} />
          <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
)
export default UserStack;