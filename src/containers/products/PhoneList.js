import React from 'react'
import { ToastAndroid, TouchableHighlight, Text, TextInput, FlatList, ScrollView, View, Image } from 'react-native'
import { Card } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import Colors from 'src/themes/Colors'
import Metrics from 'src/themes/Metrics'
import { Name, FlexRowCenter, WhiteSpace, Container, Price } from './common'

class Phones extends React.Component {
    state = {
        quantityById: {}
    }

    handleAddCart(product) {
        const quantity = parseInt(this.state.quantityById[product.id]) || 1
        this.props.cartAction.add(product, quantity)
        ToastAndroid.show('Successfully added item to cart!', ToastAndroid.SHORT)
    }

    increment = (product) => {
        const newQuantity = (parseInt(this.state.quantityById[product.id]) + 1 || "2").toString()
        this.setState({
            quantityById: {
                ...this.state.quantityById,
                [product.id]: newQuantity
            }
        })
    }

    decrement (product) {
        const newQuantity = (parseInt(this.state.quantityById[product.id]) - 1 || "1").toString()
        this.setState({
            quantityById: {
                ...this.state.quantityById,
                [product.id]: newQuantity
            }
        })
    }

    routeToDetail = (product) => {
        const { navigation } = this.props
        navigation.navigate('Detail', { product })
    }

    render() {
        const { products } = this.props

        return (
            <ScrollView >
                {products.map((item, i) => {
                    const quantityId = `quantity_${item.id}`

                    return (
                        <Container key={item.id}>
                            <Name>{item.name}</Name>
                            <WhiteSpace />
                            <Image style={{ marginTop: 6, marginBottom: 6, width: 150, height: 150 }} source={item.src} />
                            <WhiteSpace />

                            <FlexRowCenter>
                                <Entypo size={22} onPress={this.decrement.bind(this, item)} name="squared-minus"></Entypo>
                                <TextInput
                                    underlineColorAndroid='transparent'
                                    style={{ textAlign: 'center', fontSize: 16 }}
                                    keyboardType='numeric'
                                    // value={this.state[quantityId]}
                                    value={this.state.quantityById[item.id] || "1"}
                                    editable={false}
                                />
                                <Entypo size={22} onPress={this.increment.bind(this, item)} name="squared-plus"></Entypo>
                            </FlexRowCenter>

                            <WhiteSpace />

                            <FlexRowCenter>
                                <TouchableHighlight style={{margin: 10, padding: 15, backgroundColor: Colors.facebook}} onPress={this.handleAddCart.bind(this, item)}>
                                    <Text style={{ fontSize: 16, color: 'white' }} >Add Cart</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={{ margin: 10, padding: 15, backgroundColor: Colors.banner }} onPress={this.routeToDetail.bind(this, item)}>
                                    <Text style={{ fontSize: 16, color: 'white' }} >Details</Text>
                                </TouchableHighlight>
                            </FlexRowCenter>

                            <WhiteSpace />
                            <Price>${item.price}</Price>
                            <WhiteSpace />
                            <Text style={{ width: Metrics.screenWidth - 50, lineHeight: 30 }}>{item.info}</Text>
                        </Container>
                    )
                })}
            </ScrollView>
        )
    }
}

export default Phones