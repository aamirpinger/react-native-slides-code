import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, Image, TextInput, KeyboardAvoidingView } from 'react-native'

export default class SwitchTextbox extends Component {
    state = {
        imageSrc: 'https://avatars.io/facebook/',
        imageSize: '/extralarge.jpg',
        accountName: 'aamirpinger',
        switch: false,
    }

    handleSwitch = () => {
        this.setState((prevState) => ({
            switch: !prevState.switch
        }))
    }
    handleTextInputChange = (val) => {

        this.setState(() => ({
            accountName: val
        }))
    }

    render() {
        const img = this.state.imageSrc + this.state.accountName + this.state.imageSize

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Image
                    style={{ width: 250, height: 250 }}
                    source={{ uri: img }}
                />

                <Switch
                    value={this.state.switch}
                    onValueChange={this.handleSwitch}
                />

                {(this.state.switch) && <TextInput
                    value={this.state.accountName}
                    onChangeText={this.handleTextInputChange}
                    style={{ borderColor: 'black', borderWidth: 1, width: 150, paddingLeft: 5 }}
                />}
            </KeyboardAvoidingView >
        )
    }
}
//https://facebook.github.io/react-native/docs/switch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
    textBox: {
        padding: 25
    }
})