import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import TopHeader from 'components/TopHeader'
import CardContent from 'components/CardContent'


class SettingsScreen extends React.Component {
  static propTypes = {
      navigation: PropTypes.object.isRequired
  }
  static navigationOptions = {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
  };

  render() {
      return (
          <ScrollView>
              <TopHeader />
              <CardContent title="Settings" navigation={this.props.navigation} />
          </ScrollView>
      )
  }
}

export default SettingsScreen
