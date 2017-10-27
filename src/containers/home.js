import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components/native'
import { bindActionCreators } from 'redux';
import { View, ScrollView, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { Card } from 'react-native-elements'
import TopHeader from '../components/TopHeader'
import CardContent from '../components/CardContent'
import Phones from '../components/Phones'
import * as shopping from '../reducers/shopping'

class HomeScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        phones: PropTypes.array.isRequired,
    }
    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
                name={focused ? 'ios-home' : 'ios-home-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    };

    componentDidMount() {
        // this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <Container>
                <TopHeader />
                <View>
                    <Phones {...this.props}/>
                </View>
                {/* <CardContent title="Home" navigation={this.props.navigation} /> */}
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1;
`

const mapState = (state) => ({
    phones: state.shopping.phones
})
const mapAction = (dispatch) => ({
    shoppingAction: bindActionCreators(shopping, dispatch)
})

export default connect(mapState, mapAction)(HomeScreen)
