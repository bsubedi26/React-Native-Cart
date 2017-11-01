import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import s from '../Styles'
import CurrencyScreen from 'containers/currency'

const SettingsNavigator = StackNavigator({
  Currencies: {
    screen: CurrencyScreen,
    path: '/list',
    navigationOptions: ({ navigation }) => ({
      title: 'CrytoCurrencies',
      
      // headerLeft: <Ionicons style={s.leftIcon} onPress={() => navigation.navigate('DrawerOpen')} name="md-menu" size={32} color="black" />,
      headerLeft: <Ionicons style={s.leftIcon} onPress={() => alert('DrawerOpen')} name="md-menu" size={32} color="black" />,
      headerRight: <Button onPress={() => alert('? Button pressed.')} title="?" />,
      headerStyle: s.headerStyles,
    }),
  },

});

export default SettingsNavigator;
