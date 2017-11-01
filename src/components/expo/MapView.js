import React from 'react'
import { MapView } from 'expo'

class MapViewCmp extends React.Component {
    render() {
        return (
            <MapView
                style={{
                    height: 400
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

        )
    }
}

export default MapViewCmp
