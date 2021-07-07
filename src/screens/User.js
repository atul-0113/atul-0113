import React , {Component} from 'react'
import 
{View , 
StyleSheet,
    Text, 
Image,
TouchableOpacity , } from 'react-native'; 

import { COLORS, icons } from '../constants'
import { images } from '../constants';

const Users=
        {name:'Atul', 
        email:'ats@ddd.com',
        contact:'8978252250' ,
        address:'1/5- Moti Patel near moti , Chennai',
        dob:'11-1-2015'}
    


const User=()=> {
   
    return(
      <View style={styles.main}>
          
          <Image source={images.avatar_2} style={styles.photo}/>
          <TouchableOpacity>
          <Text style={{fontSize:15,paddingTop:8,color:'white'}}>Change Profile Picture</Text>
          </TouchableOpacity>
          <View style={styles.info}>
        <View style={
            {flexDirection:'row', 
            backgroundColor:'white', 
            borderRadius:20, 
            borderColor:'whites',
            width:400,
            height:300,
            marginLeft:10,

            }}>
        <View>
        <Text style={styles.text1}>Name : </Text>
        <Text style={styles.text1}>Email :</Text>
        <Text style={styles.text1}>Contact :</Text>
        <Text style={styles.text1}>Date Of Birth :</Text>
        <Text style={styles.text1}>Address :</Text>
        <Text style={styles.text1}>Change Password:</Text>
        </View>
         <View>
         <Text style={styles.text2}>{Users.name}</Text>
        <Text style={styles.text2}>{Users.email}</Text>
         <Text style={styles.text2}>{Users.contact}</Text>
         <Text style={styles.text2}>{Users.dob}</Text>
         <Text style={styles.text2}>{Users.address}</Text>
         

         </View>
             
        </View>
        
        </View> 
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.btn}>
        <Text style={{color:'white', fontWeight:"200"}}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color:'white'}}>Cancel</Text>
      </TouchableOpacity>
      
        </View>
        </View>
    )
}
const styles=StyleSheet.create({

    main:{
        flex:1,
        alignItems:'center',
        backgroundColor:COLORS.black,
        
    },
    photo:{
        width:160,
        height:160,
        alignItems:'center',
        marginTop:80,
        borderRadius:80,
        borderColor:COLORS.primary,
        borderWidth:1,
        resizeMode:"cover",
        
    },
    info:{
        flexWrap:'wrap',
        display:'flex',
        paddingTop:30,
        textAlign:'center',
        borderColor:COLORS.primary,
        width:400,
        height:350,
        alignContent:'center',
        justifyContent:'center',
        
    },
    text1:
        {marginTop:12,
            marginLeft:12, 
            textShadowColor:COLORS.lightGray2 , 
            fontSize:20,
            width:150,
        },
    text2:{
        textAlign:'left',
        flexDirection:'row',
        marginTop:12,
        marginLeft:10,
        marginRight:2,
        paddingTop:0,
        fontSize:20,
        flexWrap:'wrap',
        width:200,
    },
    btn: {

        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20,
        backgroundColor:COLORS.primary,
        borderWidth:2,
        marginLeft:20
      },
    
}
)
export default User;