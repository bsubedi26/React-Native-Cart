import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { View, Dimensions, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardContent from 'src/components/CardContent'
import Indicator from 'src/components/Indicator'
import LoginForm from 'src/components/form/user';

import { loading } from 'src/store/indicator/action'
import delay from 'src/util/delay'
import app from 'src/util/feathers'

const { width, height } = Dimensions.get('window')

class SettingsScreen extends React.Component {
    state = {
        error: undefined
    }
    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    static navigationOptions = {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
                name={focused ? 'ios-settings' : 'ios-settings-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    };

    handleSubmit = (formValues, setSubmitting) => {
        console.log('FORM VALUES: ', formValues)
        const { email, password } = formValues
        const { navigation, dispatch } = this.props
        const userService = app.service('users')

        dispatch(loading(true))
        return userService.create({ email, password })
            .then(user => {
                // console.log('.then ', user)
                dispatch(loading(false))
                // setSubmitting(false)
                // ToastAndroid.show(`Successfully created: ${res.email}!`, ToastAndroid.SHORT);
                // dispatch({ type: 'USER_SET', payload: user })
                navigation.navigate('Products')
            })
            .catch(error => {
                dispatch(loading(false))
                // setSubmitting(false)
                this.setState({ error: error })
                // ToastAndroid.show('There was an error. Try again!', ToastAndroid.SHORT);
                console.log('.catch ', error)
            })
    }

    renderForm() {
        return <LoginForm handleSubmit={this.handleSubmit} />
    }
    renderError() {
        return (
            <ErrorContainer>
                <ErrorText>{this.state.error.message}</ErrorText>
            </ErrorContainer>
        )
    }

    render() {
        return (
            <View>
                {this.state.error ? this.renderError() : null}
                {this.props.indicator.active ? <Indicator /> : this.renderForm()}

            </View>
        )
    }
}

const ErrorContainer = styled.View`
    backgroundColor: red;
    height: 70px;
    alignItems: center;
    justifyContent: center;
`
const ErrorText = styled.Text`
    fontSize: 22px;
    color: white;
`

const mapState = (state) => {
    return {
        indicator: state.indicator
    }
}

export default connect(mapState)(SettingsScreen)