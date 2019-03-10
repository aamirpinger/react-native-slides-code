import React, { Component } from 'react'
import {
    Slider,
    Text,
    View,
} from 'react-native'

class SliderComponentExample extends Component {
    state = { count: 0 }

    onChange = (value) => {
        this.setState({
            count: value
        })
    }
    render() {
        return (
            <View >
                <Slider
                    minimumValue={-10}
                    maximumValue={5}
                    step={1}
                    onValueChange={(value) => this.onChange(value)} />
                <Text>
                    {this.state.count}
                </Text>
            </View>
        )
    }
}


export default SliderComponentExample