import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import UserMgmt from './UserMgmt' 
import MenuMgmt from './MenuMgmt'  
import Reports from './Reports'  
import Sales from './Sales'  
import StaticMgmt from './staticmgmt'  
import CategoriesMgmt from './CategoriesMgmt'  
import ReportOrderDetails from './ReportOrderDetails'  
import ReportOrders from './ReportsOrders'  
import ReportsUser from './ReportsUser'  
import AdminHome from './AdminHome'   
import User from '../UsersScreens/User'
import HamburgerMenu from '../navigation/HamburgerMenu'
const Stack = createDrawerNavigator();

const AdminStack =({navigation})=>(     
    
    <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AdminHome" component={HamburgerMenu} />
            <Stack.Screen name="Profile" component={User} />
            {/* 
            <Stack.Screen name="User Management" component={UserMgmt} />
            <Stack.Screen name="Menu Management" component={MenuMgmt} />
            <Stack.Screen name="Sales" component={Sales} />
            <Stack.Screen name="Categories Management" component={CategoriesMgmt} />
            
            <Stack.Screen name="StaticPages" component={StaticMgmt} /> */}
            <Stack.Screen name="Reports and Statistics" component={Reports} />
            <Stack.Screen name="TotalUsers" component={ReportsUser}  />
            <Stack.Screen name="TotalOrders" component={ReportOrders} />
            <Stack.Screen name="OrderDetails" component={ReportOrderDetails} />
           
    </Stack.Navigator>
)
export default AdminStack;
