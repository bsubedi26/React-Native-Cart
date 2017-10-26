import React from 'react'
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import TopHeader from '../components/TopHeader'
import CardContent from '../components/CardContent'

class ChatScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  static navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    return (
      <ScrollView>
        <TopHeader />
        <CardContent navigation={this.props.navigation} title="Chat!" />
      </ScrollView>
    )
  }

};

export default ChatScreen
