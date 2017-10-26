import React from 'react'
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import TopHeader from '../components/TopHeader'
import CardContent from '../components/CardContent'

class HomeScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired
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

    render() {
        return (
            <ScrollView>
                <TopHeader />
                <CardContent title="Home" navigation={this.props.navigation} />
            </ScrollView>
        )
    }
}

export default HomeScreen
