import React from 'react'
import { TouchableHighlight, Text, TextInput, FlatList, ScrollView, View, Image, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons'
import Colors from 'src/themes/Colors'
import { Name, FlexRowCenter, WhiteSpace, Container, Price } from './common'

const { width, height } = Dimensions.get('window')

class Phones extends React.Component {

    componentWillMount() {
        this.props.products.forEach((item, idx) => {
            const quantityId = `quantity_${item.id}`
            this.setState({
                [quantityId]: "1"
            })
        })
    }

    handleAddCart(product) {
        const quantityId = `quantity_${product.id}`
        const quantity = parseInt(this.state[quantityId])
        this.props.cartAction.add(product, quantity)
    }

    increment = (product) => {
        const quantityId = `quantity_${product.id}`
        
        this.setState({
            [quantityId]: (parseInt(this.state[quantityId]) + 1).toString()
        })
    }

    decrement (product) {
        const quantityId = `quantity_${product.id}`
        
        if (this.state[quantityId] == 1) return
        this.setState({
            [quantityId]: (parseInt(this.state[quantityId]) - 1).toString()
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
                                    value={this.state[quantityId]}
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
                            <Text style={{ width: width - 50, lineHeight: 30 }}>{item.info}</Text>
                        </Container>
                    )
                })}
            </ScrollView>
        )
    }
}

export default Phones