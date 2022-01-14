import React from 'react';
import {StyleSheet,View, Text , TouchableOpacity , Image} from 'react-native';
import { COLORS, images } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';


function notify(){
  return (
//   <LinearGradient colors={['#ebf8e1','#f69d3c','#3f87a6' ]}
//   style={{flexDrirection:'row',height:"25%",
//           width:"95%",
//           backgroundColor:"#333",
//           margin:10,
//           borderRadius:30,
//           justifyContent:'center',
//           }} >
<View style={styles.cardContent}>
  <Text style={styles.cardName}>HotDogs</Text>
           
<View style={styles.txtContent}>
        {/* {name, desc, price} */}
        <View style={{flexDirection:'column'}}>
            <Text style={{textAlign:'left',color:'white',width:200}}>
              This is the best dish we serve. go and order it.this is the best dish we serve. go and order it.
            </Text>
            <Text style={{textAlign:'left',color:'white',paddingRight:50}}>
                Price: 150
            </Text>
        </View>
  
<View style={{flexDirection:'column'}}>
          <Image source={images.chicago_hot_dog} 
                style={{width:100,
                height:100,
                borderRadius:30,
          }}/>
          <View style={styles.btnView}>
          
          <TouchableOpacity style={styles.minus}>
            <Text style={styles.btnTxt}>-</Text></TouchableOpacity>
            
  <Text style={styles.qtyContainer}>1</Text>
  <TouchableOpacity style={styles.plus}>
        <Text style={styles.btnTxt}>+</Text></TouchableOpacity>
      </View>
  </View>       
</View>
</View> 
//</LinearGradient>    
)
}

const Notification =({navigation})=>{

  function header(){
    return(
      <View style={styles.headerContent}>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate('Home')}} >
                <Icon name="keyboard-backspace" size={35} style={styles.back}/>
            </TouchableOpacity>
            <Text style={{justifyContent:'center', fontSize: 30, marginLeft: 15}}>Notifications </Text>
        </View>
    )
  }
    return(
        <View style={{flex:1,}}>
        {header()}
        <Text style={styles.cardName}>Notifications will be Shown Here</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    headerContent:
    {
      flexDirection: 'row',
      backgroundColor: COLORS.primary,
      height: 60,
      width: '100%',
      alignContent: 'center',
      paddingTop: 5,
    },
    back:{
        marginLeft:10,
        marginTop:4,
    },
    middle:{
        marginLeft:'30%',
        marginTop:5,
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        },
    user:{
            justifyContent:'center',
            
            height:200,
        },
    image:{
            width:"80%",
          height:200,
        },
        shadow: {
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 1,
      },
      cardContent:{

        height:"25%",
          width:"95%",
          backgroundColor:"#333",
          margin:10,
          borderRadius:30,
          justifyContent:'center',
      },
      cardName:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        backgroundColor:'coral'
      },
      minus:{
        width:30,height:30,
        backgroundColor:COLORS.primary,
        borderTopLeftRadius:10,borderBottomLeftRadius:10,borderWidth:1,
        borderColor:'white'
      },
      qtyContainer:{
        width:40,height:30,backgroundColor:COLORS.primary,
        padding:5,textAlign:'center',
        color:'white'
      },
      plus:{
        width:30,height:30,
        backgroundColor:COLORS.primary,borderBottomRightRadius:10,
        borderTopRightRadius:10,
        borderWidth:1,
        borderColor:'white'
      },
      btnTxt:{
        fontSize:30,color:'white',
          textAlign:'center', justifyContent:'center',
          marginTop:-8
        },
      txtContent:{
        flexDirection:'row', justifyContent:'space-around',
        alignItems:'center',
        padding:5
      },
      btnView:{
        flexDirection:'row',alignItems:'flex-end',
        marginTop:-20
      }
})

export default Notification;