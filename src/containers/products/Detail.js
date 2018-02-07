import React from 'react'
import { TouchableHighlight, StyleSheet, Text, TextInput, Image, ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Ionicons, Entypo } from '@expo/vector-icons'

import * as cartAction from 'src/store/cart/action'
import Colors from 'src/themes/Colors'
import { Name, FlexRowCenter, WhiteSpace, Container, Price } from './common'


const { width, height } = Dimensions.get('window')
class DetailScreen extends React.Component {
    state = {
        quantity: "1"
    }

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

                <Name>{product.name}</Name>
                <WhiteSpace />
                <Image style={{ marginTop: 6, marginBottom: 6, width: 150, height: 150 }} source={product.src} />
                <WhiteSpace />

                <FlexRowCenter>
                    <Entypo size={22} onPress={this._decrement} name="squared-minus"></Entypo>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={{ textAlign: 'center', fontSize: 16 }}
                        keyboardType='numeric'
                        value={this.state.quantity}
                        editable={false}
                    />
                    <Entypo size={22} onPress={this._increment} name="squared-plus"></Entypo>
                </FlexRowCenter>

                <WhiteSpace />

                <FlexRowCenter>
                    <TouchableHighlight style={{ margin: 10, padding: 15, backgroundColor: Colors.facebook }} onPress={this.handleAddCart.bind(this, product)}>
                        <Text style={{ fontSize: 16, color: 'white' }} >Add Cart</Text>
                    </TouchableHighlight>
                </FlexRowCenter>

                <WhiteSpace />
                <Price>${product.price}</Price>
                <WhiteSpace />
                <Text style={{ width: width - 50, lineHeight: 30 }}>{product.info}</Text>

            </ScrollView>
        )
    }
}


const s = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapAction = (dispatch) => ({
    cartAction: bindActionCreators(cartAction, dispatch)
})

export default connect(null, mapAction)(DetailScreen)
