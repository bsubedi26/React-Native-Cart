import React from 'react'
import { StyleSheet, Text, FlatList, ScrollView, View, Image, Dimensions } from 'react-native'
import { Button, Badge, Card } from 'react-native-elements'
import { RkButton, RkModalImg } from 'react-native-ui-kitten';

const { width, height } = Dimensions.get('window')

class Phones extends React.Component {

    handleAddCart(phone) {
        this.props.addToCart(phone)
    }

    render() {
        const { phones } = this.props
        return (
            <ScrollView >
                {phones.map((item, i) => {
                    return (
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} key={item.id}>
                            <Text style={{padding: 3, backgroundColor: '#c9c0d1', width: 100, height: 25, textAlign: 'center'}}>{item.name}</Text>
                            <RkModalImg style={{marginTop: 6, marginBottom: 6, width: 150, height: 150}} source={ item.src } />
                            <RkButton onPress={this.handleAddCart.bind(this, item)} style={{padding: 20}}>Add Cart</RkButton>
                            <RkButton style={{marginTop: 8}} rkType="danger">Details</RkButton>
                            <Text style={{marginTop: 6, padding: 3, backgroundColor: '#c9c0d1', width: 100, height: 25, textAlign: 'center'}}>${item.price}</Text>
                            <Text style={{ width: width - 50, lineHeight: 30}}>{item.info}</Text>
                        </View>
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

const s = StyleSheet.create({
    paddingAll: {
        padding: 20
    }
})
export default Phones