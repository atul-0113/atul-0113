import React from 'react'
import { FlatList } from 'react-native';
import { TouchableOpacity, Text, StyleSheet, View, TextInput } from 'react-native'
import Header from '../../components/header'
import Icons from '../../libs/icons'
const ReportsUser = ({navigation}) => {

    var date= new Date().getDate();
    var month= new Date().getMonth();
    var year = new Date().getFullYear();
    const usercount = 10;
    // var formattedDate = format(date, "MMMM do, yyyy ");
    const users=[
        {
            regdate:"22/2/2021",
            uid:2,
            userName:"Ats",
            add:'Agra',
            contact: "1114445555",
            status: "Active"            
        },
        {
            regdate:"22/2/2021",
            uid:3,
            userName:"Ats",
            add:'Agra',
            contact: "1114445555",
            status: "Active"            
        },
        {
            regdate:"22/2/2021",
            uid:4,
            userName:"Ats",
            add:'Agra',
            contact: "1114445555",
            status: "Active"            
        },
        {
            regdate:"22/2/2021",
            uid:5,
            userName:"Ats",
            add:'Agra',
            contact: "1114445555",
            status: "Active"            
        },
        {
            regdate:"22/2/2021",
            uid:6,
            userName:"Ats",
            add:'Agra',
            contact: "1114445555",
            status: "Active"            
        },
        {
            regdate:"22/2/2021",
            uid:7,
            userName:"Ats",
            add:'Agra',
            contact: "1114445555",
            status: "Active"            
        },
        {
            regdate:"22/2/2021",
            uid:8,
            userName:"Ats",
            add:'Agra',
            contact: "1114445555",
            status: "Active"            
        },
]
    const registeredUser = () => {
        return (
            <View style={styles.container}>
                <Icons type={'AntDesign'} name={'arrowleft'} style={{fontSize:23,color:'#fff',paddingBottom:10}} 
                onPress={()=>navigation.navigate("Reports and Statistics")} />
                <Text style={{ fontSize: 20, color: '#fff' }}>User Registered on {date}/{month}/{year} : {usercount}</Text>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={{ width: 150, fontSize: 20, color: '#fff' }}>
                            Start Date
                        </Text>
                        <TextInput style={{ backgroundColor: '#fff', height: 40, marginLeft: 20, width: 150, borderColor: '#fff', borderWidth: 1 }} />
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <Text style={{ width: 150, fontSize: 20, color: '#fff' }}> End Date</Text>
                        <TextInput style={{ backgroundColor: '#fff', height: 40, marginLeft: 20, width: 150, borderColor: '#fff', borderWidth: 1 }} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                            style={{ flex: 1, width: 120, padding: 10, margin: 10, backgroundColor: 'purple', width: 200, alignItems: 'center' }}
                        >
                            <Text style={{ textAlign: 'center', width: 150, fontSize: 20, color: '#fff' }}>Download Reports</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, width: 120, padding: 20, margin: 10, backgroundColor: 'purple', width: 200, alignItems: 'center' }}
                            onPress={() => console.warn("ok bhai")}>
                            <Text style={{ textAlign : 'center', width: 150, fontSize: 20, color: '#fff' }}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
    function searchResult(){
        const renderItem=({item})=>{
            return(
                <View style={styles.containerFlat}>
             
                    <Text style={{ width: 75, textAlign: 'left', fontSize: 15 }}>
                        {item.regdate}</Text> 
                    <Text style={{ width: 100, textAlign: 'center', fontSize: 15 }}>
                        {item.userName}</Text>
                    <Text style={{ width: 70, textAlign: 'center', fontSize: 15 }}>
                        {item.uid}</Text>
                    <Text style={{ width: 80, textAlign: 'center', fontSize: 15 }}>
                        {item.contact}</Text>
                    <Text style={{ width: 80, textAlign: 'center', fontSize: 15 }}>
                        {item.status}</Text>
                    <Text style={{ width: 80, textAlign: 'center', fontSize: 15 }}>
                        {item.add}</Text>
                </View>
            )
        }
        
        return(
            <View style={{flex:1,height:'50%',padding:5}}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'purple',
                justifyContent: 'space-evenly',
                padding: 10,
                borderWidth: 1,
                marginBottom:10
                
            }}>
                <Text style={{ width: 80, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Registered on</Text>
                <Text style={{ width: 70, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>User Name</Text>
                <Text style={{ width: 50, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>User Id</Text>
                <Text style={{ width: 80, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Contact</Text>
                <Text style={{ width: 80, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Status</Text>
                <Text style={{ width: 80, textAlign: 'center', fontSize: 16, fontWeight: 'bold', }}>Address</Text>
            </View>
            <FlatList
                    data={users}
                    keyExtractor={item => `${item.uid}`}
                    renderItem={renderItem}
                />
            </View>
        )
    }
    return (
        <View style={styles.main} >
            <Header props="Users Report" 
            onPress={()=>navigation.toggleDrawer()}/>
            {registeredUser()}
            {searchResult()}
        </View>
    )
}
export default ReportsUser;
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#3b5988',
    },
    container: {
        margin: 10,
        padding: 5,
        paddingBottom: 5,
    },
    containerFlat: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-evenly',
        backgroundColor: '#f2f2',
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 15
    },
})