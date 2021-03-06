import React from 'react'
import styled from 'styled-components/native'
import { Alert, View, Text, StyleSheet } from 'react-native'
import { Constants } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import AppStyles from 'src/themes/AppStyles'

class TopHeader extends React.Component {
    handleMenuPress() {
        alert('Alert!', 'Menu is for show! Leave it alone.')
    }
    handleRightIconPress() {
        Alert.alert('Alert!', 'I know you like this icon. Leave it alone.')
    }
    render() {
        return (
            <Container>
                <HeaderCtn>
                    <Ionicons onPress={this.handleMenuPress} name="md-menu" size={32} color="white" />
                    <Ionicons onPress={this.handleRightIconPress} name="md-aperture" size={32} color="black" />
                </HeaderCtn>
            </Container>
        )
    }
}

const Container = styled.View`
    paddingTop: ${Constants.statusBarHeight};
    height: ${AppStyles.headerHeight};
`

const HeaderCtn = styled.View`
    zIndex: 1;
    backgroundColor: #A0A0A0;

    shadowColor: grey;
    shadowRadius: 20;
    shadowOpacity: 1;

    flex: 1;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;

    paddingHorizontal: 10px;
`


const CartItems = styled.Text`
    color: black;
    font-size: 18px;
    font-style: italic;
`


export default TopHeader;
