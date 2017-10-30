import React from 'react';
import { Text, View } from 'react-native';

class DetailScreen extends React.Component {
    componentDidMount() {
        const { navigation } = this.props
        // console.log(navigation)
    }
    render() {
        const { navigation } = this.props
        const { product } = navigation.state.params

        return (
            <View>
                <Text>{product.id}</Text>
                <Text>{product.name}</Text>
            </View>
        )
    }
}

export default DetailScreen