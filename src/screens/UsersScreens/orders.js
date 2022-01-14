import React from 'react'

import { Text, View, TouchableOpacity, StyleSheet,ScrollView } from 'react-native'
import { COLORS, images, icon } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Orders = ({navigation}) => {

    function header() {
        return (
            <View style={styles.headerContent}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }} >
                    <Icon name="keyboard-backspace" size={35} style={styles.back} />
                </TouchableOpacity>
                <Text style={{
                    justifyContent: 'center',
                    fontSize: 30,
                    marginLeft: 15
                }}>Your Orders
                </Text>
            </View>
        )
    }
    function orderedFood() {
        return (
            <View style={{
                margin: 10, height:210,
                borderColor: 'coral',
                borderWidth: 4,
                borderRadius: 10,
                paddingBottom:5,
                backgroundColor:COLORS.secondary
            }}>
                <View style={{flexDirection:'row',
                            justifyContent:'space-between',
                            padding:8,
                            backgroundColor:COLORS.primary,
                            borderBottomWidth:StyleSheet.hairlineWidth }}> 
                    <Text style={{ fontSize: 20 ,color:'white' }}>
                    Order Number :122521
                    </Text>
                    <Text style={{ fontSize: 20,color:'white' }}>400Rs
                    </Text>
                </View>
                
                <View style={{  margin:10 ,padding:5 }}>
                    <Text style={{ fontSize: 14 }}>ITEMS  </Text>
                    <Text> 1 X Dal</Text>
                </View>
                <View style={{  padding:5, marginLeft:10,borderBottomWidth:StyleSheet.hairlineWidth *2 }}>
                <Text style={{ fontSize: 14 }}>ORDERED ON  </Text>
                    <Text>12/10/2021 at 6:15:20 PM</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <Text style={{fontSize:16}}>Delivered</Text>
                <TouchableOpacity
                    style={{
                        height: 30,
                        width: 100,
                        backgroundColor:COLORS.primary,
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: 'coral',
                        justifyContent: 'center',                     
                        paddingLeft: 8
                    }}>
                    <Text style={{color:'white'}}>Repeat Order</Text>
                </TouchableOpacity>
                </View>
                
            </View>

        )
    }
    return (
        <View style={styles.screen}>
            {header()}
            <ScrollView>
            {orderedFood()}
            </ScrollView>
        </View>

    )
}

export default Orders;

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    headerContent:
    {
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        height: 60,
        width: '100%',
        alignContent: 'center',
        paddingTop: 5,
    },
    back: {
        marginLeft: 10,
        marginTop: 4,
    },
})

