import React from 'react'
import { View, Text, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants'
import Header from '../../components/header'
import Icons from '../../libs/icons';

const AdminHome = ({ navigation}) => {
    
    function GraphCard() {
        return (
            <View style={{
                marginBottom: 10,
                height: 250,
                backgroundColor: '#fff'
            }}>
                {/* dashBoardContent */}
            </View>
        )
    }
    function RenderItem(item , index) {
        return (
            <TouchableOpacity style={styles.dashboardIcon}
                onPress={() => navigation.navigate(item.nav)}>
                <Icons type={item.type} name={item.name} style={{ fontSize: 50, color: item.colors }} />
                <Text style={styles.textStyleDash}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    const ADMINHOME_CARD = [
        {
            title: 'User Management',
            nav: 'User Management',
            name: 'users',
            type: 'FontAwesome',
            colors: 'green'
        },
        {
            title: 'Categories Management',
            nav: 'Categories Management',
            name: 'coffee',
            type: 'Feather',
            colors: 'brown'
        },
        {
            title: 'Menu Management',
            nav: 'Menu Management',
            name: 'open-book',
            type: 'Entypo',
            colors: "#996600"
        },
        {
            title: 'Reports and Statistics',
            nav: 'Reports and Statistics',
            name: 'file-chart',
            type: 'MaterialCommunityIcons',
            colors: "#332"
        },
        {
            title: 'Sales',
            nav: 'Sales',
            name: 'bar-chart',
            type: 'Ionicons',
            colors: 'coral'
        },
        {
            title: 'Static Pages',
            nav: 'Static Pages',
            name: 'list-alt',
            type: 'FontAwesome',
            colors: "#ff5050"
        },
        {
            title: 'Notifications',
            nav: 'Notifications',
            name: 'bell',
            type: 'FontAwesome',
            colors: "#ff5"
        },
    ]
    function dashBoard() {
        return (
            <FlatList
                numColumns={2}
                data={ADMINHOME_CARD}
                style={styles.container}
                ListHeaderComponent={GraphCard}
                keyExtractor={(item ,index) => item.title}
                renderItem={({ item, index }) => RenderItem(item, index)}
            />
        )
    }
    return (
        <View style={styles.main}>
            <Header text="Dashboard" 
            onPress={()=>navigation.toggleDrawer()}/>
            {dashBoard()}
        </View>
    )
}

export default AdminHome;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
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
    textStyleDash: {
        fontSize: 20,
        textAlign: "center"
    },
    dashboardIcon: {
        width: 150,
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        alignItems: 'center',
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center'
    }
});