import React from 'react';
import { View, Platform, ScrollView, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import AppWithNavigationState from './src/navigators/AppNavigator';

import { Provider, connect } from 'react-redux';
import createStore from './src/util/createStore';

const { store } = createStore()
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
