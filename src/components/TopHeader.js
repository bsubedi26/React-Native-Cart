import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function TopHeader() {
    return (
        <View style={s.container}>
            <Ionicons name="md-menu" size={32} color="white" />
            <Text>center</Text>
            <Ionicons name="md-aperture" size={32} color="black" />
        </View>
    )
}



const s = StyleSheet.create({
    container: {
        zIndex: 1,
        height: 50,
        backgroundColor: '#A0A0A0',

        shadowColor: 'grey',
        shadowRadius: 20,
        shadowOpacity: 1,

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginTop: 20
        
    }
})

export default TopHeader;
