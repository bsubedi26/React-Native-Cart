import React from 'react'
import styled from 'styled-components/native'
import { ScrollView, Text, View, FlatList } from 'react-native'

import { Button, Grid, WhiteSpace } from 'antd-mobile'
import { Badge } from 'nachos-ui'
import { Card } from "react-native-elements"

class CurrencyList extends React.Component {
    goToDetails = (currency) => {
        const { navigation } = this.props
        navigation.navigate('Detail', { currency })
    }
    renderItem = ({ item }) => {
        return (
            <CurrencyContainer>
                <Badge value={item.name} />
                <WhiteSpace />
                <Text>${item.price_usd}</Text>
                <WhiteSpace />
                <Text style={{ color: priceChangeColor(item.percent_change_7d) }}>
                    {(item.percent_change_7d[0] === '-') ? item.percent_change_7d : `+${item.percent_change_7d}`}
                </Text>
                <WhiteSpace />
                <Button type="warning" size="small" onPressIn={this.goToDetails.bind(this, item)}>Details</Button>
            </CurrencyContainer>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.currencies}
                numColumns={2}
                keyExtractor={(item, index) => item.id}
                renderItem={this.renderItem}
            />
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

export default CurrencyList
