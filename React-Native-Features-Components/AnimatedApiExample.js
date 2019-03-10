import React, { Component } from 'react';
import { Button, View, Image, Animated, } from "react-native";


class AnimatedApiExample extends Component {
    state = {
        opacity: new Animated.Value(0),
        height: new Animated.Value(0),
        width: new Animated.Value(0),
    }

    animateImage = () => {
        const { opacity, width, height } = this.state

        Animated.timing(opacity, { toValue: 1, duration: 5000 }).start()
        // Animated.timing(width, { toValue: 300, duration: 5000 }).start()
        // Animated.timing(height, { toValue: 300, duration: 5000 }).start()

        // Animated.spring(opacity, { toValue: 1, speed: 2 }).start()
        Animated.spring(width, { toValue: 300, speed: 2 }).start()
        Animated.spring(height, { toValue: 300, speed: 2 }).start()


    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 30 }}>
                    <Animated.Image
                        style={{
                            opacity: this.state.opacity,
                            width: this.state.width,
                            height: this.state.height,
                        }}
                        source={require('./hands.png')}
                    />
                </View>
                <Button title="Click here" onPress={() => this.animateImage()} />

            </View>
        );
    }
}

export default AnimatedApiExample;