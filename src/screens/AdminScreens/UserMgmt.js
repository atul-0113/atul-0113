import React ,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import { COLORS} from '../../constants'
import ModalDropdown from 'react-native-modal-dropdown';
import Header from '../../components/header'
import SearchBar from '../../components/SearchBar';
import DismissKeyboard from '../../components/Dismisskeyboard'

const UserMgmt = ({ navigation }) => {

    const [user, setUser] = React.useState('Name')
    const [ustatus, setUStatus] = React.useState('')
    const [search, setSearch] = React.useState('')
    const [userListData, setUserListData] = useState(userListing)
    

    const userListing= [
        {
            userid: '101',
            userName: 'Atul',
            address: 'Agra',
            status: 'Active'
        },
        {
            userid: '102',
            userName: 'Rohan',
            address: 'Delhi',
            status: 'Active'
        },
        {
            userid: '103',
            userName: 'Shivam',
            address: 'Gurgaon',
            status: 'Active'
        },
        {
            userid: '104',
            userName: 'sabbu',
            address: 'Loha Mandi',
            status: 'Active'
        },
        {
            userid: '105',
            userName: 'Jagmeet',
            address: 'Sikandra',
            status: 'Active'
        },
        {
            userid: '106',
            userName: 'Anand',
            address: 'Baluganj',
            status: 'Active'
        },
        {
            userid: '113',
            userName: 'Oshi',
            address: 'Sadar',
            status: 'Active'
        },
        {
            userid: '107',
            userName: 'Shikhar',
            address: 'Partapura',
            status: 'Active'
        },
        {
            userid: '108',
            userName: 'Ramu',
            address: 'Merut',
            status: 'Active'
        },
        {
            userid: '109',
            userName: 'Akku',
            address: 'Rajpur',
            status: 'Active'
        },
        {
            userid: '110',
            userName: 'Ghanu',
            address: 'agra',
            status: 'Active'
        },
        {
            userid: '111',
            userName: 'Abhishek',
            address: 'Agra',
            status: 'Active'
        },
        {
            userid: '112',
            userName: 'Mohit',
            address: 'Moti Nagar',
            status: 'Active'
        },
        {
            userid: '114',
            userName: 'Manav',
            address: 'Madhu Nagar',
            status: 'Active'
        },
    ];  
    
    function searchUser({text}){
            if(text){
                let newData =userListData.filter((item)=>{
                let itemData = item.userName ? 
                    item.userName.toUpperCase() 
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) >-1;
                });

                setUserListData(newData);
                setSearch(text)
            } else {
                setUserListData(userListing);
                setSearch('')
            }
        }
    function updateUser() {

        return (
            <View style={{ padding: 5, backgroundColor: '#cfdef3', justifyContent: 'center' }}>
                <Text style={styles.umHeader}>SUSPEND / De-Activate USER</Text>
                {/* #cfdef3 */}
                <View style={styles.umView}>

                    <Text style={styles.umText}>User Name</Text>
                    <Text style={[styles.umInput,
                    {
                        color: "#003f5c", paddingTop: 10,
                        paddingLeft: 10, justifyContent: 'center'
                    }]}>user</Text>

                </View>
                <View style={styles.umView}>

                    <Text style={styles.umText}>Status</Text>
                   
                    <ModalDropdown style={[styles.umInput, { backgroundColor: '#cfdef3', padding: 5 }]}
                        options={['De-Active']}
                        defaultValue="ustatus"
                        
                        textStyle={{ fontSize: 15, color: "#003f5c", paddingLeft: 5 }}
                        dropdownStyle={{ height: 80, width: 180, backgroundColor: '#cfdef3' }}
                        dropdownTextStyle={{ fontSize: 15, color: "#003f5c", paddingLeft: 10 }} />

                </View>
                <View style={styles.umView}>
                    <TouchableOpacity style={styles.umButton}
                        onpress={() =>{console.warn("cannot Edit")}}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.umButton}
                        onPress={() => navigation.navigate('AdminHome')}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center' }}>

                    <TouchableOpacity style={styles.umButton}>
                        <Text>Suspend User</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
    // const onSelectUser=(item)=> {
    //     let status=item.status
    //     let user = item.userName
        
    //     setUStatus(status)
    //     setUser(user)
        
        
    // }
    function userDetails() {

        const renderItem = ({ item }) => {       
            return (

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    backgroundColor: 'lightgray',
                    margin: 5,
                    padding: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 1
                }}
                    // onPress={() =>{onSelectUser(item)}} >
                    >
                    <Text style={{ width: 70, textAlign: 'left', fontSize: 14 }}>{item.userid}</Text>
                    <Text style={{ width: 70, alignItems: 'center', fontSize: 14 }}>{item.userName}</Text>
                    <Text style={{ width: 70, alignItems: 'center', fontSize: 14 }}>{item.address}</Text>
                    <Text style={{ width: 50, textAlign: 'right', fontSize: 14 }}>{item.status}</Text>

                </TouchableOpacity>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={userListData}
                    keyExtractor={item => `${item.userid}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }
    return (
        <DismissKeyboard>
        <View style={styles.main}>
            <Header props="User Management" 
            onPress={()=>navigation.toggleDrawer()}/>
            {/* {searchBar()} */}
            <SearchBar  
             placeholder='Enter Name' value={search} 
             onChangeText={(text)=>{searchUser(text)}}/>
             <View style={styles.searchBar}>
                    <Text style={styles.umSText}>UserId </Text>
                    <Text style={{ padding: 5, fontSize: 16, fontWeight: 'bold', }}>User Name </Text>
                    <Text style={{ padding: 5, fontSize: 16, fontWeight: 'bold', }}>Address</Text>
                    <Text style={{ padding: 5, fontSize: 16, fontWeight: 'bold', }}>Status</Text>

                </View>
            {userDetails()}
            {updateUser()}
        </View>
        </DismissKeyboard>
    )
}
export default UserMgmt;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 10
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
    umView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8
    },
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
    // {searchDish()}
    search: {
        flexDirection: 'row',
        width: 400,
        height: 45,
        marginBottom: 10,
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: COLORS.transparent,//'#FFE47A'
        borderWidth: 1,
        borderBottomColor: COLORS.primary,
        borderRadius: 10,
        shadowOpacity: 1.15,
        marginTop: 10,
    },
    searchBar:{
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: 'space-between',
        padding: 10
    },
    umSText:{ 
        padding: 5, 
        fontSize: 16, 
        fontWeight: 'bold', }


})