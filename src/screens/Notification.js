import React from 'react';
import {StyleSheet,View, Text , TouchableOpacity , Image} from 'react-native';
import { COLORS, images } from '../constants';
import Activity from './Activity';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card, ListItem, Button} from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'

const users = ([
    {url: images.honey_mustard_chicken_burger, name:'Chicken Honey'},
    {url: images.pizza, name:'Pizza'},
    {url: images.tomato_pasta, name:'Pasta'},
    {url: images.sushi, name:'Sushi'},
    {url: images.noodle_shop, name:'Noodles'},
    {url: images.fries_restaurant, name:'Fries'},
    {url: images.crispy_chicken_burger, name:'Chicken Burger'},
    {url: images.chicago_hot_dog, name:'Hot Dog'},
      
   ])
function dishCard(){
    return(

/**<g>
    <Card.Title>Card</Card.Title>
    <Card.Divider/>
  {
   users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={u.url}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
}
</g Card>*/
<Card style={{height:100}}>
  <Card.Title>HELLO WORLD</Card.Title>
  <Card.Divider/>
    <View style={{ marginTop:115}}>
    <Text style={{marginBottom: 10, color:COLORS.white }}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
//      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{width:100,borderRadius: 0,backgroundColor:COLORS.primary,marginLeft:250}}
      title='Order Now' />
    </View>
    
  
</Card>
  )
}

function card(){
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

const Notification =()=>{
    return(
        <View style={{flex:1}}>
        <View style={styles.notifcationContainer}>
            <TouchableOpacity  >
                <Icon name="keyboard-backspace" size={35} style={styles.back}/>
            </TouchableOpacity>
            <Text style={styles.middle}>Notifications </Text>
        </View>
        {card()}
        </View>
    )
}

const styles=StyleSheet.create({
    notifcationContainer:
    {
        display:'flex',
        flexDirection:'row',
        backgroundColor:COLORS.secondary,
        alignContent:'space-between'
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