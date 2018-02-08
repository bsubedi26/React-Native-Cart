import React from 'react'
import PropTypes from 'prop-types'
import { View, ToastAndroid } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CardContent from 'src/components/CardContent'
import Indicator from 'src/components/Indicator'
import LoginForm from 'src/components/form/user'

import { loading } from 'src/store/indicator/action'
import delay from 'src/util/delay'
import app from 'src/util/feathers'
import { ErrorContainer, ErrorText } from '../common'


class LoginScreen extends React.Component {
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
        const payload = { email, password, strategy: 'local' }
        
        dispatch(loading(true))
        return app.authenticate(payload)
            .then(user => {
                dispatch(loading(false))
                // dispatch({ type: 'USER_SET', payload: user })
                navigation.navigate('Products')
            })
            .catch(error => {
                dispatch(loading(false))
                this.setState({ error })
                // console.log('.catch ', error)
                return Promise.reject(error)
            })
    }
    renderForm() {
        return <LoginForm title={"Login Below"} handleSubmit={this.handleSubmit} />
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

const mapState = (state) => {
    return {
        indicator: state.indicator
    }
}

export default connect(mapState)(LoginScreen)