import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Colors from 'src/constants/Colors'
import s from '../styles'
import getFixedTopNavigation from '../getFixedTopNavigation'
import ProductMainScreen from 'src/containers/products'
import ProductDetailScreen from 'src/containers/products/Detail'

const ProductScreen = StackNavigator({
  Products: {
    screen: ProductMainScreen,
    path: '/products',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Products', { navigation }),
  },
  Detail: {
    screen: ProductDetailScreen,
    path: '/products/detail',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Product Detail', { childRoute: true, navigation }),
  },
});

export default ProductScreen;
