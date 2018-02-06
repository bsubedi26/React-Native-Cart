import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import s from '../styles';
import getFixedTopNavigation from '../getFixedTopNavigation';
import CurrencyScreen from 'src/containers/currency';
import CurrencyDetailScreen from 'src/containers/currency/Detail';

const CurrencyNavigator = StackNavigator({
  Currencies: {
    screen: CurrencyScreen,
    path: '/currencies',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('CryptoCurrencies', { navigation }),

  },
  Detail: {
    screen: CurrencyDetailScreen,
    path: '/currencies/detail',
    navigationOptions: ({ navigation }) => getFixedTopNavigation('Currency Detail', { childRoute: true, navigation }),
  },

});

export default CurrencyNavigator;
