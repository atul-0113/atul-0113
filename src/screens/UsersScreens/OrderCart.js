import React, { useContext } from 'react'
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { COLORS, icons, images } from '../../constants'
// import { Context as CartContext } from '../../storeold/cart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const OrderCart = ({ navigation, route }) => {

    // const { storeState, updateCart } = useContext(CartContext);

    function header() {
        return (
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Home') }}>
                    <Icon name="keyboard-backspace" size={35} style={styles.back} />
                </TouchableOpacity>
                <Text style={{
                    textAlign: 'right', fontSize: 30, paddingLeft: 15
                }}>
                    Select Payment Method
                </Text>

                {/* <Button title="Wapas Jao" onPress={() => { navigation.navigate('Home') }} /> */}

            </View>
        )
    }
    function cartView() {
        return (
            <ScrollView style={styles.cartView}>

                

            </ScrollView>
        )
    }
    function paymentType() {
        return (
            <View style={styles.paymentView}>
                <Text style={{ fontSize: 30 }}>Cards</Text>
                <TouchableOpacity>
                <View style={styles.paymentType}>
                    <Image source={icons.master_card}
                        style={[styles.imgIcon, { tintColor: COLORS.primary }]} />
                   
                    <Text style={styles.payTextStyle}>Credit , Debit & ATM Cards</Text>
                        </View>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 30
                }}>Google Pay , Paytm or UPI</Text>
                <TouchableOpacity><View style={styles.paymentType}>
                    <Image source={images.paytm} style={styles.imgIcon} />
                    <Text style={styles.payTextStyle}>Paytm</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity><View style={styles.paymentType}>
                    <Image source={images.gpay}
                        style={styles.imgIcon} />
                    <Text style={styles.payTextStyle}>Google Pay</Text>
                </View>
                </TouchableOpacity>
                <Text style={{ padding: 10, fontSize: 30 }}>Cash On Delivery</Text>
                <TouchableOpacity>
                <View style={styles.paymentType}>
                    <Image source={images.cash} style={styles.imgIcon} />
                    <Text style={styles.payTextStyle}>Cash</Text>
                </View>
                </TouchableOpacity>
            </View>

        )
    }

    return (

        <View style={{ flex: 1, backgroundColor: 'gray' }}>
            {header()}
            {cartView()}
            {paymentType()}
            <View style={styles.footer}>
                <Text>
                    If you face any difficulty in making payment please write to us using a feedback form or Contact Support.!
                </Text>
            </View>
        </View>
    )
}
export default OrderCart;

const styles = StyleSheet.create(
    {
        header: {
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
        cartView: {
            margin: 10,
            height: 200,
            borderRadius: 10,
            borderColor: '#ffc371',
            borderWidth: 1,
            shadowOpacity: 0.25,
            backgroundColor: 'white'
        },
        paymentView: {
            justifyContent: 'center',
            padding: 10,
            backgroundColor: '#ffc371'
        },
        paymentType: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 2,
            marginVertical: 5,
            borderColor: '#333',
            borderWidth: 2,
        },
        imgIcon: {
            resizeMode: 'cover',
            width: 40,
            height: 40,
            borderRadius: 20,
            borderColor: COLORS.primary,
        },
        payTextStyle: {
            alignItems: 'center',
            fontSize: 20,
            marginLeft: 20
        },
        footer: {
            flex: 1,
            backgroundColor: 'white',
            height: 50,
            padding: 10,
        }
    }
)
