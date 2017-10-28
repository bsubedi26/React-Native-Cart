import React from 'react'
import styled from 'styled-components/native';
import { Text, TextInput, FlatList, ScrollView, View, Image, Dimensions } from 'react-native'
import { Button, Card } from 'react-native-elements'
import { RkButton } from 'react-native-ui-kitten';
import { Entypo } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

class Phones extends React.Component {
    state = {
        quantity: "1"
    }
 
    handleAddCart(phone) {
        phone.quantity = parseInt(this.state.quantity)
        this.props.shoppingAction.cartAdd(phone)
    }
    handleQuantityChange(quantity) {
        this.setState({ quantity })
    }
    increment() {
        const result = parseInt(this.state.quantity) + 1
        this.setState({
            quantity: result.toString()
        })
    }

    decrement() {
        const result = parseInt(this.state.quantity) - 1
        this.setState({
            quantity: result.toString()
        })
    }

    render() {
        const { phones } = this.props
        return (
            <ScrollView >
                {phones.map((item, i) => {
                    return (
                        <Container key={item.id}>
                            <Text style={{padding: 3, backgroundColor: '#c9c0d1', width: 100, height: 25, textAlign: 'center'}}>{item.name}</Text>
                            <Image style={{marginTop: 6, marginBottom: 6, width: 150, height: 150}} source={ item.src } />

                            <Entypo size={22} onPress={this.decrement.bind(this)} name="squared-minus"></Entypo>
                            <TextInput
                                style={{width: 100, textAlign: 'center', padding: 5}}
                                keyboardType = 'numeric'
                                onChangeText={this.handleQuantityChange.bind(this)}
                                value={this.state.quantity}
                                disabled={true}
                            />
                            <Entypo size={22} onPress={this.increment.bind(this)} name="squared-plus"></Entypo>

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

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`

export default Phones