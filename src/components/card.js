import React from 'react';
import {View , Text} from 'react-native';
import { 
    Card, 
    CardTitle, 
    CardContent, 
    CardAction, 
    CardButton, 
    CardImage } from 'react-native-material-cards'

const DishCard=()=> {
    return(
   
          <Card>
  <CardImage 
    source={{uri: 'http://placehold.it/480x270'}} 
    title="Above all i am here"
  />
  <CardTitle 
    title="This is a title" 
    subtitle="This is subtitle"
   />
  <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
  <CardAction 
    separator={true} 
    inColumn={false}>
    <CardButton
      onPress={() => {}}
      title="Push"
      color="blue"
    />
    <CardButton
      onPress={() => {}}
      title="Later"
      color="blue"
    />
  </CardAction>
</Card>
    )
}
export default DishCard;