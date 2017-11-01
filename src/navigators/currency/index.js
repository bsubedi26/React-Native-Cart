import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import s from '../Styles'
import CurrencyScreen from 'containers/currency'
import CurrencyDetailScreen from 'containers/currency/Detail'

const CurrencyNavigator = StackNavigator({
  Currencies: {
    screen: CurrencyScreen,
    path: '/currency/list',
    navigationOptions: ({ navigation }) => ({
      title: 'CrytoCurrencies',
      
      // headerLeft: <Ionicons style={s.leftIcon} onPress={() => navigation.navigate('DrawerOpen')} name="md-menu" size={32} color="black" />,
      headerLeft: <Ionicons style={s.leftIcon} onPress={() => alert('DrawerOpen')} name="md-menu" size={32} color="black" />,
      headerRight: <Button onPress={() => alert('? Button pressed.')} title="?" />,
      headerStyle: s.headerStyles,
    }),
  },
  Detail: {
    screen: CurrencyDetailScreen,
    path: '/currency/detail',
    navigationOptions: ({ navigation }) => ({
      // title: `${navigation.state.params.name}'s Profile!`,
      title: `Currency Detail`,
      headerRight: <Button onPress={() => alert('? Button pressed.')} title="?" />,
      headerStyle: s.headerStyles,
    }),
  },

});

export default CurrencyNavigator;
