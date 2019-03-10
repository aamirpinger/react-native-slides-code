import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionExample extends Component {
    render() {
        return (
            // Try setting `flexDirection` to
                // column
                // row
            <View style={{
                flexDirection: 'row',
                flex: 1,
            }}>
                <View style={{
                    backgroundColor: 'white',
                    flex: 2
                }} />
                <View style={{
                    backgroundColor: 'green',
                    flex: 5
                }} />
            </View>
        );
    }
};

