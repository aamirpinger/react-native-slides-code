import React, { Component } from 'react';
import { View } from 'react-native';

export default class JustifyContentExample extends Component {
    render() {
        return (
            <View style={{
                // Try setting `flexDirection` to
                    // column
                    // row
                flexDirection: 'row',
                flex: 1,
                // Try setting `justifyContent` to
                    // flex-start
                    // center
                    // flex-end
                    // space-around
                    // space-between
                justifyContent: 'center',
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

