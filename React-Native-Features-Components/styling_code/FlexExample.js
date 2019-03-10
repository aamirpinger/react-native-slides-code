import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexExample extends Component {
    render() {
        return (
            <View style={{
                // Try setting `flexDirection` to
                    // column
                    // row
                flexDirection: 'column',
                //maxHeight: 100, 
                //maxWidth: 100,
                flex: 1
            }}>
                <View style={{
                    backgroundColor: 'blue',
                    flex: 2,
                }} />
                <View style={{
                    backgroundColor: 'brown',
                    flex: 4,
                }} />
                <View style={{
                    backgroundColor: 'yellow',
                    flex: 8,
                }} />
                <View style={{
                    backgroundColor: 'purple',
                    flex: 16,
                }} />
            </View>
        );
    }
};

