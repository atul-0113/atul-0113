import React, { useState } from 'react'
import { View, Text, StyleSheet,TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../../constants'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/header'
import DateFilter from '../../components/DateFilter'
import DismissKeyboard from '../../components/Dismisskeyboard'
const Sales = ({ navigation }) => {


    const salesData = [
        {
        odate: "22/1/2021",
        orderNo: "10121",
        custName: 'Anshul ',
        amt: 250,
        payMode: 'Cash'
    },
    {
        odate: '24/1/2021',
        orderNo: "10122",
        custName: 'Anshu',
        amt: 500,
        payMode: 'Cash'
    },
    {
        odate: '25/1/2021',
        orderNo: "10123",
        custName: 'Arti',
        amt: 450,
        payMode: 'Cash'
    },
    {
        odate: '25/4/2021',
        orderNo: "10124",
        custName: 'rohan',
        amt: 453,
        payMode: 'online'
    },
    {
        odate: '27/1/2021',
        orderNo: "10125",
        custName: 'Meet',
        amt: 745,
        payMode: 'Cash'
    },
    {
        odate: '28/1/2021',
        orderNo: "10126",
        custName: 'Aram',
        amt: 350,
        payMode: 'Cash'
    },
    {
        odate: '23/3/2021',
        orderNo: "10127",
        custName: 'ramu',
        amt: 480,
        payMode: 'Cash'
    },
    {
        odate: '22/2/2021',
        orderNo: "10128",
        custName: 'Alu',
        amt: 560,
        payMode: 'Online'
    },
    {
        odate: '2/4/2021',
        orderNo: "10129",
        custName: 'lotaji',
        amt: 369,
        payMode: 'Cash'
    },
    {
        odate: '28/1/2021',
        orderNo: "10130",
        custName: 'Anshul',
        amt: 150,
        payMode: 'Cash'
    },
    ];
    const [filteredData, setFilteredData] = React.useState(salesData);
    const [search, setSearch] = React.useState('');

    function searchByName(text) {
        if (text) {
            let newData = filteredData.filter((item) => {
                let itemData = item.custName ?
                    item.custName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredData(newData);
            setSearch(text)
        } else {
            setSearch('')
            setFilteredData(salesData)
            
        }
    }
    function saleReportByDate() {
        return (
            <View style={{ flex: 1, 
                    backgroundColor: '#f2f2', 
                    alignItems: 'center' }}>
                <View style={{
                    alignItems:'center',
                    backgroundColor: 'pink',
                    padding: 10,
                    marginBottom:5,
                    width: '100%',
                    borderWidth: 1,
                    borderColor: 'pink',
                    borderRadius: 10
                }}>
                    <Text style={{ fontSize: 20 }}>Sales Report By Date</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>
                    <Text style={styles.umText}>Start Date</Text>
                    <TextInput style={styles.umInput}
                        placeholder="DD-MM-YYYY"
                        placeholderTextColor="#003f5c" />
                </View>
                <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>
                    <Text style={styles.umText}>End Date</Text>
                    <TextInput style={styles.umInput}
                        placeholder="DD-MM-YYYY"
                        placeholderTextColor="#003f5c" />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between', width: '80%'
                }}>
                    <TouchableOpacity style={styles.umButton}
                        onPress={() => console.warn("cannot Edit")}>
                        <Text>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.umButton}
                        onPress={()=>navigation.navigate('AdminHome')}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.umButton}
                    onPress={() => { console.warn("cannot Edit") }}>
                    <Text>Download</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
    function saleSummary() {

        const renderItem = ({ item }) => {
            return (
                <View style={styles.container}>

                    <Text style={{ width: 75, textAlign: 'left', fontSize: 15 }}>{item.odate}</Text>
                    <Text style={{ width: 100, textAlign: 'center', fontSize: 15 }}>{item.custName}</Text>
                    <Text style={{ width: 70, textAlign: 'center', fontSize: 15 }}>{item.orderNo}</Text>
                    <Text style={{ width: 80, textAlign: 'center', fontSize: 15 }}>{item.amt}</Text>
                    <Text style={{ width: 80, textAlign: 'center', fontSize: 15 }}>{item.payMode}</Text>
                </View>

            )
        }
        return (
            <View style={{height:'50%', padding: 5, }} >
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'pink',
                    justifyContent: 'space-evenly',
                    padding: 10,
                    borderWidth: 1,
                }}>
                    <Text style={{ padding: 10, width: 70, textAlign: 'center', fontSize: 18, fontWeight: 'bold', }}>Date </Text>
                    <DateFilter />
                    <Text style={{ width: 100, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Customer Name</Text>
                    <Text style={{ width: 70, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Order Number </Text>
                    <Text style={{ width: 80, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Total Ammount</Text>
                    <Text style={{ width: 80, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Payment Mode</Text>

                </View>
                <FlatList
                    data={filteredData}
                    keyExtractor={item => `${item.orderNo}`}
                    renderItem={renderItem}
                />
                
            </View>
        )
    }
    return (
        <DismissKeyboard>
        <View style={styles.main}>
            <Header props="Sales" 
            onPress={()=>navigation.toggleDrawer()}/>
            <SearchBar placeholder=" Customer Name" value={search}
                onChangeText={(text) => searchByName(text)} />
            {saleSummary()}
            {saleReportByDate()}
        </View>
        </DismissKeyboard>
    )
}
export default Sales;
const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        flex: 1,
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
    container: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#f2f2',
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 15
    },
    HeadStyle: {
        height: 50,
        alignContent: "center",
        backgroundColor: '#ffe0f0'
    },
    TableText: {
        margin: 10
    },
    umText: {
        fontSize: 16,
        width: 200,
        height: 40
    },
    umInput: {
        borderColor: '#B06AB3',
        width: 150,
        borderWidth: 2,
        height: 40,
        borderRadius: 8
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


})