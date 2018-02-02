import React from 'react'
import styled from 'styled-components/native'
import { ScrollView, Text, View, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Badge, Card } from "react-native-elements"

class CurrencyDetailScreen extends React.Component {
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

    render() {
        const { navigation } = this.props
        const { currency } = navigation.state.params

        return (
            <CurrencyContainer>
                <Badge value={currency.name} />
                {/* <WhiteSpace /> */}
                <Text>${currency.price_usd}</Text>
                <WhiteSpace />
                <Text style={{ color: priceChangeColor(currency.percent_change_7d) }}>
                    {(currency.percent_change_7d[0] === '-') ? currency.percent_change_7d : `+${currency.percent_change_7d}`}
                </Text>
                {/* <WhiteSpace /> */}
                <Text style={{ justifyContent: 'center', width: '75%' }}>
                    {currency.description}
                </Text>
            </CurrencyContainer>
        )
    }

}


const priceChangeColor = (price) => {
    return (price.charAt(0) === '-') ? 'red' : 'green'
}


const CurrencyContainer = styled.View`
  flex: 1;
  margin: 5px;
  backgroundColor: #FFFCEB;
  height: 130px;

  justifyContent: center;
  alignItems: center;

`

export default CurrencyDetailScreen
