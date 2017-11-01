import React from 'react'
import PropTypes from 'prop-types'
import { Image, ScrollView, View, Text, TouchableHighlight } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cartAction from 'store/cart/action'
import { totalCost, getTotalPerItem, totalItemsInCart } from 'store/cart/selectors'
import Form from 'components/Form'
import { Button } from 'nachos-ui'

class CartScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-cart' : 'ios-cart-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  removeFromCart(item) {
    this.props.cartAction.remove(item)
  }

  handleCheckout = () => {
    alert('Checkout coming soon!')
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
                    <Text>${ item.price }</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{ item.quantity }</Text>
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

          <View style={{ paddingBottom: 80, height: 60, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around' }}>
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
        <Button>Nachos</Button>
        
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

const mapAction = (dispatch) => ({
  cartAction: bindActionCreators(cartAction, dispatch)
})

export default connect(mapState, mapAction)(CartScreen)

