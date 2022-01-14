import React from 'react'
import { Image ,StyleSheet ,TextInput, View } from 'react-native'
import PropTypes from 'prop-types'
import {COLORS , icons} from '../constants'
const SearchBar = ({placeholder,value,onChangeText}) => {
    return (
        <View style={styles.search}>
            <Image source={icons.search}
                style={{
                    width: 20,
                    height: 20,
                    resizeMode: 'contain',
                    paddingHorizontal: 20
                }} />
            <TextInput style={{ fontSize: 20 }}
                placeholder={placeholder}
                placeholderTextColor={COLORS.primary}
                value={value}
                onChangeText={onChangeText} />
        </View>)
}

export default SearchBar;

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        width: 400,
        height: 45,
        marginBottom: 10,
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: "#fff",//'#FFE47A'
        borderWidth: 1,
        borderBottomColor: COLORS.primary,
        borderRadius: 10,
        shadowOpacity: 1.15,
        marginTop: 10,
    },

})