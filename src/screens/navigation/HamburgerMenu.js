import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import User from '../UsersScreens/User';
import AdminHome from '../AdminScreens/AdminHome';
import UserMgmt from '../AdminScreens/UserMgmt';
import MenuMgmt from '../AdminScreens/MenuMgmt';
import Sales from '../AdminScreens/Sales';
import CategoriesMgmt from '../AdminScreens/CategoriesMgmt';
import Reports from '../AdminScreens/Reports';
import StaticMgmt from '../AdminScreens/staticmgmt';
import ReportsUser from '../AdminScreens/ReportsUser';
import ReportOrders from '../AdminScreens/ReportsOrders';
import ReportOrderDetails from '../AdminScreens/ReportOrderDetails';

const HamburgerMenu=({navigation})=>{
    
  const StackAdmin = createStackNavigator();

    return(
        
        <StackAdmin.Navigator screenOptions={{headerShown:false}}>
          <StackAdmin.Screen name="AdminHome" component={AdminHome}/>
          <StackAdmin.Screen name="Profile" component={User} />
          <StackAdmin.Screen name="User Management" component={UserMgmt} />
          <StackAdmin.Screen name="Menu Management" component={MenuMgmt} />
          <StackAdmin.Screen name="Sales" component={Sales} />
          <StackAdmin.Screen name="Categories Management" component={CategoriesMgmt} />
          <StackAdmin.Screen name="Reports & Statistics" component={Reports} />
          <StackAdmin.Screen name="Static Pages" component={StaticMgmt} />
          <StackAdmin.Screen name="TotalUsers" component={ReportsUser}  />
          <StackAdmin.Screen name="TotalOrders" component={ReportOrders} />
          <StackAdmin.Screen name="OrderDetails" component={ReportOrderDetails} />
        </StackAdmin.Navigator>
     
    )
}
export default HamburgerMenu;