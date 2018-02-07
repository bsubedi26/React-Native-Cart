import React from 'react';
import { StackNavigator } from 'react-navigation';
import CartScreen from 'src/containers/cart';
import getFixedTopNavigation from '../_helpers/getFixedTopNavigation';

const options = {
  // headerMode: 'none'
}

const CartNavigator = StackNavigator({
  Cart: {
    screen: CartScreen,
    path: '/cart',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Cart', { navigation }),
  },

}, options);

export default CartNavigator;