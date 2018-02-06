import React from 'react';
import { Button } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'

import Colors from 'src/constants/Colors';
import ProductNavigator from './product';
import CartNavigator from './cart';
import SettingsNavigator from './settings';
import CurrencyNavigator from './currency';

const rootRoutes = {
  Products: {
    screen: ProductNavigator,
    path: '',
  },
  Cart: {
    screen: CartNavigator,
    path: '',
  },
  Settings: {
    screen: SettingsNavigator,
    path: '',
  },
  // Currency: {
  //   screen: CurrencyNavigator,
  //   path: '',
  // },
}
const navConfig = {
    tabBarPosition: 'bottom',
    initialRouteName: 'Products',
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: 'white',
      },
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: Colors.facebook,
      },
    }
}

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
