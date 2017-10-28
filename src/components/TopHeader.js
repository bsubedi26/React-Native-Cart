import React from 'react';
import styled from 'styled-components/native'
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class TopHeader extends React.Component {
    render() {
        return (
            <Container>
                <HeaderCtn>
                    <Ionicons name="md-menu" size={32} color="white" />
                    <Ionicons name="md-aperture" size={32} color="black" />
                </HeaderCtn>
            </Container>
        )
    }
}

const Container = styled.View`
    height: 70;
`

const HeaderCtn = styled.View`
    zIndex: 1;
    height: 50;
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
