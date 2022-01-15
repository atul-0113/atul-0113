import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { COLORS, images } from '../../constants'

import { AuthContext } from '../context/AuthContext';
import Icons from '../../libs/icons';
import InputWithText from '../../components/InputWithText';
import DismissKeyboard from '../../components/Dismisskeyboard';
const Users =
{
    name: 'Atul',
    email: 'ats@ddd.com',
    contact: '8978252250',
    address: '1/5- Moti Patel near moti , Chennai',
    dob: '11-1-2015'
}



const User = ({ navigation }) => {

    const { signOut } = React.useContext(AuthContext)

    return (
        <DismissKeyboard>
            <View style={styles.main}>

                <Image source={images.avatar_2} style={styles.photo} />
                <TouchableOpacity>
                    <Icons type={'MaterialCommunityIcons'} name={'account-edit'}
                        style={[styles.photoEdit, { color: '#fff', fontSize: 40 }]} />
                </TouchableOpacity>
                <View style={styles.info}>
                    
                    <View style={{
                        width: '100%',
                        height: 430,
                        borderRadius: 20,
                        
                        borderColor: '#fff',
                        backgroundColor: COLORS.primary
                    }}>
                        <InputWithText text={'Name'} placeholder={Users.name} type={"AntDesign"} name={"user"} />
                        <InputWithText text={'Email'} placeholder={Users.email} type={"MaterialCommunityIcons"} name={"email-edit"} />
                        <InputWithText text={'Date Of Birth'} placeholder={Users.dob} type={"Fontisto"} name={"date"} />
                        <InputWithText text={'Address'} placeholder={Users.address} type={"Entypo"} name={"address"} />
                        <InputWithText text={'Contact'} placeholder={Users.contact} type={"FontAwesome"} name={"mobile-phone"} />

                        <TouchableOpacity style={styles.btn}>
                            <Text style={{ color: '#003f5c', fontSize: 20, fontWeight: "400" }}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => { signOut() }}>
                            <Text style={{ color: '#003f5c', fontSize: 20, fontWeight: "400" }}>Sign Out </Text>
                        </TouchableOpacity>
                    </View>

                </View>



            </View>
        </DismissKeyboard>
    )
}
const styles = StyleSheet.create({

    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#fff",//#919911

    },
    photo: {
        width: 160,
        height: 160,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 80,
        borderColor: COLORS.primary,
        borderWidth: 1,
        resizeMode: "cover",
        borderColor: COLORS.lightGray
    },
    info: {

        flexWrap: 'wrap',
        display: 'flex',
        textAlign: 'center',
        borderColor: COLORS.primary,
        width: "100%",

    },
    btn: {
        marginTop: 10,
        marginLeft:90,
        width: 220,
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: COLORS.primary,
        backgroundColor: '#fff',

    },
    photoEdit: {
        position: 'absolute',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: -40,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff'
    }

}
)
export default User;