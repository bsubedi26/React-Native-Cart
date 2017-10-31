import React from 'react'
import { StyleSheet, Text, ScrollView, View, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import AppStyles from 'constants/AppStyles'

export default class Indicator extends React.Component {
  render() {
    return (
      <Container>
        <ActivityIndicator size={'large'} />
      </Container>
    )
  }
}

const { totalHeight, headerHeight, tabbarHeight, centerHeight } = AppStyles

// center indicator vertically by subtracting top header & bottom tabbar height 
// const finalHeight = totalHeight - (headerHeight + tabbarHeight)

const Container = styled.View`
    justifyContent: center;
    height: ${centerHeight};
`