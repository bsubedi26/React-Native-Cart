import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import TopHeader from 'components/TopHeader'
import Phones from './Phones'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cartAction from 'store/cart/action'

class HomeScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        products: PropTypes.array.isRequired,
        cartAction: PropTypes.object.isRequired
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
                <Ampersand>rnCart</Ampersand>
                <PhonesContainer>
                    {<Phones {...this.props} />}
                </PhonesContainer>
            </Container>
        )
    }
}


const Ampersand = styled.Text`
    color: #f3f3f3;
    backgroundColor: cornflowerblue;
    font-size: 120px;
    font-family: 'Baskerville';
    font-style: italic;
    line-height: 144px;
    text-align: center;
`
const Container = styled.View`
    flex: 1;
`
const PhonesContainer = styled.View`
    marginTop: 20px;
`



const mapState = (state) => ({
    products: state.products
})
const mapAction = (dispatch) => ({
    cartAction: bindActionCreators(cartAction, dispatch)
})

export default connect(mapState, mapAction)(HomeScreen)
