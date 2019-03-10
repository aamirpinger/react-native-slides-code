import React, { Component } from 'react';
import {
   Picker,
   View,
   Text,
   StyleSheet
} from 'react-native'

class PickerExample extends Component {
   state = { user: '' }
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
               <Picker.Item label="Aamir" value="aamir" />
               <Picker.Item label="Irfan" value="irfan" />
               <Picker.Item label="Muneeb" value="muneeb" />
            </Picker>
            <Text style={styles.text}>{this.state.user}</Text>
         </View>
      )
   }
}
export default PickerExample

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})