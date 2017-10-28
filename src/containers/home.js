import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components/native'
// import { bindActionCreators } from 'redux';
import { Text, View, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { Card } from 'react-native-elements'
import TopHeader from '../components/TopHeader'
import CardContent from '../components/CardContent'
import Phones from './home/Phones'
import * as shopping from '../reducers/shopping'
import { Font } from 'expo'
import { inject, observer } from 'mobx-react'

@inject('shopping')
@observer
class HomeScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        shopping: PropTypes.object.isRequired,
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
                <Ampersand>{this.props.shopping.cartLength}</Ampersand>
                <PhonesContainer>
                    <Phones shopping={this.props.shopping}/>
                </PhonesContainer>
                {/* <CardContent title="Home" navigation={this.props.navigation} /> */}
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
`
const Container = styled.View`
    flex: 1;
`
const PhonesContainer = styled.View`
    marginTop: 20px;
`


// const mapState = (state) => ({
//     phones: state.shopping.phones
// })
// const mapAction = (dispatch) => ({
//     shoppingAction: bindActionCreators(shopping, dispatch)
// })

// export default connect(mapState, mapAction)(HomeScreen)

export default HomeScreen;
