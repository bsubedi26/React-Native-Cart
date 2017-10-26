import React from 'react';
import { View, Platform, ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import HomeScreen from '../containers/home';
import ChatScreen from '../containers/chat';
import SettingsScreen from '../containers/settings';


const rootRoutes = {
  Home: {
    screen: HomeScreen,
    path: '',
  },
  Chat: {
    screen: ChatScreen,
    path: 'chat',
  },
  Settings: {
    screen: SettingsScreen,
    path: 'settings',
  },
}
const navConfig = {}

export const AppNavigator = TabNavigator(rootRoutes, navConfig);


class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };
    render() {
      return (
        <AppNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })} />
      );
    }
  }
  
const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
