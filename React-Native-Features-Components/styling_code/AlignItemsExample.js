import React, { Component } from 'react';
import { View } from 'react-native';

export default class AlignItemsExample extends Component {
    render() {
        return (
            <View style={{
                // Try setting `flexDirection` to
                    // column
                    // row
                flexDirection: 'column',
                flex: 1,
                // Try setting `justifyContent` to
                    // flex-start
                    // center
                    // flex-end
                    // space-around
                    // space-between
                justifyContent: 'space-around',
                // Try setting `alignItems` to
                    // flex-start
                    // center
                    // flex-end
                    // stretch
                alignItems: 'center'
            }}>
                <View style={{
                    backgroundColor: 'blue',
                    width: 40, height: 50
                }} />
                <View style={{
                    backgroundColor: 'brown',
                    width: 40, height: 50
                }} />
                <View style={{
                    backgroundColor: 'yellow',
                    width: 40, height: 50
                }} />
                <View style={{
                    backgroundColor: 'purple',
                    width: 40, height: 50
                }} />
            </View>
        );
    }
};

