import React from 'react'
import { StackNavigator } from 'react-navigation'

import s from 'src/navigators/styles'
import getFixedTopNavigation from 'src/navigators/_helpers/getFixedTopNavigation'
import LoginScreen from 'src/containers/user/login'

const options = {
  // headerMode: 'none'
}
const LoginNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    path: '/login',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Login', { navigation }),
  },
}, options);

export default LoginNavigator;
