import React from 'react';
import {
  WebView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class WebViewComponentExample extends React.Component {
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

