import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import s from '../Styles'
import ProductMainScreen from 'src/containers/products'
import ProductDetailScreen from 'src/containers/products/Detail'

const ProductScreen = StackNavigator({
  Products: {
    screen: ProductMainScreen,
    path: '/products',
    navigationOptions: ({ navigation }) => ({
      title: 'Products',
      
      // headerLeft: <Ionicons style={s.leftIcon} onPress={() => navigation.navigate('DrawerOpen')} name="md-menu" size={32} color="black" />,
      headerLeft: <Ionicons style={s.leftIcon} onPress={() => alert('DrawerOpen')} name="md-menu" size={32} color="black" />,
      headerRight: <Button onPress={() => alert('? Button pressed.')} title="?" />,
      headerStyle: s.headerStyles,
    }),
  },
  Detail: {
    screen: ProductDetailScreen,
    path: '/products/detail',
    navigationOptions: ({ navigation }) => ({
      // title: `${navigation.state.params.name}'s Profile!`,
      title: `Product Detail`,
      headerRight: <Button onPress={() => alert('? Button pressed.')} title="?" />,
      headerStyle: s.headerStyles,
    }),
  },
});

export default ProductScreen;
