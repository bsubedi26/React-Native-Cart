import React from 'react'
import { StackNavigator } from 'react-navigation'

import s from 'src/navigators/styles'
import getFixedTopNavigation from 'src/navigators/_helpers/getFixedTopNavigation'
import SignupScreen from 'src/containers/user/signup'

const options = {
  // headerMode: 'none'
}
const SignupNavigator = StackNavigator({
  Settings: {
    screen: SignupScreen,
    path: '/signup',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Signup', { navigation }),
  },
}, options);

export default SignupNavigator;
