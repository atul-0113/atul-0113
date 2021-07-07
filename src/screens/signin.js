
import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import LoginTab from '../components/navigation/logintab'
const signin = () =>  {
  
  return (
 
<NavigationContainer>
  <LoginTab/>
</NavigationContainer>

);
}
export default signin