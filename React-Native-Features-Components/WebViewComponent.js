import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';


export default class WebViewComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          This is not actual google.com
        </Text>
        <WebView
          source={{ uri: "http://www.google.com/" }}
        />
      </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

