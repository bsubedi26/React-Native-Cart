import React from 'react'
import { Card, Button } from 'react-native-elements'

function CardContent (props) {
    const { title, navigation } = props
    return (
        <Card title={title}>
            <Button
            onPress={() => navigation.navigate('Home')}
            title="Go to home tab"
            />
            <Button
            onPress={() => navigation.navigate('Settings')}
            title="Go to settings tab"
            />
            <Button onPress={() => navigation.goBack(null)} title="Go back" />
        </Card>
    )
}

export default CardContent
