import React from 'react'
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import { COLORS, images } from '../../constants'
import Upload from 'react-native-vector-icons/dist/Entypo'

import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../../components/header'
const MenuMgmt = ({ navigation }) => {

    const menuData = [
        {
            menuId: 1,
            name: 'Crispy Chicken Burger',
            photo: images.crispy_chicken_burger,
            description: 'Burger with crispy chicken, cheese and lettuce',
            price: 100,
            categories: [1, 2]
        },
        {
            menuId: 2,
            name: 'Crispy Chicken Burger with Honey Mustard',
            photo: images.honey_mustard_chicken_burger,
            description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
            price: 150,
            categories: [3, 4],
        },
        {
            menuId: 3,
            name: 'Crispy Baked French Fries',
            photo: images.baked_fries,
            description: 'Crispy Baked French Fries',
            price: 80,
            categories: [5, 6],
        },
        {
            menuId: 4,
            name: 'Hawaiian Pizza',
            photo: images.hawaiian_pizza,
            description: 'Canadian bacon, homemade pizza crust, pizza sauce',
            price: 150,
            categories: [7, 8],
        },
        {
            menuId: 5,
            name: 'Tomato & Basil Pizza',
            photo: images.pizza,
            description: 'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
            price: 20,
            categories: [1, 3],
        },
        {
            menuId: 6,
            name: 'Tomato Pasta',
            photo: images.tomato_pasta,
            description: 'Pasta with fresh tomatoes',
            price: 10,
            categories: [4, 6],
        },
        {
            menuId: 7,
            name: 'Mediterranean Chopped Salad ',
            photo: images.salad,
            description: 'Finely chopped lettuce, tomatoes, cucumbers',
            price: 10,
            categories: [7, 8],
        },
        {
            menuId: 8,
            name: 'Chicago Style Hot Dog',
            photo: images.chicago_hot_dog,
            description: 'Fresh tomatoes, all beef hot dogs',
            price: 20,
            categories: [1, 8],
        },
        {
            menuId: 9,
            name: 'Sushi sets',
            photo: images.sushi,
            description: 'Fresh salmon, sushi rice, fresh juicy avocado',
            price: 50,
            categories: [2, 7],
        },
        {
            menuId: 10,
            name: 'Kolo Mee',
            photo: images.kolo_mee,
            description: 'Noodles with char siu',
            price: 5,
            categories: [3, 6],
        },
        {
            menuId: 11,
            name: 'Sarawak Laksa',
            photo: images.sarawak_laksa,
            description: 'Vermicelli noodles, cooked prawns',
            price: 8,
            categories: [4, 5],
        },
        {
            menuId: 12,
            name: 'Nasi Lemak',
            photo: images.nasi_lemak,
            description: 'A traditional Malay rice dish',
            price: 8,
            categories: [3, 8],
        },
        {
            menuId: 13,
            name: 'Nasi Briyani with Mutton',
            photo: images.nasi_briyani_mutton,
            description: 'A traditional Indian rice dish with mutton',
            price: 8,
            categories: [4, 5],
        },
        {
            menuId: 14,
            name: 'Teh c Peh',
            photo: images.teh_c_peng,
            description: 'Three Layer Teh C Peng',
            price: 2,
            categories: [2, 7],
        },
        {
            menuId: 15,
            name: 'Icy',
            photo: images.ice_kacang,
            description: 'Icy cold',
            price: 3,
            categories: [5, 8],
        },
        {
            menuId: 16,
            name: 'cakes',
            photo: images.kek_lapis,
            description: 'cakes',
            price: 20,
            categories: [8],
        },
    ];

    function updateMenu() {
        return (
            <View style={{ padding: 5, backgroundColor: '#cfdef3', justifyContent: 'center' }}>
                <Text style={styles.umHeader}>ADD / UPDATE / REMOVE DISH</Text>
                {/* #cfdef3 */}
                <View style={styles.umView}>

                    <Text style={styles.umText}>Menu Id</Text>
                    <TextInput style={styles.umInput}
                        placeholder="Menu Id"
                        placeholderTextColor="#003f5c" />
                </View>
                <View style={styles.umView}>

                    <Text style={styles.umText}>Dish Name</Text>
                    <TextInput style={styles.umInput}
                        placeholder="Dish Name"
                        placeholderTextColor="#003f5c" />


                </View>
                <View style={styles.umView}>

                    <Text style={styles.umText}>Description</Text>
                    <TextInput style={styles.umInput}
                        placeholder="Description"
                        placeholderTextColor="#003f5c" />

                </View>
                <View style={styles.umView}>

                    <Text style={styles.umText}>Dish Image</Text>
                    <TouchableOpacity>
                        <Upload name="upload" size={26} color="#B06AB3" style={{padding:10,alignItems:'center'}}/>
                    </TouchableOpacity>
                    <TextInput style={{
                        borderColor: '#B06AB3',
                        width: 150,
                        borderBottomWidth: 2, 
                        height: 40,
                        borderRadius:8
                    }}
                        placeholder="Image"
                        
                        placeholderTextColor="#003f5c" />
                    {/* <TextInput style={styles.umInput}
                        placeholder="Dish Image"
                        placeholderTextColor="#003f5c" /> */}

                </View>
                <View style={styles.umView}>

                    <Text style={styles.umText}>Category</Text>
                    {/* <TextInput style={styles.umInput}
                        placeholder="CategoryList"
                        placeholderTextColor="#003f5c" /> */}
                    <ModalDropdown style={[styles.umInput, { backgroundColor: '#cfdef3', padding: 5 }]}
                        options={['1','2','3','4','5',]}
                        defaultValue="Select"
                        textStyle={{ fontSize: 15, color: "#003f5c", paddingLeft: 5 }}
                        dropdownStyle={{width: 190, backgroundColor: '#cfdef3' }}
                        dropdownTextStyle={{ fontSize: 15, color: "#003f5c", paddingLeft: 10 }} />


                </View>
                <View style={styles.umView}>

                    <Text style={styles.umText}>Price</Text>
                    <TextInput style={styles.umInput}
                        placeholder="Price"
                        placeholderTextColor="#003f5c" />

                </View>
                <View style={styles.umView}>
                    <TouchableOpacity style={styles.umButton}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.umButton}
                    onPress={()=>navigation.navigate('AdminHome')}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>

                    <TouchableOpacity style={styles.umButton}>
                        <Text>Remove Dish</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
    function menuDetails() {

        const renderItem = ({ item }) => {
            return (
                <View style={styles.flatView}>
                    <Text style={{ width: 50, alignItems: 'center', fontSize: 14 }}>{item.menuId}</Text>
                    <Text style={{ width: 70, alignItems: 'center', fontSize: 14 }}>{item.name}</Text>
                    <Text style={{ width: 100, alignItems: 'center', fontSize: 14 }}>{item.description}</Text>
                    <Image source={item.photo} style={{ width: 70, height: 70, }} />
                    <Text style={{ width: 40, textAlign: 'right', fontSize: 14 }}>{item.categories}</Text>
                    <Text style={{ width: 40, textAlign: 'right', fontSize: 14 }}>{item.price}</Text>

                </View>
            )
        }
        return (
            <View style={{ flex: 1, height: '50%' }} >

                <FlatList
                    data={menuData}
                    keyExtractor={item => `${item.menuId}`}
                    renderItem={renderItem}
                />

            </View>
        )

    }
    return (
        <View style={styles.main}>
            <Header props="Menu Management" 
            onPress={()=>navigation.toggleDrawer()}/>
            {updateMenu()}
            <View  style={styles.mdView}>
                <Text style={{ width: 55, padding: 5, fontSize: 14, fontWeight: 'bold', }}>Dish Id </Text>
                <Text style={{ width: 70, padding: 5, fontSize: 14, fontWeight: 'bold', }}>Name </Text>
                <Text style={{ width: 100, padding: 5, fontSize: 14, fontWeight: 'bold', }}>Description</Text>
                <Text style={{ width: 70, padding: 5, fontSize: 14, fontWeight: 'bold', }}>Image</Text>
                <Text style={{ width: 70, padding: 5, fontSize: 14, fontWeight: 'bold', }}>Category</Text>
                <Text style={{ width: 60, padding: 5, fontSize: 14, fontWeight: 'bold', }}>Price</Text>
            </View>


            {menuDetails()}
        </View>
    )
}
export default MenuMgmt;
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    DashBoard: {
        fontSize: 22,
        color: '#333',
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: COLORS.primary,//'#d5adc8',
        padding: 5,
        alignItems: 'center'
    },
    hamMenu: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    umView:{ 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        padding: 8 },
    umText: {
        fontSize: 16,
        width: 200,
        height: 40
    },
    umInput: {
        borderColor: '#B06AB3',
        width: 200,
        borderWidth: 2,
        height: 40,
        borderRadius: 8
    },
    umHeader: {
        padding: 8,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        fontWeight: 'bold'
    },
    umButton: {
        backgroundColor: '#B06AB3',
        borderRadius: 10,
        height: 40,
        width: 150,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatView:{
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        margin: 5,
        padding: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1
    },
    mdView:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'pink',
        padding: 10,
        height: 55,
        borderRadius: 10,
    }

})