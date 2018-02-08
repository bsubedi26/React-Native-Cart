import React from 'react'
import PropTypes from 'prop-types'
import { View, Dimensions, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardContent from 'src/components/CardContent'
import Indicator from 'src/components/Indicator'
import SignupForm from 'src/components/form/user'

import { loading } from 'src/store/indicator/action'
import delay from 'src/util/delay'
import app from 'src/util/feathers'
import { ErrorContainer, ErrorText } from '../common'

class SettingsScreen extends React.Component {
    state = {
        error: undefined
    }
    static propTypes = {
        navigation: PropTypes.object.isRequired
    }
    
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
                navigation.navigate('Login')
            })
            .catch(error => {
                dispatch(loading(false))
                this.setState({ error })
                // ToastAndroid.show('There was an error. Try again!', ToastAndroid.SHORT);
                return Promise.reject(error)
            })
    }

    renderForm() {
        return <SignupForm title="Signup Below" handleSubmit={this.handleSubmit} />
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

const mapState = (state) => ({
    indicator: state.indicator
})

export default connect(mapState)(SettingsScreen)