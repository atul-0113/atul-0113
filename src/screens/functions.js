import React ,{ useState} from 'react';
import {Text ,StyleSheet, View, TouchableOpacity , Modal ,Pressable} from 'react-native'
import DishCategory from '../components/dishcategory';
import {COLORS} from '../constants/theme'


const Functions = () => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [quantity , setQuantity]= useState(null)
    function plusMinus()
    {
      <Text>Bhard me jaaao bhenchod</Text>
    }
    return (
<View style={styles.container}>

<View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
   </View>       
              
            <View style={{flex:1, 
                flexDirection:'row', 
                alignItems:'center', 
                justifyContent:'center',}}>
                  
            <TouchableOpacity style={styles.minu} onPress={()=>plusMinus("-" ,qty)}>

            <Text style={{fontSize:25}}>-</Text>
            </TouchableOpacity>
                <Text style={{fontSize:25}}>{qty}</Text>
            <TouchableOpacity style={styles.plus}            
            onPress={()=>setModalVisible(true)}>

            <Text style={{fontSize:25}}>+</Text>
            </TouchableOpacity>
            </View>
            
        </View> 
    )
}

const styles= StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'coral'
    },
    minu:{
        width:40,
        height:30, 
        backgroundColor:COLORS.primary,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        paddingLeft:20,
        marginRight:10,
    },
    plus:{
        width:40,
        height:30, 
        backgroundColor:COLORS.primary,
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        paddingLeft:10
    },

})

export default Functions;