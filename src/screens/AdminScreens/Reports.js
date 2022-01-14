import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants'
import Icon from '../../libs/icons'
import Header from '../../components/header'
import LinearGradient from 'react-native-linear-gradient'
import { Pressable } from 'react-native'

const Reports = ({ navigation }) => {

    const [showMenu, setShowMenu]= useState(false);
    const [arrow,setArrow] = useState(false);
    const REPORTS_MODULE = [
        {
            id: 1,
            title: 'Total Users',
            type: 'AntDesign',
            name: "down",
            name1: "up",
            icon: 'Entypo',
            iconName: "users",
            nav: "TotalUsers"
        },
        {
            id: 2,
            title: 'Total Orders',
            type: 'AntDesign',
            name: "down",
            name1: "up",
            icon: 'FontAwesome5',
            iconName: "clipboard-list",
            nav: "TotalOrders"
        },
        {
            id: 3,
            title: 'Orders Details',
            type: 'AntDesign',
            name: "down",
            name1: "up",
            icon: 'MaterialCommunityIcons',
            iconName: "clipboard-list",
            nav: "OrdersDetails"
        },
        {
            id: 4,
            title: 'Payment Details',
            type: 'AntDesign',
            name: "down",
            name1: "up",
            icon: 'MaterialIcons',
            iconName: "payment",
            nav: "PaymentDetails"
        },
    ]
    
    function reportModules() {
        const renderItems = ({ item }) => {
            return (

                <View>
                    <Pressable onPress={()=>navigation.navigate(item.nav)}>
                    <LinearGradient colors={['#3b5998', '#f2f2','#ffd','#3b5998']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.funcView} >

                        <Icon type={item.icon} name={item.iconName} style={{ fontSize: 24, color: '#fff' }} />
                        <Text style={styles.funcText}>{item.title}</Text>
                        <Icon type={item.type} name={arrow == false ? item.name :item.name1} 
                        style={{ fontSize: 22, color: '#fff' }} 
                        />

                    </LinearGradient>
                    <View style={{ marginHorizontal: 10, borderWidth: StyleSheet.hairlineWidth * 1 }} />
                </Pressable>
                </View>
            )}
        return (
                <FlatList
                    data={REPORTS_MODULE}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItems}
                />
            )}
    return (

        <View style={styles.main} >
            <Header props="Reports & Statistics" 
            onPress={()=>navigation.toggleDrawer()}/>
            
            {reportModules()}
                 
        </View>
    )}
export default Reports;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        display:'flex',
        backgroundColor:'#3b5988'
      },
    funcView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 10,
        backgroundColor: COLORS.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.8,
        elevation: 10,
        borderRadius: 10,

    },
    funcText: {
        fontSize: 20,
        fontWeight: '600',
        width: 200,
        color: '#fff'
    }
})