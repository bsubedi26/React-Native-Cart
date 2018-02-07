import React from 'react'
import { StackNavigator } from 'react-navigation'

import s from '../styles'
import getFixedTopNavigation from '../_helpers/getFixedTopNavigation'
import SettingsScreen from 'src/containers/settings'

const options = {
  // headerMode: 'none'
}
const LoginNavigator = StackNavigator({
  Settings: {
    screen: SettingsScreen,
    path: '/login',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Login', { navigation }),
  },
}, options);

export default LoginNavigator;
