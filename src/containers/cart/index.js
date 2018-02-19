import React from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, View, Text, TextInput, TouchableHighlight, ToastAndroid } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { remove, increaseQuantity, decreaseQuantity } from 'src/store/cart/action'
import { totalCost, getTotalPerItem, totalItemsInCart } from 'src/store/cart/selectors'
import Form from 'src/components/Form'

class CartScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  handleCheckout = () => {
    alert('Checkout coming soon!')
  }

  removeFromCart(item) {
    const { dispatch } = this.props
    dispatch(remove(item))
    ToastAndroid.show('Successfully removed item from cart!', ToastAndroid.SHORT)
  }

  increment(item) {
    const { dispatch } = this.props
    dispatch(increaseQuantity(item))
  }

  decrement(item) {
    const { dispatch } = this.props
    dispatch(decreaseQuantity(item))
  }

  render() {
    return (
      <View>
        <ScrollView>
            <View style={{ height: 60, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Name</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Total Price</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Quantity</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{color: 'red'}}>Remove</Text>
              </View>
            </View>


          {this.props.getTotalPerItem.map((item, i) => {
            return (
              <View style={{padding: 8}} key={i}>
                <View style={{ height: 90, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around' }}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{width: 75, height: 75}} source={ item.src } />
                    <Text style={{color: 'black'}}>{ item.name }</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>${ item.totalPrice }</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Entypo size={22} onPress={this.decrement.bind(this, item)} name="squared-minus"></Entypo>
                    <TextInput
                      underlineColorAndroid='transparent'
                      style={{ textAlign: 'center', fontSize: 16 }}
                      keyboardType='numeric'
                      value={item.quantity.toString()}
                      editable={false}
                    />
                    <Entypo size={22} onPress={this.increment.bind(this, item)} name="squared-plus"></Entypo>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableHighlight onPress={this.removeFromCart.bind(this, item)}>
                      <Ionicons color="red" size={40} name="ios-remove-circle-outline" />
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            )
          })}

          <View style={{ paddingTop: 20, paddingBottom: 80, height: 60, flexDirection: 'row', flex: 1, justifyContent: 'space-around' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text></Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>${this.props.totalCost}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>{this.props.totalItemsInCart}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Entypo onPress={this.handleCheckout} size={28} name='paper-plane' />
            </View>
          </View>

        </ScrollView>
      </View>
    )
  }

};



const mapState = (state) => {
 return {
  cart: state.cart,
  totalCost: totalCost(state),
  getTotalPerItem: getTotalPerItem(state),
  totalItemsInCart: totalItemsInCart(state)
 }
}

export default connect(mapState)(CartScreen)

