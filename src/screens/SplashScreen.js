import React from 'react'
import { Text ,Image, View , 
  TouchableOpacity,StyleSheet , ImageBackground} from 'react-native'

const SplashScreen = ({navigation})=> {
  
  const navigateTo=  () => {
    navigation.navigate('Register')
  }
  return(
        <View style={styles.main}>
          <ImageBackground source={require('../images/splashfood.png')} style={styles.background}>          
          
          <TouchableOpacity onPress={navigateTo}>
            <Image source={require('../images/splashLogo.png')} style={styles.icon}/>
            
          <Text style={styles.name}>मांमे दा होटल</Text>
          </TouchableOpacity>
          </ImageBackground>
                    
        </View>
    )
}
const styles = StyleSheet.create({
     main: {
      flex:1,
      flexDirection:'column',
        },
     background:{
      flex:1,
      resizeMode:"center",
      alignSelf:'stretch',
      justifyContent:"center",
      
        },
        
    icon:{

      width:100,
      height:100,
      borderRadius:50,
      borderWidth:2,
      borderColor:'#8E0E00',
      alignSelf:'center',
 
    },
    name:{
      fontSize:40,
      marginTop:20,
      fontWeight:"800",
      color:'#8E0E00',
      fontFamily:'Roboto-Condensed-Light',
      textAlign:'center',
 
    }
    
  });
  
export default SplashScreen