import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'antd-mobile'

import Indicator from 'components/Indicator'
import * as currencyAction from 'store/currency/action'
import CurrencyList from './CurrencyList'

class CurrencyScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ tintColor, focused }) => (
      <MaterialCommunityIcons
        name={focused ? 'currency-btc' : 'currency-btc'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

  fetchCoins = () => {
    this.props.currencyAction.getTopTenCoins()
  }

  render() {
    return (
      <ScrollView>
        <View style={{padding: 20}}>
          <Button type="primary" onPressIn={this.fetchCoins}>Fetch Top Coins</Button>
        </View>

        {this.props.indicator.active ? <Indicator /> : <CurrencyList {...this.props} />}
    </ScrollView>

    )
  }

}

const mapState = (state) => {
  return {
    currencies: state.currency.topCurrencies,
    indicator: state.indicator
  }
}

const mapAction = (dispatch) => {
  return {
    currencyAction: bindActionCreators(currencyAction, dispatch)
  }
}
export default connect(mapState, mapAction)(CurrencyScreen)
