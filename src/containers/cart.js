import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { RkButton, RkModalImg } from 'react-native-ui-kitten'

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
            <View style={{ height: 50, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around' }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Name</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Image</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Price</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{color: 'red'}}>Remove</Text>
              </View>
            </View>


          {this.props.cart.map((item, i) => {
            return (
              <View style={{margin: 15 }} key={i}>
                <View style={{ height: 50, flexDirection: 'row', flex: 1, padding: 2, justifyContent: 'space-around' }}>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <RkModalImg style={{width: 75, height: 75}} source={ item.src } />
                  </View>
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>${item.price}</Text>
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


const mapState = (state) => ({
  cart: state.shopping.cart
})
const mapAction = (dispatch) => ({
  shoppingAction: bindActionCreators(shopping, dispatch)
})

export default connect(mapState, mapAction)(CartScreen)
