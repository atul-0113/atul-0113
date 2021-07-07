import { Title } from 'native-base';
import React from 'react';
import {FlatList, Text ,StyleSheet, Image, View, StatusBar , useState} from 'react-native';
const DATA=([
{url:  require('../images/food1.jpg'), name:'1'},
{url:  require('../images/food2.jpg'), name:'2'},
{url:  require('../images/food3.jpg'), name:'3'},
{url:  require('../images/food4.jpg'), name:'4'},
{url:  require('../images/food5.jpg'), name:'5'},
  
]);


const Banner = () => 
{

    return(
        <View style={styles.container}>
          <FlatList
          horizontal={true}
          data={DATA}
          renderItem={({item })=><Image style={styles.flatimg} source={url=item.url}/>} 
          keyExtractor={item => item.name}
      />
      </View>
    );
}    

const styles = StyleSheet.create({
    container: {
      margin:10,
      width:400,
      height:150,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#919911',
      borderRadius:30,
      
    },
    
    flatimg:{
      width:400,
      height:200,
      resizeMode:'cover',
      borderWidth:1,

      borderColor:'#919911'
    }
  });
  
export default Banner;