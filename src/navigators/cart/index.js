import React from 'react';
import { StackNavigator } from 'react-navigation';
import CartScreen from 'src/containers/cart';
import getFixedTopNavigation from '../getFixedTopNavigation';

const CartNavigator = StackNavigator({
  Cart: {
    screen: CartScreen,
    path: '/cart',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Cart', { navigation }),
  },

});

export default CartNavigator;