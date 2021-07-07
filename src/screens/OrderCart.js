import React ,{useContext} from 'react'
import {Text, View,Button,  StyleSheet,TouchableOpacity, Image} from 'react-native'
import {COLORS , icons , images} from '../constants'
import {Context as CartContext } from '../store/cart';
const OrderCart=({navigation,route})=>{

    const { storeState , updateCart } = useContext(CartContext);
    
    function header() {
        return (
          <View style={styles.header}>
             <Text style={{ 
                  textAlign: 'right', 
                  fontSize: 30}}>
                Select Payment Method
              </Text>
              <Button title="Wapas Jao" onPress={()=>{navigation.navigate('Home')}}/>
 
            </View>
         )
        }
        function paymentType(){
            return(
                <View style={{justifyContent:'center',
                            padding:10}}>
                    <Text style={{fontSize: 30}}>Cards</Text>
                    <View style={styles.cardView}>
                    <Image source={icons.master_card} 
                            style={{resizeMode:'contain' , 
                            width:30, height:30, 
                            tintColor:COLORS.primary}}/>
                    <Text>Credit , Debit & ATM Cards</Text>
                    </View>
                    
                <Text style={{  
                  fontSize: 30}}>UPI</Text>
                  <View style={{backgroundColor:'pink',
                                flexDirection:'row',
                                alignItems:'center',padding:10}}>
                                <Image source={require('../images/patym2.jpg')}
                                    style={{resizeMode:'contain', 
                                    width:30, height:30 
                                    }}/>
                <Text>Paytm</Text>
                </View>

                <View style={{backgroundColor:'pink',
                                flexDirection:'row',
                                alignItems:'center',padding:10}}>
                <Image source={require('../images/gpay.png')} 
                style={{width:30,height:30,resizeMode:'contain'}}/>
                        <Text>Google Pay</Text>
                </View>
                <Text style={{padding:10,fontSize:30}}>Cash On Delivery</Text>

                </View>

            )
        }
    return(
        <View style={{flex:1}}> 
        {header()}    
        {paymentType()}
    <View>
               
    </View>
        </View>
    )
}
export default OrderCart;

const styles=StyleSheet.create(
    {
        header:{
            
            flexDirection:'row',
            backgroundColor:'#FFF',
            height:50,
            width:'100%',            
        },
        cardView:{
            
        }
    }
)
