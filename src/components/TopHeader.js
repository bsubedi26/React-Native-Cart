import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

class TopHeader extends React.Component {
    render() {
        return (
            <View style={{height: 70, marginBottom: 20}}>
                <View style={s.topHeader}>
                    <Ionicons name="md-menu" size={32} color="white" />
                    <Text>Cart: {this.props.cart.length}</Text>
                    <Ionicons name="md-aperture" size={32} color="black" />
                </View>
            </View>
        )
    }
}



const s = StyleSheet.create({
    topHeader: {
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
        marginTop: 20,
        // width: '100%',
        // position: 'relative
        
    }
})

const mapState = (state) => ({
    cart: state.shopping.cart
})
export default connect(mapState)(TopHeader);
