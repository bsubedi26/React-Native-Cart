import React from 'react'
import { StackNavigator } from 'react-navigation'

import s from '../styles'
import getFixedTopNavigation from '../getFixedTopNavigation'
import SettingsScreen from 'src/containers/settings'

const SettingsNavigator = StackNavigator({
  Settings: {
    screen: SettingsScreen,
    path: '/settings',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Settings', { navigation }),
  },

});

export default SettingsNavigator;
