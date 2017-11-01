import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { ActivityIndicator, View, Dimensions, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardContent from 'components/CardContent'
import Indicator from 'components/Indicator'

import { loading } from 'store/indicator/action'
import delay from 'util/delay' 
import app from 'util/feathers' 

import axios from 'axios'

const { width, height } = Dimensions.get('window')

class CurrencyScreen extends React.Component {

  state = {
    currencies: []
  }

  async componentDidMount() {
    await this.getTopTenCoins()
  }

  async getTopTenCoins () {
    const response = await axios.get('https://express-api3.herokuapp.com/api/coin/?limit=10')
    console.log(response)
    this.setState({
      currencies: response.data.currencies
    })
  }
  async getAllCoins () {
    const response = await axios.get('https://express-api3.herokuapp.com/api/coin/all')
    console.log(response)
  }


  render() {
    return (
      <View>

        {this.state.currencies.map(currency => {
          return (
            <View>
              <Title>{currency.name}</Title>
            </View>
          )
        })}
      </View>

    )
  }

}


const Container = styled.View `

`

const Title = styled.Text `
  fontSize: 22px;
`

export default CurrencyScreen
