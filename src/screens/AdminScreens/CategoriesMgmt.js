import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { COLORS, images } from '../../constants'

import Upload from 'react-native-vector-icons/dist/Entypo'
import Header from '../../components/header'
const CategoriesMgmt = ({ navigation }) => {
   
    function categoriesDetails() {
        const DATA = [
            {
                url: images.honey_mustard_chicken_burger,
                name: 'Burger',
                id: 1,
            },
            {
                url: images.pizza,
                name: 'Pizza',
                id: 2,
            },
            {
                url: images.tomato_pasta,
                name: 'Pasta',
                id: 3,
            },
            {
                url: images.sushi,
                name: 'Sushi',
                id: 4,
            },
            {
                url: images.noodle_shop,
                name: 'Noodles',
                id: 5,
            },
            {
                url: images.fries_restaurant,
                name: 'Fries',
                id: 6,
            },
            {
                url: images.crispy_chicken_burger,
                name: 'Chicken Burger',
                id: 7,
            },
            {
                url: images.chicago_hot_dog,
                name: 'Hot Dog',
                id: 8,
            },
        ];

        const renderItem = ({ item }) => {

            return (

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'lightgray',
                    margin: 5,
                    padding: 20,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 1,
                }}>
                    <Text style={{ width: 70, textAlign: 'left', fontSize: 18 }}>{item.id}</Text>
                    <Text style={{ width: 70, alignItems: 'center', fontSize: 18 }}>{item.name}</Text>
                    <Image source={item.url} style={{ height: 50, width: 50, alignItems: 'center', }} />

                </View>
            )
        }
        return (
            <View style={{ height: '50%',padding:10 }}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'pink',
                    justifyContent: 'space-between',
                    padding: 10,
                    borderRadius:10
                }}>
                    <Text style={{ padding: 5, fontSize: 18, fontWeight: 'bold', }}>Category Id </Text>
                    <Text style={{ padding: 5, fontSize: 18, fontWeight: 'bold', }}>Category Name </Text>
                    <Text style={{ padding: 5, fontSize: 18, fontWeight: 'bold', }}>Image</Text>

                </View>
                <FlatList
                    data={DATA}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }
    function updateCategory() {
        return (
            <View style={{ padding: 5, backgroundColor: '#cfdef3',justifyContent:'center' }}>
                <Text style={{
                    padding: 8, textAlign: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'pink', fontWeight: 'bold'
                }}>ADD / UPDATE / REMOVE CATEGORY</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',padding:10 }}>

                    <Text style={{ fontSize:18,width: 200, height: 40 }}>Category Id</Text>
                    <TextInput style={{
                        borderColor: '#B06AB3',
                        width: 200,
                        borderWidth: 2,
                        height: 40,
                        borderRadius:8
                    }}
                        placeholder="Category Id"
                        placeholderTextColor="#003f5c" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',padding:8 }}>

                    <Text style={{fontSize:18, width: 200, height: 40 }}>Category Name</Text>
                    <TextInput style={{
                        borderColor: '#B06AB3',
                        width: 200,
                        borderWidth: 2,
                        height: 40,
                        borderRadius:8
                    }}
                        placeholder="Category Name"
                        placeholderTextColor="#003f5c" />


                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',padding:10 }}>

                    <Text style={{fontSize:18, width: 200, height: 40 }}>Image</Text>
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


                </View>
                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#B06AB3',
                        borderRadius: 10,
                        height: 40,
                        width: 150,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                        <Text>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: '#B06AB3',
                        borderRadius: 10,
                        height: 40,
                        width: 150,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}  onPress={()=>navigation.navigate('AdminHome')}
                    >
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center' }}>

                    <TouchableOpacity style={{
                        backgroundColor: '#B06AB3',
                        borderRadius: 10,
                        height: 40,
                        width: 150,
                        marginTop: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        

                    }}
                    >
                        <Text>Remove Category</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
    return (
        <View style={styles.main}>
            <Header props="Categories Management" 
            onPress={()=>navigation.toggleDrawer()}/>
            {updateCategory()}
            {categoriesDetails()}
        </View>
    )
}
export default CategoriesMgmt;
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor:'#cfdef3'
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


})