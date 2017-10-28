import React from 'react'
import styled from 'styled-components/native';
import autobind from 'autobind-decorator'
import { Text, TextInput, FlatList, ScrollView, View, Image, Dimensions } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { RkButton } from 'react-native-ui-kitten'
import { Entypo } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

@autobind
class Phones extends React.Component {
    constructor() {
        super()
        this.state = {
            quantity: "1"
        }
    }
 
    handleAddCart(phone) {
        const quantity = parseInt(this.state.quantity)
        this.props.shopping.cartAdd(phone, quantity)
    }

    _increment() {
        const result = parseInt(this.state.quantity) + 1
        this.setState({
            quantity: result.toString()
        })
    }

    _decrement() {
        const result = parseInt(this.state.quantity) - 1
        this.setState({
            quantity: result.toString()
        })
    }

    render() {
        const { shopping } = this.props
        return (
            <ScrollView >
                {shopping.phones.map((item, i) => {
                    return (
                        <Container key={item.id}>
                            <Text style={{padding: 3, backgroundColor: '#c9c0d1', width: 100, height: 25, textAlign: 'center'}}>{item.name}</Text>
                            <Image style={{marginTop: 6, marginBottom: 6, width: 150, height: 150}} source={ item.src } />

                            <Entypo size={22} onPress={this._decrement} name="squared-minus"></Entypo>
                            <TextInput
                                style={{width: 100, textAlign: 'center', padding: 5}}
                                keyboardType = 'numeric'
                                value={this.state.quantity}
                                editable={false}
                            />
                            <Entypo size={22} onPress={this._increment} name="squared-plus"></Entypo>

                            <RkButton onPress={this.handleAddCart.bind(this, item)} style={{padding: 20}}>Add Cart</RkButton>
                            <RkButton style={{marginTop: 8}} rkType="danger">Details</RkButton>
                            <Text style={{marginTop: 6, padding: 3, backgroundColor: '#c9c0d1', width: 100, height: 25, textAlign: 'center'}}>${item.price}</Text>
                            <Text style={{ width: width - 50, lineHeight: 30}}>{item.info}</Text>
                        </Container>
                    )
                })}
            </ScrollView>

            // <FlatList
            // contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
            //     data={phones}
            //     renderItem={this.renderItemMap}
            //     keyExtractor={(item) => item.id}
            // />
        )
    }
}


const Large = styled.Text`
    color: #f3f3f3;
    backgroundColor: cornflowerblue;
    font-size: 120px;
    font-family: 'Baskerville';
    font-style: italic;
    line-height: 144px;
    text-align: center;
`

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`

export default Phones