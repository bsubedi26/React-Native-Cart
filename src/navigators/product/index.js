import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Colors from 'src/themes/Colors'
import s from '../styles'
import getFixedTopNavigation from '../_helpers/getFixedTopNavigation'
import ProductMainScreen from 'src/containers/products'
import ProductDetailScreen from 'src/containers/products/Detail'

const options = {
  // headerMode: 'none'
}

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
}, options);

export default ProductScreen;
