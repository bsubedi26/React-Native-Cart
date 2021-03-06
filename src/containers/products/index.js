import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import PhoneList from './PhoneList'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as cartAction from 'src/store/cart/action'

class ProductMainScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        products: PropTypes.array.isRequired,
        cartAction: PropTypes.object.isRequired
    }

    componentDidMount() {
        // const { state } = this.props.navigation
        // const { params } = this.props.navigation.state
        // this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        return (
            <Container>
                {/* <Ampersand>rnCart</Ampersand> */}
                <PhonesContainer>
                    {<PhoneList {...this.props} />}
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
    products: state.products,
})
const mapAction = (dispatch) => ({
    cartAction: bindActionCreators(cartAction, dispatch)
})

export default connect(mapState, mapAction)(ProductMainScreen)
