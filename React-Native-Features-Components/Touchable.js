import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

class Touchable extends Component {
  state = { count: 0 }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  onLongPress = () => {
    alert("Long Pressed!!")
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {
          // you can also try
          //    Button
          //    TouchableOpacity
          //    TouchableNativeFeedback
          //    TouchableWithoutFeedback
        }
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
          onLongPress={this.onLongPress}
        >
          <Text style={styles.button}>
            Click Here
          </Text>

        </TouchableHighlight>


        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            {this.state.count}
          </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    color: 'white',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

//AppRegistry.registerComponent('App', () => App)
export default Touchable