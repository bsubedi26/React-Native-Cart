import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, ScrollView, View, Text, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { RkButton } from 'react-native-ui-kitten'

import TopHeader from '../components/TopHeader'
import CardContent from '../components/CardContent'
import * as shopping from '../reducers/shopping'

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
    this.props.shoppingAction.cartRemove(item)
  }

  render() {
    return (
      <View>
        <TopHeader />
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


          {this.props.cart.map((item, i) => {
            return (
              <View style={{padding: 2}} key={i}>
                <View style={{ height: 90, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around' }}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{width: 75, height: 75}} source={ item.src } />
                    <Text style={{color: 'black'}}>{item.name}</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>${item.price}</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{item.quantity}</Text>
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

          {/* <CardContent navigation={this.props.navigation} title="Chat!" /> */}
        </ScrollView>
      </View>
    )
  }

};


const mapState = (state) => {
 

// const totalPrice = state =>  {
//   const price = state.cart
//   .map((item, index) => {
//     const price = item.quantity * item.product.price
//     return price.toFixed(2)
//   })
//   .reduce((total, item) => {
//     total += parseInt(item)
//     return total
//   }, 0)

//   return price
// }

 return {
  cart: state.shopping.cart
 }
}
const mapAction = (dispatch) => ({
  shoppingAction: bindActionCreators(shopping, dispatch)
})

export default connect(mapState, mapAction)(CartScreen)
