import React from 'react';
import { StyleSheet, Text, TextInput, Image, ScrollView, Dimensions } from 'react-native';
import styled from 'styled-components/native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cartAction from 'store/cart/action'

import { RkButton } from 'react-native-ui-kitten'
import { Ionicons, Entypo } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

class DetailScreen extends React.Component {
    state = {
        quantity: "1"
    }

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    };

    handleAddCart = (phone) => {
        const quantity = parseInt(this.state.quantity)
        this.props.cartAction.add(phone, quantity)
    }

    _increment = () => {
        const result = parseInt(this.state.quantity) + 1
        this.setState({
            quantity: result.toString()
        })
    }

    _decrement = () => {
        const result = parseInt(this.state.quantity) - 1
        this.setState({
            quantity: result.toString()
        })
    }

    render() {
        const { navigation } = this.props
        const { product } = navigation.state.params

        return (
            <ScrollView contentContainerStyle={s.container}>
                <Text style={{padding: 3, backgroundColor: '#c9c0d1', width: 100, height: 25, textAlign: 'center'}}>{product.name}</Text>
                <Image style={{marginTop: 6, marginBottom: 6, width: 150, height: 150}} source={ product.src } />

                <Entypo size={22} onPress={this._decrement} name="squared-minus"></Entypo>
                <TextInput
                    style={{width: 100, textAlign: 'center', padding: 5}}
                    keyboardType = 'numeric'
                    value={this.state.quantity}
                    editable={false}
                />
                <Entypo size={22} onPress={this._increment} name="squared-plus"></Entypo>

                <RkButton onPress={this.handleAddCart.bind(this, product)} style={{padding: 20}}>Add Cart</RkButton>
                <Text style={{marginTop: 6, padding: 3, backgroundColor: '#c9c0d1', width: 100, height: 25, textAlign: 'center'}}>${product.price}</Text>
                <Text style={{ width: width - 50, lineHeight: 30}}>{product.info}</Text>
            </ScrollView>
        )
    }
}


const s = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapAction = (dispatch) => ({
    cartAction: bindActionCreators(cartAction, dispatch)
})

export default connect(null, mapAction)(DetailScreen)
