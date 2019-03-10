import React, { Component } from 'react';
import { StatusBar, Text, View, TouchableHighlight, StyleSheet } from 'react-native'
import { Constants } from 'expo'


function DummyStatusBar(props) {

    return (
        <View style={{
            backgroundColor: props.backgroundColor,
            borderWidth: 1,
            borderColor: 'black',
            height: Constants.statusBarHeight
        }} >
            <StatusBar
                translucent={false}
                {...props}
            />
        </View>
    );

}

export default class StatusBarExample extends Component {
    state = {
        bgColor: StatusBar.backgroundColor
    }

    handleColor = (color) => {
        this.setState({ bgColor: color })
    }

    render() {
        return (

            <View style={{
                flex: 1,
            }}>

                <DummyStatusBar backgroundColor={this.state.bgColor}
                    barStyle='dark-content' />

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>


                    <Text style={{ fontSize: 35 }}>
                        Status Bar color is set to : {" "} {this.state.bgColor}
                    </Text>

                    <TouchableHighlight
                        style={[{ backgroundColor: 'pink', }, styles.button]}
                        onPress={() => this.handleColor('pink')}
                    >
                        <Text style={{ fontSize: 20, }}>
                            Pink
                    </Text>
                    </TouchableHighlight>



                    <TouchableHighlight
                        style={[{ backgroundColor: 'lightblue', }, styles.button]}
                        onPress={() => this.handleColor('lightblue')}
                    >
                        <Text style={{ fontSize: 20, }}>
                            Light Blue
                    </Text>
                    </TouchableHighlight>



                    <TouchableHighlight
                        style={[{ backgroundColor: 'lightgreen', }, styles.button]}
                        onPress={() => this.handleColor('lightgreen')}
                    >
                        <Text style={{ fontSize: 20, }}>
                            Light Green
                    </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        width: 120,
        margin: 20,
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
    }
})