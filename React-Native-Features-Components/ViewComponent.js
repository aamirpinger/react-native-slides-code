import React, { Component } from 'react';
import { View } from 'react-native';

export default class ViewComponent extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View style={{
                flexDirection: 'row', height: 100, padding: 20,
                backgroundColor: 'black'
            }}>
                <View style={{ backgroundColor: 'white', flex: 2 }} />
                <View style={{ backgroundColor: 'green', flex: 5 }} />
            </View>
        );
    }

};

