import React from 'react'
import PropTypes from 'prop-types';
import { Image, ScrollView, View, Text, TouchableHighlight } from 'react-native'
import autobind from 'autobind-decorator'
import { Ionicons } from '@expo/vector-icons'

import TopHeader from '../components/TopHeader'
import CardContent from '../components/CardContent'
import { inject, observer } from 'mobx-react'

@inject('shopping')
@observer
@autobind
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
    this.props.shopping.cartRemove(item)
  }
  getQuantity() {
    return 100
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


          {this.props.shopping.cartCheckout.map((item, i) => {
            return (
              <View style={{padding: 8}} key={i}>
                <View style={{ height: 90, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around' }}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{width: 75, height: 75}} source={ item.src } />
                    <Text style={{color: 'black'}}>{item.name}</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>${(item.price * this.props.shopping.quantityBasedOnId(item.id)).toFixed(2)}</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{this.props.shopping.quantityBasedOnId(item.id)}</Text>
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
              <Text></Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>{this.props.shopping.totalQuantity}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{fontSize: 16, color: 'green'}}>Checkout</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

};

export default CartScreen;
