import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import Metrics from 'src/themes/Metrics'

export default class Indicator extends React.Component {
  render() {
    return (
      <Container>
        <ActivityIndicator size={'large'} />
      </Container>
    )
  }
}

// center indicator vertically by subtracting top header & bottom tabbar height 
// const finalHeight = totalHeight - (headerHeight + tabbarHeight)

const Container = styled.View`
    justifyContent: center;
    height: ${() => Metrics.halfHeight};
`