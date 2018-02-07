import React from 'react';
import { Button } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DrawerNavigator, StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'

import Colors from 'src/themes/Colors';
import ProductNavigator from './product';
import CartNavigator from './cart';
import LoginNavigator from './login';
import CurrencyNavigator from './currency';

const tabRoutes = {
  Products: {
    screen: ProductNavigator,
    path: '',
    navigationOptions: {
      tabBarLabel: 'Products',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Cart: {
    screen: CartNavigator,
    path: '',
    navigationOptions: {
      tabBarLabel: 'Cart',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-cart' : 'ios-cart-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  // Login: {
  //   screen: Login,
  //   path: '',
  //   navigationOptions: {
  //     tabBarLabel: 'Login',
  //     tabBarIcon: ({ tintColor, focused }) => (
  //       <Ionicons
  //         name={focused ? 'ios-settings' : 'ios-settings-outline'}
  //         size={26}
  //         style={{ color: tintColor }}
  //       />
  //     ),
  //   }
  // },
}

const tabConfig = {
    tabBarPosition: 'bottom',
    initialRouteName: 'Cart',
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

const TabStack = TabNavigator(tabRoutes, tabConfig);

export const AppNavigator = DrawerNavigator({
  Products: {
    screen: TabStack
  },
  Login: {
    screen: LoginNavigator
  },
});
// export const AppNavigator = TabNavigator(tabRoutes, navConfig);

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
