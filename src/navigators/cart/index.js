import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import s from '../Styles'
import CartScreen from 'src/containers/cart'

const CartNavigator = StackNavigator({
  Products: {
    screen: CartScreen,
    path: '/list',
    navigationOptions: ({ navigation }) => ({
      title: 'Cart',
      
      // headerLeft: <Ionicons style={s.leftIcon} onPress={() => navigation.navigate('DrawerOpen')} name="md-menu" size={32} color="black" />,
      headerLeft: <Ionicons style={s.leftIcon} onPress={() => alert('DrawerOpen')} name="md-menu" size={32} color="black" />,
      headerRight: <Button onPress={() => alert('? Button pressed.')} title="?" />,
      headerStyle: s.headerStyles,
    }),
  },

});

export default CartNavigator;
