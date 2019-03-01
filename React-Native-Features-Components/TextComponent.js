import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class TextComponent extends Component {
    render() {
        return (
            <Text numberOfLines={2} style={{ fontFamily: 'Roboto' }}>
                <Text style={styles.titleText} onPress={this.onPressTitle}>
                    Bird's Nest{'\n'}
                </Text>
                <Text>
                    This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.This is not really a bird nest.
                </Text>
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

